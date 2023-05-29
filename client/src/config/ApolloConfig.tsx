import { ReactElement, ReactNode } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
// import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({
  uri: "http://localhost:4000",
});

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   return;
// });

const client = new ApolloClient({
  link: from([httpLink]),
  cache: new InMemoryCache(),
});

export default function Provider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
