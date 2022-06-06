export type IEvent = {
  id: number | null;
  created_at: Date | null;
  event_date: Date | null;
  name: string;
  number_of_participants: number;
  address: string;
  capacity: number;
};

export type Event = {
  id: number | null;
  createdAt: Date | null;
  eventDate: Date | null;
  name: string;
  numberOfParticipants: number;
  address: string;
  capacity: number;
};

export const createEvent = ({
  id = null,
  created_at = null,
  event_date = null,
  name = '',
  number_of_participants = 0,
  address = '',
  capacity = 0,
}: Partial<IEvent>): Event => {
  console.log('🚀 ~ number_of_participants', number_of_participants);
  return {
    id: id!,
    createdAt: created_at!,
    eventDate: event_date,
    name,
    numberOfParticipants: number_of_participants,
    address,
    capacity,
  };
};
