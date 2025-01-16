import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../../shared/api/appolo/client";
import { FC, PropsWithChildren } from "react";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default Providers;
