import { RESTUser } from '../../users';

export interface RESTOAuthTokenPostRequestJSON {
  code: string;
  redirect_uri: string;
  client_id: string;
  refresh_token?: string;
  grant_type: 'authorization_code' | 'refresh_token';
}

export interface RESTOAuthTokenResponse {
  access_token: string;
  refresh_token: string;
  user: RESTUser;
}
