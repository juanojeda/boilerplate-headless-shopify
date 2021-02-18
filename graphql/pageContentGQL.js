import { gql } from "graphql-request";

const pageContentGQL = gql`
  query getPageContent($slug: String!) {
    pages(where: { slug: $slug }) {
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
  }
`;

export default pageContentGQL;
