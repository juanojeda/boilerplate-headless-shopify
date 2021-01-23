import dynamic from "next/dynamic";
import FONTS from "../shared/ConstFonts.js";
import GlobalStyles from "../shared/GlobalStyles.js";
import FontsCDN from "./FontsCDN.js";

const Layout = ({ children }) => {
  const Cart = dynamic(() => import("./Cart.js"), { ssr: false });
  return (
    <div>
      <FontsCDN fonts={FONTS} />
      <GlobalStyles />
      <Cart />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
