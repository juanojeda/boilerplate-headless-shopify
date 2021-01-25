import Neat from "neat-components";
import { ThemeProvider } from "styled-components";
import { GraphQLProvider } from "graphql-react";
import { withGraphQLApp } from "next-graphql-react";
import Layout from "../components/Layout";
import FONTS from "../shared/ConstFonts.js";
import GlobalStyles from "../shared/GlobalStyles.js";
import FontsCDN from "../components/FontsCDN.js";

import WithShopifyContext from "../hooks/withShopifyContext";
import THEME from "../shared/ConstTheme";
import isClient from "../utils/isClient";
const App = ({ Component, pageProps, graphql }) => {
  const showGrid = isClient() ? localStorage.getItem("__showGrid") : false;
  return (
    <GraphQLProvider graphql={graphql}>
      <WithShopifyContext>
        <FontsCDN fonts={FONTS} />
        <ThemeProvider theme={THEME}>
          <GlobalStyles $showGrid={showGrid} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </WithShopifyContext>
    </GraphQLProvider>
  );
};

export default withGraphQLApp(App);
