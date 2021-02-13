import { gql } from "graphql-request";

const productHandlesGQL = gql`
  {
    products(first: 10) {
      edges {
        node {
          id
          handle
        }
      }
    }
  }
`;

export default productHandlesGQL;
