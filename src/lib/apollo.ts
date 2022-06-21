import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o8qz7i1baf01xig744ahf4/master",
  cache: new InMemoryCache(),
});
