// import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { Global } from "@emotion/react";

export default function App({ Component }: AppProps) {
  return (
    <ApolloSetting>
      <div>
        <Global styles={globalStyles} />
        <div>ppppppppp</div>
        <Layout>
          <Component />
        </Layout>
      </div>
    </ApolloSetting>
  );
}
