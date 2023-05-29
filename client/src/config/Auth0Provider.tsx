import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithNavigate = ({ children }: any) => {
  const navigate = useNavigate();

  // const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  // const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  // const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;

  const domain = "dev-jjwjtd6elz5b5q0y.us.auth0.com";
  const clientId = "zjU7zvjeZy2EoRYqxrFjkqNvrQXmGfMF";
  const redirectUri = "http://localhost:5173";
  const audience = "http://localhost:4000/";

  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience: audience,
      }}
      onRedirectCallback={onRedirectCallback}
      useRefreshTokens
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};
