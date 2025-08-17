import { RESTUser } from './model';

export interface RESTUserPostRequestJSON {
  name: string;
  email: string;
  password: string;
}

export type RESTUserPostResponse = RESTUser;
