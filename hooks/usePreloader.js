import { useEffect, useState } from "react";
import isClient from "../utils/isClient";

const preloader = async (images) => {
  return Promise.all(
    images.map(
      (img) =>
        new Promise((resolve) => {
          const pre = new Image();
          pre.onload = resolve;
          pre.src = img.transformedSrc;
        })
    )
  );
};

const usePreloader = (images) => {
  const [isLoaded, setIsLoaded] = useState(false);
  let canSetLoaded = true;
  useEffect(() => {
    if (!isClient()) return;

    preloader(images).then(() => {
      if (canSetLoaded) {
        setIsLoaded(true);
      }
    });

    return () => {
      canSetLoaded = false;
    };
  }, [preloader]);

  return isLoaded;
};

export default usePreloader;
