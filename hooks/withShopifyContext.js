import { createContext } from "react";
import useShopify from "./useShopify";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider as ShopifyAppProvider } from "@shopify/polaris";

export const ShopifyContext = createContext();

const WithShopifyContext = ({ children }) => {
  const shopify = useShopify({
    domain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN,
  });

  return (
    <ShopifyAppProvider i18n={enTranslations}>
      <ShopifyContext.Provider value={shopify}>
        {children}
      </ShopifyContext.Provider>
    </ShopifyAppProvider>
  );
};
export default WithShopifyContext;
