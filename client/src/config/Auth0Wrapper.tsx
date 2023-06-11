import { Auth0Provider } from "@auth0/auth0-react";
import { ReactNode } from "react";

const Auth0Wrapper = ({ children }: { children: ReactNode }) => {
  const domain = "dev-jjwjtd6elz5b5q0y.us.auth0.com";
  const clientId = "p1tuVxHswUMWfQu9LLJjTLysSWMp8HjH";
  const audience = "http://localhost:4000/";
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: audience,
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0Wrapper;
