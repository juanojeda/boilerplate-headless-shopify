import { useState, createContext, useContext, useEffect } from "react";
import getSupportsWebp from "../utils/getSupportsWebp";

const WebSupportContext = createContext(null);

export const useWebSupport = () => {
  const webSupportContext = useContext(WebSupportContext);

  if (webSupportContext === null) {
    throw new Error(
      "useWebSupport must be used within a WithWebSupport provider tag"
    );
  }

  return webSupportContext;
};

export const WithWebSupport = ({ children }) => {
  const [supportsWebp, setSupportsWebp] = useState(true);
  useEffect(() => {
    let canSetSupport = true;
    getSupportsWebp().then((isSupported) => {
      if (canSetSupport) {
        setSupportsWebp(isSupported);
      }
    });

    return () => {
      canSetSupport = false;
    };
  }, []);

  return (
    <WebSupportContext.Provider value={{ supportsWebp }}>
      {children}
    </WebSupportContext.Provider>
  );
};
