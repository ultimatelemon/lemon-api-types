import { RESTUser } from '../../users';
import { RESTOAuthClient } from '../clients';

export interface RESTOAuthAuthorizeGetQueryParams {
  client_id: string;
  scope: string;
  redirect_uri: string;
  response_type: 'code';
}

export interface RESTOAuthAuthorizeGetResponse {
  user: RESTUser;
  application: RESTOAuthClient;
}
