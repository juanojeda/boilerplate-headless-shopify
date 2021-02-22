import { gql } from "graphql-request";
const productGQL = gql`
  query getProduct($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      availableForSale
      descriptionHtml
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
            src: transformedSrc(
              maxHeight: 430
              maxWidth: 430
              scale: 2
              preferredContentType: WEBP
            )
            altText
            id
          }
        }
      }
    }
  }
`;

export default productGQL;
