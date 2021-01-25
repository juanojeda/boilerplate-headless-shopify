import Neat from "neat-components";

const gridOverlay = "#d9f9f9";

const MEDIA_SM = "only screen and (max-width: 600px)";
const MEDIA_MD = "only screen and (min-width: 601px)";
const MEDIA_LG = "only screen and (min-width: 951px)";

const gridSm = Neat({
  columns: 4,
  gutter: "20px",
  color: gridOverlay,
  media: MEDIA_SM,
});

const gridMd = Neat({
  columns: 12,
  gutter: "20px",
  color: gridOverlay,
  media: MEDIA_MD,
});

const gridLg = Neat({
  columns: 12,
  gutter: "30px",
  color: gridOverlay,
  media: MEDIA_LG,
});

const THEME = {
  grid: {
    sm: gridSm,
    md: gridMd,
    lg: gridLg,
  },
};

export default THEME;
