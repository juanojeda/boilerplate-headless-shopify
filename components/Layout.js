import FONTS from "../shared/ConstFonts.js";
import GlobalStyles from "../shared/GlobalStyles.js";
import FontsCDN from "./FontsCDN.js";
import Header from "./Header.js";

const Layout = ({ children }) => {
  return (
    <div>
      <FontsCDN fonts={FONTS} />
      <GlobalStyles />
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
