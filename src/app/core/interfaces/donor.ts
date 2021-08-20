import { User } from './user';

export interface Donor extends User {
  surname: string;
  institution: string;
  calls: string[];
}
