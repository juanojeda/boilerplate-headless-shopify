import React from "react";
import GeneralPageContent from "../components/GeneralPageContent";
import pageContentGQL from "../graphql/pageContentGQL";
import pagePathsGQL from "../graphql/pagePathsGQL";
import { fetchContentGQLAsync } from "../shared/fetchGQLAsync";

export const getStaticPaths = async () => {
  const { pages } = await fetchContentGQLAsync(pagePathsGQL);

  return {
    paths: pages.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const { pages, navContent } = await fetchContentGQLAsync(pageContentGQL, {
    slug,
  });
  const page = pages[0];

  return {
    props: { ...page, navContent },
  };
};

const CMSContentPage = ({ id, content, title, coverImage, navContent }) => {
  return (
    <GeneralPageContent
      content={content}
      title={title}
      coverImage={coverImage}
      navContent={navContent}
    />
  );
};

export default CMSContentPage;
