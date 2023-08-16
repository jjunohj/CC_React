import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div>ppppppppp</div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
