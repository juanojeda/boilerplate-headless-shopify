import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import usePreloader from "../hooks/usePreloader";
import { getColor } from "../utils/themeHelpers";
import Image from "./Image";

const isMosaic = ({ $layout }) => $layout === "mosaic";
const isRow = ({ $layout }) => $layout === "row";

const G_MAIN_IMG = "mainImage";
const G_FIRST_IMG = "thumbImage0";
const G_THUMB_IMG_1 = "thumbImage1";
const G_THUMB_IMG_2 = "thumbImage2";
const G_THUMB_IMG_3 = "thumbImage3";

const GRID_TEMPLATE_MOSAIC = css`
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "${G_MAIN_IMG} ${G_MAIN_IMG} ${G_MAIN_IMG}"
    "${G_THUMB_IMG_1} ${G_THUMB_IMG_2} ${G_THUMB_IMG_3}";
`;

const GRID_TEMPLATE_ROW = css`
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "${G_FIRST_IMG} ${G_THUMB_IMG_1} ${G_THUMB_IMG_2} ${G_THUMB_IMG_3}";
`;

const GRID_FIRST_IMAGE_AREA_MOSAIC = css`
  grid-area: ${G_MAIN_IMG};
`;

const GRID_FIRST_IMAGE_AREA_ROW = css`
  grid-area: ${G_FIRST_IMG};
`;

const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  width: 100%;
  ${(props) => isMosaic(props) && GRID_TEMPLATE_MOSAIC};
  ${(props) => isRow(props) && GRID_TEMPLATE_ROW};
`;

const StyledImage = styled(Image)`
  &:first-of-type {
    ${(props) => isRow(props) && GRID_FIRST_IMAGE_AREA_ROW};
    ${(props) => isMosaic(props) && GRID_FIRST_IMAGE_AREA_MOSAIC};
  }
  &:nth-of-type(2) {
    grid-area: ${G_THUMB_IMG_1};
  }
  &:nth-of-type(3) {
    grid-area: ${G_THUMB_IMG_2};
  }
  &:nth-of-type(4) {
    grid-area: ${G_THUMB_IMG_3};
  }
`;

const ImageGrid = ({
  images,
  className,
  layout,
  onImageClick,
  forwardLabel,
}) => {
  // preload images, show loading grid until preloaded
  // load smaller thumbs rather than full-size images

  const isLoaded = usePreloader(images);
  const onClickHandler = (id) => () => onImageClick(id);

  return (
    <Wrapper className={className} $layout={layout} aria-label={forwardLabel}>
      {images.map(({ id, src, altText }) => (
        <StyledImage
          loaded={isLoaded}
          key={id}
          src={`${src}`}
          alt={altText}
          $layout={layout}
          onClick={onImageClick && onClickHandler(id)}
          aria-labelledby={forwardLabel}
        />
      ))}
    </Wrapper>
  );
};

export default ImageGrid;
