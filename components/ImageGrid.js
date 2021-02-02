import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { getColor } from "../utils/themeHelpers";
import isClient from "../utils/isClient";

const G_MAIN_IMG = "mainImage";
const G_THUMB_IMG_A = "thumbImageA";
const G_THUMB_IMG_B = "thumbImageB";
const G_THUMB_IMG_C = "thumbImageC";

const pulseAnimation = (props) => keyframes`
  0% {
    
    background: ${getColor("neutral", "light_60")(props)};
  }
  70% {
    background: ${getColor("neutral", "light_80")(props)};
  }
  100% {
    background: ${getColor("neutral", "light_80")(props)};
  }
`;

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

  ${({ loaded }) =>
    !loaded &&
    css`
      padding-bottom: 100%;
      animation-duration: 1.5s;
      animation-timing-function: ease-in;
      animation-direction: alternate;
      -moz-animation-iteration-count: infinite;
      -moz-animation-name: ${(props) => pulseAnimation(props)};
    `}

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

const preloader = async (images, setter) => {
  await Promise.all(
    images.map(
      (img) =>
        new Promise((resolve) => {
          const pre = document.createElement("img");
          pre.onload = resolve;
          pre.src = img.transformedSrc;
        })
    )
  );

  setter();
};

const ImageGrid = ({ images }) => {
  // preload images, show loading grid until preloaded
  // load smaller thumbs rather than full-size images

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!isClient()) return;

    preloader(images, () => setLoaded(true));
  }, [preloader]);

  return (
    <Wrapper>
      {images.map(({ id, transformedSrc, width, height, altText }) => (
        <Image
          loaded={loaded}
          as={loaded ? "img" : "div"}
          key={id}
          src={`${transformedSrc}`}
          width={width}
          height={height}
          alt={altText}
        />
      ))}
    </Wrapper>
  );
};

export default ImageGrid;
