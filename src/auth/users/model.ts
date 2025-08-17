import { Nullable, RESTBase } from '../../core/utils';

export interface RESTUser extends RESTBase {
  name: string;
  email: string;
  password: string;
  verified_at: Nullable<string>;
}
