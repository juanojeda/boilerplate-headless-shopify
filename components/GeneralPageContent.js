import React from "react";
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

const Wrapper = styled(MaxWidthContainer)``;
const HeroImageWrapper = styled.div`
  height: 45vh;
  overflow: hidden;
`;
const Body = styled(TextWrapper)`
  max-width: 60ch;
`;

const GeneralPageContent = ({ title, content, coverImage }) => {
  const { isMedia } = useMedia();
  const format = isMedia("xs") || isMedia("sm") ? "medium" : "large";
  const imgUrl = coverImage.formats[format].url;
  const isLoaded = usePreloader([{ src: imgUrl }]);

  return (
    <>
      <Head>
        <title>{title} | HG Blades</title>
      </Head>
      <HeroImageWrapper>
        <Image src={imgUrl} maxHeight="45rem" loaded={isLoaded} />
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
