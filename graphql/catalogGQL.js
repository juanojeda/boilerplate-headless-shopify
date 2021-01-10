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
                  images(first: 2) {
                    edges {
                      node {
                        originalSrc
                        altText
                        id
                      }
                    }
                  }
                  priceRange {
                    maxVariantPrice {
                      amount
                    }
                    minVariantPrice {
                      amount
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
