import { gql } from "graphql-request";

const pagePathsGQL = gql`
  {
    pages {
      slug
      id
    }
  }
`;

export default pagePathsGQL;
