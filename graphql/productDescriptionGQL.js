import { gql } from "graphql-request";

const productDescriptionGQL = gql`
  {
    productDetailTemplate {
      description
    }
  }
`;

export default productDescriptionGQL;
