import { gql } from "graphql-request";

const allPagesGQL = gql`
  pages {
    id
    title
    slug
    content
    coverImage {
     	caption
      alternativeText
      formats
    }
  }
`;

export default allPagesGQL;
