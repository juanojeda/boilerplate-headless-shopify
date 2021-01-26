const getMediaQuery = (val) => `only screen and (min-width: ${val}px)`;

const breakpoints = [
  { key: "SM", query: getMediaQuery(0) },
  { key: "MD", query: getMediaQuery(600) },
  { key: "LG", query: getMediaQuery(950) },
];

const THEME = {
  breakpoints,
};

export default THEME;
