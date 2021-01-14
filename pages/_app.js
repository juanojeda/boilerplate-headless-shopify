import { GraphQLProvider } from "graphql-react";
import { withGraphQLApp } from "next-graphql-react";
import Layout from "../components/Layout";

import WithShopifyContext from "../hooks/withShopifyContext";
const App = ({ Component, pageProps, graphql }) => (
  <GraphQLProvider graphql={graphql}>
    <WithShopifyContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WithShopifyContext>
  </GraphQLProvider>
);

export default withGraphQLApp(App);
