import { createContext, useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import pagePathsGQL from "../graphql/pagePathsGQL";
import { fetchContentGQLAsync } from "../shared/fetchGQLAsync";
import isClient from "../utils/isClient";

const NavContext = createContext(null);

export const useNavData = () => {
  const ctx = useContext(NavContext);

  if (ctx === null) {
    throw new Error(
      "useNavData must be used within a WithNavData provider tag"
    );
  }

  return ctx;
};

const formatNavData = (pages) =>
  pages
    .filter(({ navigationItem }) => navigationItem)
    .map(({ title, slug }) => ({
      title,
      route: `/${slug}`,
    }));

export const WithNavData = ({ children }) => {
  const [navData, setNavData] = useState(null);
  const [loading, setLoading] = useState(true);

  let canSetLoaded = true;
  useEffect(() => {
    if (navData !== null || !isClient()) return;

    fetchContentGQLAsync(pagePathsGQL).then(({ pages }) => {
      if (canSetLoaded) {
        const navData = formatNavData(pages);
        console.log(navData);
        setNavData(navData);
        setLoading(false);
      }
    });

    return () => {
      canSetLoaded = false;
    };
  }, [navData]);

  return (
    <NavContext.Provider value={navData}>
      {navData ? children : loading ? <Loading /> : <div>Error!</div>}
    </NavContext.Provider>
  );
};
