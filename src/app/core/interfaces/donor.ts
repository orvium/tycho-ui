import { User } from './user';

export interface CallShortInfo {
  callId: string;
  date: Date;
}

export interface Donor extends User {
  surname: string;
  institution: string;
  calls: CallShortInfo[];
}
