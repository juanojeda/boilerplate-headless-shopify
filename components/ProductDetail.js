import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import useMedia from "../hooks/useMedia";
import { getMedia } from "../utils/themeHelpers";
import AddToCartButton from "./AddToCartButton";
import ImageViewer from "./ImageViewer";
import MaxWidthContainer from "./MaxWidthContainer";
import PriceTag from "./PriceTag";
import SoldOutBadge from "./SoldOutBadge";
import Title from "./Title";

const G_TITLE = "title";
const G_SALE_WRAPPER = "saleWrapper";
const G_IMAGE_VIEWER = "imageViewer";
const G_SPECS = "specifications";
const G_DESC = "description";

const Wrapper = styled(MaxWidthContainer)`
  padding: 1.5rem;
  display: grid;
  grid-template-areas:
    "${G_TITLE}"
    "${G_IMAGE_VIEWER}"
    "${G_SALE_WRAPPER}"
    "${G_SPECS}"
    "${G_DESC}";
  grid-auto-rows: max-content;
  position: relative;

  ${getMedia("sm")} {
    grid-column-gap: 2rem;
    grid-template-columns: 1.5fr 1fr;
    grid-template-areas:
      "${G_TITLE} ${G_TITLE}"
      "${G_IMAGE_VIEWER} ${G_SALE_WRAPPER}"
      "${G_IMAGE_VIEWER} blank"
      "${G_SPECS} ${G_SPECS}"
      "${G_DESC} ${G_DESC}";
  }

  ${getMedia("md")} {
    grid-column-gap: 3rem;
    grid-template-columns: 43rem auto;
    grid-template-areas:
      "${G_IMAGE_VIEWER} ${G_TITLE}"
      "${G_IMAGE_VIEWER} ${G_SALE_WRAPPER}"
      "${G_IMAGE_VIEWER} ${G_SPECS}"
      "${G_IMAGE_VIEWER} ${G_DESC}";
  }

  ${getMedia("lg")} {
    grid-template-columns: 43rem 4fr 3fr;
    grid-template-areas:
      "${G_IMAGE_VIEWER} ${G_TITLE} ${G_TITLE}"
      "${G_IMAGE_VIEWER} ${G_SALE_WRAPPER} blank"
      "${G_IMAGE_VIEWER} ${G_SPECS} ${G_SPECS}"
      "${G_IMAGE_VIEWER} ${G_DESC} ${G_DESC}";
  }

  ${getMedia("xl")} {
    grid-column-gap: 4rem;
    grid-template-areas:
      "${G_IMAGE_VIEWER} ${G_TITLE} ${G_TITLE}"
      "${G_IMAGE_VIEWER} ${G_SALE_WRAPPER} blank"
      "${G_IMAGE_VIEWER} ${G_DESC} ${G_SPECS}";
  }
`;

const StyledTitle = styled(Title)`
  grid-area: ${G_TITLE};
`;

const SaleWrapper = styled.div`
  grid-area: ${G_SALE_WRAPPER};
`;

const ImageViewerContainer = styled.div`
  grid-area: ${G_IMAGE_VIEWER};
  grid-row-gap: 2rem;
`;

const TextWrapper = styled.div`
  ul,
  ol {
    padding: 0 1.5rem;
    list-style-position: outside;
  }
  li {
    margin: 1.5rem 0;
  }
`;

const Specifications = styled(TextWrapper)`
  grid-area: ${G_SPECS};
`;
const Description = styled(TextWrapper)`
  grid-area: ${G_DESC};
`;

const ProductDetail = ({
  variants,
  title,
  availableForSale,
  images,
  descriptionHtml,
  template,
}) => {
  const { isMedia } = useMedia();

  return (
    <Wrapper>
      <StyledTitle level={isMedia("xs") ? "H3" : "H2"}>{title}</StyledTitle>
      <SaleWrapper>
        <SoldOutBadge availableForSale={availableForSale} />
        <PriceTag align="left" variants={variants} />

        <AddToCartButton
          availableForSale={availableForSale}
          variants={variants}
        />
      </SaleWrapper>
      <ImageViewerContainer>
        <ImageViewer images={images} />
      </ImageViewerContainer>
      <Specifications
        dangerouslySetInnerHTML={{ __html: descriptionHtml }}
      ></Specifications>
      <Description as={ReactMarkdown}>{template.description}</Description>
    </Wrapper>
  );
};

export default ProductDetail;
