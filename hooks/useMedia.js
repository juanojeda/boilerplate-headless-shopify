import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components";
import debounce from "../shared/debounce";
import isClient from "../utils/isClient";

const getMediaQueriesList = (breakpoints) =>
  breakpoints.map(({ key, query }) => ({
    key,
    matchMedia: window.matchMedia(query),
  }));

const getCurrentKey = (mqList) => {
  const allMatches = mqList.filter(({ matchMedia }) => matchMedia.matches);
  const { key } = allMatches.length
    ? allMatches[allMatches.length - 1]
    : mqList[0];

  return key;
};

/**
 *
 * @param Breakpoint[]  breakpoints
 * @type  Breakpoint      { key: String, query: String }
 */

const useMedia = () => {
  const { breakpoints } = useContext(ThemeContext);
  const [breakpoint, setBreakpoint] = useState(null);

  const isMedia = (media) => breakpoint === media;

  useEffect(() => {
    if (!isClient()) return;

    const mqList = getMediaQueriesList(breakpoints);

    const getAndSetCurrentKey = debounce(() => {
      const key = getCurrentKey(mqList);
      setBreakpoint(key);
    }, 100);

    window.addEventListener("resize", getAndSetCurrentKey);
    window.addEventListener("orientationchange", getAndSetCurrentKey);

    getAndSetCurrentKey();

    return () => {
      window.removeEventListener("resize", getAndSetCurrentKey);
      window.removeEventListener("orientationchange", getAndSetCurrentKey);
    };
  }, []);

  return { breakpoint, isMedia };
};

export default useMedia;
