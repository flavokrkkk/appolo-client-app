import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

export class ApolloInstance {
  client: ApolloClient<NormalizedCacheObject>;

  constructor(baseUrl: string) {
    if (!baseUrl) throw new Error("Не передан базовый url!");

    this.client = new ApolloClient({
      cache: new InMemoryCache(),
      uri: baseUrl,
    });
  }
}

export const { client: apolloClient } = new ApolloInstance(
  import.meta.env.VITE_BASE_SERVER_URL!
);
