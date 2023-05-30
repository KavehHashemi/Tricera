import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./store/store.ts";
import ApolloProvider from "./config/ApolloProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ApolloProvider>
      <Provider store={store}>
        <App></App>
      </Provider>
    </ApolloProvider>
  </BrowserRouter>
);
