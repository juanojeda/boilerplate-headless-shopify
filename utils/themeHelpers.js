export const getColor = (color, variant = "base") => ({ theme: { colors } }) =>
  colors[color][variant];
