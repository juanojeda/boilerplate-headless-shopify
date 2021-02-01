import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import dynamic from "next/dynamic";
import Logo from "./Logo.js";
import Nav from "./Nav.js";
import MaxWidthContainer from "./MaxWidthContainer.js";
import HorizontalRule from "./HorizontalRule.js";
import { getMedia } from "../utils/themeHelpers.js";

const G_LOGO = "logo";
const G_NAV = "nav";
const G_CART = "cart";

const Wrapper = styled(MaxWidthContainer)`
  align-items: center;
  display: grid;
  grid-template-areas: ${`
    "${G_NAV} ${G_LOGO} ${G_CART}"
  `};
  grid-template-columns: 50px 100px 50px;
  justify-content: space-between;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1.5rem;
  ${HorizontalRule};

  ${getMedia("lg")} {
    grid-template-columns: calc(50% - 100px) 100px calc(50% - 100px);
    justify-content: space-between;
  }
`;

const StyledLogo = styled(Logo)`
  grid-area: ${G_LOGO};
  padding-bottom: 2rem;
`;

const StyledNav = styled(Nav)`
  grid-area: ${G_NAV};
`;

const StyledCart = styled.div`
  grid-area: ${G_CART};
  padding-bottom: 2rem;
`;

const Header = ({ className }) => {
  const Cart = dynamic(() => import("./Cart.js"), { ssr: false });
  const theme = useContext(ThemeContext);

  return (
    <Wrapper className={className}>
      <StyledLogo />
      <StyledNav />
      <StyledCart as={Cart} />
    </Wrapper>
  );
};

export default Header;
