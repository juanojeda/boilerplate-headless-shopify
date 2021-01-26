import React, { useContext } from "react";
import styled, { css, ThemeContext } from "styled-components";
import dynamic from "next/dynamic";
import Logo from "./Logo.js";
import Nav from "./Nav.js";
import MaxWidthContainer from "./MaxWidthContainer.js";

const Wrapper = styled(MaxWidthContainer)``;

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: ${`
    "${G_NAV} ${G_LOGO} ${G_CART}"
  `};
  grid-template-columns: 50px 100px 50px;
  justify-content: space-between;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1.5rem;
`;

const StyledLogo = styled(Logo)`
  grid-area: ${G_LOGO};
`;

const StyledNav = styled(Nav)`
  grid-area: ${G_NAV};
`;

const StyledCart = styled.div`
  grid-area: ${G_CART};
`;

const Header = ({ className }) => {
  const Cart = dynamic(() => import("./Cart.js"), { ssr: false });
  const theme = useContext(ThemeContext);

  console.log(theme);
  return (
    <Wrapper className={className}>
      <StyledLogo />
      <StyledNav />
      <StyledCart as={Cart} />
    </Wrapper>
  );
};

export default Header;
