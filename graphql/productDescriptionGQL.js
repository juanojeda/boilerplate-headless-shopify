import { gql } from "graphql-request";

const productDescriptionGQL = gql`
  {
    productDetailTemplate {
      description
    }
    pages {
      slug
      id
      title
      navigationItem
      footerItem
    }
  }
`;

export default productDescriptionGQL;
