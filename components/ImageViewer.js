import React, { useState } from "react";
import styled from "styled-components";
import usePreloader from "../hooks/usePreloader";
import isClient from "../utils/isClient";
import Image from "./Image";
import ImageGrid from "./ImageGrid";

const Wrapper = styled.div``;
const MainImage = styled(Image)``;

const ImageViewer = ({ images, className }) => {
  const [currentHero, setCurrentHero] = useState(images[0]);
  const isLoaded = usePreloader(images);

  const onClickHandler = (imgId) =>
    setCurrentHero(images.find(({ id }) => id === imgId));

  return (
    <Wrapper>
      <MainImage loaded={isLoaded} src={currentHero.transformedSrc} />
      <ImageGrid layout="row" images={images} onImageClick={onClickHandler} />
    </Wrapper>
  );
};

export default ImageViewer;
