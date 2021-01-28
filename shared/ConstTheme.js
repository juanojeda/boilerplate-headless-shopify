import { mix } from "polished";

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

const light = "#f3f3f2";
const dark = "#0f1108";

const composeColourSwatch = (
  base,
  { omitLight, omitDark } = { omitLight: false, omitDark: false }
) => ({
  ...(!omitLight && { light_20: mix(0.2, light, base) }),
  ...(!omitLight && { light_40: mix(0.4, light, base) }),
  ...(!omitLight && { light_60: mix(0.6, light, base) }),
  ...(!omitLight && { light_80: mix(0.8, light, base) }),
  base,
  ...(!omitDark && { dark_20: mix(0.2, dark, base) }),
  ...(!omitDark && { dark_40: mix(0.4, dark, base) }),
  ...(!omitDark && { dark_60: mix(0.6, dark, base) }),
  ...(!omitDark && { dark_80: mix(0.8, dark, base) }),
});

const colors = {
  primary: composeColourSwatch("#8C1C13"),
  secondary: composeColourSwatch("#DE9151"),
  background: composeColourSwatch("#f3f3f2", { omitLight: true }),
  neutral: composeColourSwatch("#73877B"),
  text: composeColourSwatch("#0f1108", { omitDark: true }),
  links: composeColourSwatch("#073B4C"),
};

const THEME = {
  breakpoints,
  colors,
  maxWidth: 1180,
  mediaQueries: getCssMediaQueries(breakpoints),
};

export default THEME;
