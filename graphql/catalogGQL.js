import { gql } from "graphql-request";

const catalogGQL = gql`
  query getCollection($handle: String!) {
    collectionByHandle(handle: $handle) {
      id
      handle
      title
      products(first: 50) {
        edges {
          node {
            id
            title
            availableForSale
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
            images(first: 4) {
              edges {
                node {
                  transformedSrc(scale: 2, maxHeight: 300, maxWidth: 300)
                  altText
                  id
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default catalogGQL;
