import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import FONTS from "../shared/ConstFonts.js";
import GlobalStyles from "../shared/GlobalStyles.js";
import FontsCDN from "../components/FontsCDN.js";

import WithShopifyContext from "../hooks/withShopifyContext";
import THEME from "../shared/ConstTheme";
const App = ({ Component, pageProps }) => {
  return (
    <>
      <FontsCDN fonts={FONTS} />
      <ThemeProvider theme={THEME}>
        <GlobalStyles />
        <WithShopifyContext>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </WithShopifyContext>
      </ThemeProvider>
    </>
  );
};

export default App;
