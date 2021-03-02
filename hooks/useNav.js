import { createContext, useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import pagePathsGQL from "../graphql/pagePathsGQL";
import NAV_ITEMS from "../shared/ConstNavItems";
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

const filterNavItems = ({ navigationItem }) => navigationItem;
const filterFooterItems = ({ footerItem }) => footerItem;

const formatPageData = (pages) =>
  pages.map(({ title, slug }) => ({
    title,
    route: `/${slug}`,
  }));

export const WithNavData = ({ children }) => {
  const [cmsData, setCmsData] = useState(null);
  const [navData, setNavData] = useState(null);
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);

  let canSetLoaded = true;
  useEffect(() => {
    if (cmsData !== null || !isClient()) return;

    fetchContentGQLAsync(pagePathsGQL).then(({ pages }) => {
      if (canSetLoaded) {
        setCmsData(pages);
      }
    });

    return () => {
      canSetLoaded = false;
    };
  }, [cmsData]);

  useEffect(() => {
    if (!cmsData || navData !== null || !isClient()) return;

    const navPages = formatPageData(cmsData.filter(filterNavItems));

    setNavData([...NAV_ITEMS, ...navPages]);
  }, [cmsData, navData]);

  useEffect(() => {
    if (!cmsData || footerData !== null || !isClient()) return;

    const footerPages = formatPageData(
      cmsData.filter(filterFooterItems).sort(({ id: a }, { id: b }) => a - b)
    );

    setFooterData(footerPages);
  }, [cmsData, footerData]);

  useEffect(() => {
    if (!navData || !footerData || !loading) {
      return;
    }

    setLoading(false);
  }, [navData, footerData, loading]);

  return (
    <NavContext.Provider value={{ navData, footerData }}>
      {navData ? children : loading ? <Loading /> : <div>Error!</div>}
    </NavContext.Provider>
  );
};
