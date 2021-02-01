import React from "react";
import styled from "styled-components";
import { getColor } from "../utils/themeHelpers";

const G_MAIN_IMG = "mainImage";
const G_THUMB_IMG_A = "thumbImageA";
const G_THUMB_IMG_B = "thumbImageB";
const G_THUMB_IMG_C = "thumbImageC";

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "${G_MAIN_IMG} ${G_MAIN_IMG} ${G_MAIN_IMG}"
    "${G_THUMB_IMG_A} ${G_THUMB_IMG_B} ${G_THUMB_IMG_C}";
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  width: 100%;
`;
const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  background: ${getColor("neutral", "light_80")};

  &:first-of-type {
    grid-area: ${G_MAIN_IMG};
  }
  &:nth-of-type(2) {
    grid-area: ${G_THUMB_IMG_A};
  }
  &:nth-of-type(3) {
    grid-area: ${G_THUMB_IMG_B};
  }
  &:nth-of-type(4) {
    grid-area: ${G_THUMB_IMG_C};
  }
`;

const ImageGrid = ({ images }) => {
  // preload images, show loading grid until preloaded
  // load smaller thumbs rather than full-size images

  return (
    <Wrapper>
      {images.map((img) => (
        <Image key={img.id} src={`${img.originalSrc}`} alt={img.altText} />
      ))}
    </Wrapper>
  );
};

export default ImageGrid;
