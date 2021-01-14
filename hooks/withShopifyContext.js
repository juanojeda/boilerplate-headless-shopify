import { createContext } from "react";
import useShopify from "./useShopify";
import env from "../env.json";

export const ShopifyContext = createContext();

const WithShopifyContext = ({ children }) => {
  const shopify = useShopify({
    domain: env.SHOPIFY_DOMAIN,
    storefrontAccessToken: env.SHOPIFY_ACCESS_TOKEN,
  });

  return (
    <ShopifyContext.Provider value={shopify}>
      {children}
    </ShopifyContext.Provider>
  );
};
export default WithShopifyContext;
