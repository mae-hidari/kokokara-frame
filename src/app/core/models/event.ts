export type IEvent = {
  id: number;
  created_at: Date;
  name: string;
  capacity: number;
  start_date?: Date | null;
  end_date?: Date | null;
  number_of_participants?: number;
  location?: string;
  url?: string;
};

export type Event = {
  id: number;
  createdAt: Date;
  name: string;
  capacity: number;
  startDate?: Date | null;
  endDate?: Date | null;
  numberOfParticipants?: number;
  location?: string;
  url?: string;
};

export const createEvent = ({
  id,
  created_at,
  name = '',
  capacity = 0,
  start_date = null,
  end_date = null,
  number_of_participants = 0,
  location = '',
  url = '',
}: Partial<IEvent>): Event => {
  return {
    id: id!,
    createdAt: created_at!,
    name,
    capacity,
    startDate: start_date,
    endDate: end_date,
    numberOfParticipants: number_of_participants,
    location,
    url,
  };
};

export const createIEvent = ({
  id,
  createdAt,
  name,
  capacity,
  startDate,
  endDate,
  numberOfParticipants,
  location,
  url,
}: Partial<Event>): Partial<IEvent> => {
  return {
    id,
    created_at: createdAt,
    name,
    capacity,
    start_date: startDate,
    end_date: endDate,
    number_of_participants: numberOfParticipants,
    location,
    url,
  };
};

export const createInsertEvent = ({
  name,
  capacity,
  startDate,
  endDate,
  numberOfParticipants,
  location,
  url,
}: Partial<Event>): Omit<IEvent, 'id' | 'created_at'> => {
  return {
    name: name ?? '',
    capacity: capacity ?? 0,
    start_date: startDate ?? null,
    end_date: endDate ?? null,
    number_of_participants: numberOfParticipants ?? 0,
    location: location ?? '',
    url: url ?? '',
  };
};
