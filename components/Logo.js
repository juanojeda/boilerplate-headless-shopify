import styled from "styled-components";
import Link from "next/link";
import PropTypes from "prop-types";

const StyledImg = styled.img`
  width: 150px;
`;

const Logo = ({ className }) => (
  <Link href="/">
    <a>
      <StyledImg src="/images/logo.svg" className={className} />
    </a>
  </Link>
);

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
