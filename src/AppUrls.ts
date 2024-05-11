class GlobalAppUrls {
  public Client = {
    Home: "/",
    NotFoundPage: '/notfound'
  };

  public Server = {
    Account: {
      Login: "/api/v1/users/login",
      Logout: "/api/v1/users/logout",
    },
  };
}

export const AppUrls = new GlobalAppUrls();
