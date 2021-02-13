import { useEffect, useState } from "react";
import isClient from "../utils/isClient";

const preloader = async (images, setter) => {
  await Promise.all(
    images.map(
      (img) =>
        new Promise((resolve) => {
          const pre = new Image();
          pre.onload = resolve;
          pre.src = img.transformedSrc;
        })
    )
  );

  setter();
};

const usePreloader = (images) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (!isClient()) return;

    preloader(images, () => setIsLoaded(true));
  }, [preloader]);

  return isLoaded;
};

export default usePreloader;
