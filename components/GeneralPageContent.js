import React, { useEffect } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import Head from "next/head";

import MaxWidthContainer from "./MaxWidthContainer";
import Title from "./Title";
import TextWrapper from "./TextWrapper";
import Image from "./Image";
import usePreloader from "../hooks/usePreloader";
import useMedia from "../hooks/useMedia";
import { useNavData } from "../hooks/useNav";

const Wrapper = styled(MaxWidthContainer)``;
const HeroImageWrapper = styled.div`
  height: 45vh;
  max-height: 45rem;
  overflow: hidden;
`;
const HeroImage = styled(Image)`
  max-height: 45rem;
  max-width: 1300px;
  display: block;
  margin: 0 auto;
`;
const Body = styled(TextWrapper)`
  max-width: 60ch;
`;

const GeneralPageContent = ({ title, content, coverImage, navContent }) => {
  const { isMedia } = useMedia();
  const format = isMedia("xs") || isMedia("sm") ? "medium" : "large";
  const imgUrl = coverImage.formats[format].url;
  const isLoaded = usePreloader([{ src: imgUrl }]);
  const { setCmsPageData } = useNavData();

  useEffect(() => {
    setCmsPageData(navContent);
  }, [setCmsPageData]);

  return (
    <>
      <Head>
        <title>{title} | HG Blades</title>
      </Head>
      <HeroImageWrapper>
        <HeroImage src={imgUrl} loaded={isLoaded} />
      </HeroImageWrapper>
      <Wrapper>
        <Title>{title}</Title>
        <Body as={ReactMarkdown} plugins={[gfm]}>
          {content}
        </Body>
      </Wrapper>
    </>
  );
};

export default GeneralPageContent;
