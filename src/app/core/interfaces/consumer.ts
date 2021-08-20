import { User } from './user';

export interface Consumer extends User {
  isPrivate: boolean;
  consumerType: string;
  location: string;
  website: string;
  department: string;
  description: string;
  calls: string[];
}
