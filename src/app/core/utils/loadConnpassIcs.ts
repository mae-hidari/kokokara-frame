import { zonedTimeToUtc } from 'date-fns-tz';

import { Event } from '../models';

export const loadConnpassIcs = (
  file: File,
  callback: {
    success: (
      eventRequest: Omit<Event, 'id' | 'createdAt' | 'capacity'>,
    ) => void;
    error?: (error?: any) => void;
  },
) => {
  try {
    const reader = new FileReader();
    reader.onload = (event) => {
      const ics = event.target?.result?.toString().replace(/\r?\n/g, '');

      if (!ics) {
        return;
      }

      // 各項目を抽出
      const name = ics.match(/(?<=SUMMARY:).*(?=DTSTART)/);

      const startDate = ics
        .match(
          /(?<=DTSTART;TZID=UTC;VALUE=DATE-TIME:).*(?=DTEND;TZID=UTC;VALUE=DATE-TIME)/,
        )
        ?.toString();
      const endDate = ics
        .match(
          /(?<=DTEND;TZID=UTC;VALUE=DATE-TIME:).*(?=DTSTAMP;VALUE=DATE-TIME:)/,
        )
        ?.toString();
      const location = ics.match(/(?<=LOCATION:).*(?=URL)/);
      const url = ics.match(/(?<=URL:).*(?=END:VEVENT)/);

      callback.success({
        name: name?.toString() || '',
        startDate: startDate
          ? zonedTimeToUtc(parseUTCDate(startDate), 'Asia/Tokyo')
          : null,
        endDate: endDate
          ? zonedTimeToUtc(parseUTCDate(endDate), 'Asia/Tokyo')
          : null,
        location: location?.toString() || '',
        url: url?.toString() || '',
      });
    };

    reader.readAsText(file);
  } catch (error) {
    callback.error?.(error);
  }
};

const parseUTCDate = (d: string) => {
  const year = +d.substring(0, 4);
  const month = +d.substring(4, 6) - 1;
  const date = +d.substring(6, 8);
  const hours = +d.substring(9, 11);
  const minutes = +d.substring(11, 13);

  return Date.UTC(year, month, date, hours, minutes);
};
