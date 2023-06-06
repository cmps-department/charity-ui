import { UserManager } from "oidc-client-ts"

export const settings = {
  authority: process.env.REACT_APP_AUTHORITY,
  client_id: process.env.REACT_APP_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URL,
  response_type: process.env.REACT_APP_RESPONSE_TYPE,
  scope: process.env.REACT_APP_SCOPE,
  onSigninCallback: () => {
    window.history.replaceState(
      {},
      document.title,
      window.location.pathname
    )
  }
}

export const user = new UserManager(settings);

export async function getToken() {
  const userInfo = await user.getUser();
  if (userInfo) {
    return userInfo.access_token;
  } else {
    return "";
  }
}