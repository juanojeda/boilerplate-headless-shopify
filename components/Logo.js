import styled from "styled-components";
import Link from "next/link";
import PropTypes from "prop-types";

const StyledImg = styled.img`
  width: 100%;
`;

const StyledAnchor = styled.a`
  display: inline-block;
`;

const Logo = ({ className }) => (
  <Link href="/">
    <StyledAnchor className={className}>
      <StyledImg src="/images/logo.svg" />
    </StyledAnchor>
  </Link>
);

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
