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
  const [cmsPageData, setCmsPageData] = useState(null);
  const [navData, setNavData] = useState(null);
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!cmsPageData || navData !== null) return;

    const navPages = formatPageData(cmsPageData.filter(filterNavItems));

    setNavData([...NAV_ITEMS, ...navPages]);
  }, [cmsPageData, navData]);

  useEffect(() => {
    if (!cmsPageData || footerData !== null) return;

    const footerPages = formatPageData(
      cmsPageData
        .filter(filterFooterItems)
        .sort(({ id: a }, { id: b }) => a - b)
    );

    setFooterData(footerPages);
  }, [cmsPageData, footerData]);

  useEffect(() => {
    setLoading(false);
  }, [navData, footerData, loading]);

  return (
    <NavContext.Provider value={{ navData, footerData, setCmsPageData }}>
      {children}
    </NavContext.Provider>
  );
};
