const composeMediaQuery = (val) => `only screen and (min-width: ${val}px)`;
const getCssMediaQueries = (bpList) =>
  bpList.reduce(
    (acc, { key, query }) => ({ ...acc, [key]: `@media ${query}` }),
    {}
  );

const breakpoints = [
  { key: "sm", query: composeMediaQuery(0) },
  { key: "md", query: composeMediaQuery(600) },
  { key: "lg", query: composeMediaQuery(950) },
];

const THEME = {
  breakpoints,
  mediaQueries: getCssMediaQueries(breakpoints),
  maxWidth: 1180,
};

export default THEME;
