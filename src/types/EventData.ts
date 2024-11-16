export interface EventsDataType {
  id: string;
  name: string;
  description: string;
  venue: string;
  isPaid: boolean;
  isOnline: boolean;
  guest: string | null;
  eventTime: string;
  imageUrls: string[];
  isPrivate: boolean;
  banner: string;
  eventDate: Date;
}