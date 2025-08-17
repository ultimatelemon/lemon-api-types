export const AuthRoutes = {
  oauthClients(id: string) {
    return `/api/oauth/clients/${id}` as const;
  },
  get authorize() {
    return '/api/oauth/authorize' as const;
  },
  get signIn() {
    return '/api/oauth/signin' as const;
  },
  get signOut() {
    return '/api/oauth/signout' as const;
  },
  get exchangeToken() {
    return '/api/oauth/token' as const;
  },
  get createUser() {
    return '/api/users' as const;
  }
};
