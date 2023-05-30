import { ReactElement, ReactNode, useMemo } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

export default function Provider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const client = useMemo(() => {
    const httpLink = new HttpLink({
      uri: "http://localhost:4000",
    });

    return new ApolloClient({
      link: from([httpLink]),
      cache: new InMemoryCache(),
    });
  }, []);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
