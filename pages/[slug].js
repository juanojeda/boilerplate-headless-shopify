import React from "react";
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
  const { pages } = await fetchContentGQLAsync(pageContentGQL, { slug });
  const page = pages[0];

  return {
    props: page,
  };
};

const CMSContentPage = ({ id, slug, title }) => {
  return <div>{slug}</div>;
};

export default CMSContentPage;
