import { gql } from "graphql-request";

const pagePathsGQL = gql`
  {
    pages {
      slug
      id
      title
      navigationItem
      footerItem
    }
  }
`;

export default pagePathsGQL;
