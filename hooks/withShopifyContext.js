import { createContext } from "react";
import useShopify from "./useShopify";

export const ShopifyContext = createContext();

const WithShopifyContext = ({ children }) => {
  const shopify = useShopify({
    domain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN,
  });

  return (
    <ShopifyContext.Provider value={shopify}>
      {children}
    </ShopifyContext.Provider>
  );
};
export default WithShopifyContext;
