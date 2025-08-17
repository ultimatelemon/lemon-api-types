export interface RESTOAuthAuthorizePostRequestJSON {
  client_id: string;
  redirect_uri: string;
  scopes: string[];
  state: string;
  response_type: 'code';
}

export interface RESTOAuthAuthorizePostResponse {
  return_url: string;
}
