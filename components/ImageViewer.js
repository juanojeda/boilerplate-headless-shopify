import React, { useState } from "react";
import styled from "styled-components";
import useMedia from "../hooks/useMedia";
import usePreloader from "../hooks/usePreloader";
import Icon from "./Icon";
import { MobileChevronMajor } from "@shopify/polaris-icons";
import Image from "./Image";
import ImageGrid from "./ImageGrid";
import { getColor } from "../utils/themeHelpers";
import { transparentize } from "polished";

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 1.5rem;
  position: relative;
`;
const MainImage = styled(Image)`
  min-height: 30rem;
`;
const NavIcon = styled(Icon).attrs({ icon: MobileChevronMajor })`
  background: ${(props) => transparentize(0.7, getColor("black")(props))};
  fill: ${(props) => transparentize(0.1, getColor("white")(props))};
  height: 5rem;
  width: 4rem;
`;
const BaseButton = styled.button`
  appearance: none;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 0;
  height: 100%;
  padding: 0;
  position: absolute;
`;
const NextButton = styled(BaseButton)`
  right: 0;
  ${NavIcon} {
    transform: rotate(180deg);
  }
`;
const PrevButton = styled(BaseButton)`
  left: 0;
`;

const MobileControllers = ({ onPrev, onNext }) => {
  return (
    <>
      <PrevButton onClick={onPrev}>
        <NavIcon />
        Previous
      </PrevButton>
      <NextButton onClick={onNext}>
        <NavIcon />
        Next
      </NextButton>
    </>
  );
};

const wrapIndex = (newIndex, max) =>
  newIndex < 0 ? max : newIndex > max ? 0 : newIndex;

const ImageViewer = ({ images, className, forwardLabel }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isLoaded = usePreloader(images);
  const { isMedia } = useMedia();

  const currentHero = images[currentIndex];

  const onSetImage = (imgId) =>
    setCurrentIndex(images.findIndex(({ id }) => id === imgId));

  const handleShiftIndex = (direction) => () => {
    const newIndex = currentIndex + direction;
    setCurrentIndex(wrapIndex(newIndex, images.length - 1));
  };

  const handlePrev = handleShiftIndex(-1);
  const handleNext = handleShiftIndex(1);

  return (
    <Wrapper
      className={className}
      role="img"
      aria-label={`Various angles of the product: ${forwardLabel}`}
    >
      <MainImage
        loaded={true}
        src={currentHero.src}
        aria-labelledby={forwardLabel}
      />
      {isMedia("xs") || isMedia("sm") ? (
        <MobileControllers onNext={handleNext} onPrev={handlePrev} />
      ) : (
        <ImageGrid layout="row" images={images} onImageClick={onSetImage} />
      )}
    </Wrapper>
  );
};

export default ImageViewer;
