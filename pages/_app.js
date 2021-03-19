import { ThemeProvider } from "styled-components";
import Head from "next/head";
import Layout from "../components/Layout";
import FONTS from "../shared/ConstFonts";
import GlobalStyles from "../shared/GlobalStyles";
import FontsCDN from "../components/FontsCDN";

import WithShopifyContext from "../hooks/withShopifyContext";
import { WithNavData } from "../hooks/useNav";
import THEME from "../shared/ConstTheme";
import Favicons from "../components/Favicons";
import { WithWebSupport } from "../hooks/useWebSupport";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>HG Blades</title>
      </Head>
      <Favicons />
      <FontsCDN fonts={FONTS} />
      <ThemeProvider theme={THEME}>
        <WithWebSupport>
          <WithNavData>
            <GlobalStyles />
            <WithShopifyContext>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </WithShopifyContext>
          </WithNavData>
        </WithWebSupport>
      </ThemeProvider>
    </>
  );
};

export default App;
