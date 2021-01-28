import React, { useContext } from "react";
import styled, { css, ThemeContext } from "styled-components";
import dynamic from "next/dynamic";
import Logo from "./Logo.js";
import Nav from "./Nav.js";
import MaxWidthContainer from "./MaxWidthContainer.js";

const Wrapper = styled(MaxWidthContainer)``;

const StyledLogo = styled(Logo)``;

const StyledNav = styled(Nav)``;

const StyledCart = styled.div``;

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
