export const getColor = (color, variant = "base") => ({ theme: { colors } }) =>
  colors[color][variant];

export const getMedia = (key) => ({ theme: { mediaQueries } }) =>
  `${mediaQueries[key]}`;
