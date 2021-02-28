import { gql } from "graphql-request";

const pagePathsGQL = gql`
  {
    pages {
      slug
      id
      title
      navigationItem
    }
  }
`;

export default pagePathsGQL;
