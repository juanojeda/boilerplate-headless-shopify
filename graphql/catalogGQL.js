import Catalog from "../components/Catalog";

const catalogGQL = (handleToQuery) => ({
  query: /* GraphQL */ `
    {
      collectionByHandle(handle: "${handleToQuery}") {
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
              images(first: 4, maxHeight: 600, maxWidth: 600) {
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
  `,
});

export default catalogGQL;
