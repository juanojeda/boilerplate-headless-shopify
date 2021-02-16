import React, { useState } from "react";
import styled from "styled-components";
import useMedia from "../hooks/useMedia";
import usePreloader from "../hooks/usePreloader";
import Image from "./Image";
import ImageGrid from "./ImageGrid";

const Wrapper = styled.div``;
const MainImage = styled(Image)``;

const MobileControllers = ({ onPrev, onNext }) => {
  return (
    <>
      <button onClick={onPrev}>Previous</button>
      <button onClick={onNext}>Next</button>
    </>
  );
};

const wrapIndex = (newIndex, max) =>
  newIndex < 0 ? max : newIndex > max ? 0 : newIndex;

const ImageViewer = ({ images, className }) => {
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
    <Wrapper className={className}>
      <MainImage loaded={isLoaded} src={currentHero.transformedSrc} />
      {isMedia("xs") ? (
        <MobileControllers onNext={handleNext} onPrev={handlePrev} />
      ) : (
        <ImageGrid layout="row" images={images} onImageClick={onSetImage} />
      )}
    </Wrapper>
  );
};

export default ImageViewer;
