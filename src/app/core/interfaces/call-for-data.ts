export class DataTemplate {
  filename: string;
  contentType: string;
  contentLength: number;
}

export interface CallForData {
  _id: string;
  date: Date;
  title: string;
  donors: string[];
  consumers: string[];
  description: string;
  keywords: string[];
  imageUrl: string;
  fileUrl: string;
  institution: {
    name: string;
    isPrivate: boolean;
    institutionType: string;
    location: string;
    website: string;
    department: string;
    description: string;
  };
  contactPerson: {
    name: string;
    surname: string;
    email: string;
  };
  data: {
    license: string,
    thirdParties: string,
    dataTemplate: DataTemplate,
    personalInformation: string,
  };
}
