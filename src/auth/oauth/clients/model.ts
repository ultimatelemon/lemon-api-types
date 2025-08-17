import { Nullable, RESTBase } from '../../../core/utils';

export interface RESTOAuthClient extends RESTBase {
  name: string;
  redirect_uri: string;
  verified_at: Nullable<string>;
  privacy_url: Nullable<string>;
  terms_url: Nullable<string>;
  icon_url: Nullable<string>;
  is_active: boolean;
  flags: number;
}
