import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./store/store.ts";
import { Auth0ProviderWithNavigate } from "./config/Auth0Provider.tsx";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <App></App>
        </Provider>
      </ApolloProvider>
    </Auth0ProviderWithNavigate>
  </BrowserRouter>
);
