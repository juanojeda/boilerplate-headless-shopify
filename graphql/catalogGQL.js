import Catalog from "../components/Catalog";

const catalogGQL = {
  query: /* GraphQL */ `
    {
      collections(first: 1) {
        edges {
          node {
            id
            handle
            title
            products(first: 50) {
              edges {
                node {
                  id
                  title
                  availableForSale
                  totalInventory
                  variants(first: 1) {
                    edges {
                      node {
                        id
                        priceV2 {
                          amount
                          currencyCode
                        }
                      }
                    }
                  }
                  images(first: 2) {
                    edges {
                      node {
                        originalSrc
                        altText
                        id
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `,
};

export default catalogGQL;
