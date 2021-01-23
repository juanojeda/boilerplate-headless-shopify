import Head from "next/head";
import PropTypes from "prop-types";

const parseFamilyToString = (family) => family.replace(" ", "+");

const parseWeightsToString = (weights) => weights.join(";");

const parseFontsToString = (fontsArray) =>
  fontsArray
    .map(
      ({ family, weights }) =>
        `family=${parseFamilyToString(family)}:wght@${parseWeightsToString(
          weights
        )}`
    )
    .join("&");

const FontsCDN = ({ fonts }) => (
  <Head>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href={`https://fonts.googleapis.com/css2?${parseFontsToString(
        fonts
      )}&display=swap`}
      rel="stylesheet"
    />
  </Head>
);

FontsCDN.propTypes = {
  fonts: PropTypes.arrayOf(
    PropTypes.shape({
      family: PropTypes.string,
      weights: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default FontsCDN;
