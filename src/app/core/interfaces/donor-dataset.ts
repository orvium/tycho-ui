import { Donor } from './donor';

export class FileMetadata {
  filename!: string;
  contentType!: string;
  contentLength!: number;
  url?: string;
}

export interface DonorDataset {
  owner: string;
  call: string;
  description: string;
  tags: string[];
  file: FileMetadata;
}

export interface DonorDatasetPopulated extends Omit<DonorDataset, 'owner'> {
  owner: Donor;
}
