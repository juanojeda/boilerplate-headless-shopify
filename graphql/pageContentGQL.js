import { gql } from "graphql-request";

const pageContentGQL = gql`
  query getPageContent($slug: String!) {
    navContent: pages {
      slug
      id
      title
      navigationItem
      footerItem
    }
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
