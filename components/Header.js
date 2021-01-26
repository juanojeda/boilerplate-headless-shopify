import React from "react";
import styled, { css } from "styled-components";
import dynamic from "next/dynamic";
import Logo from "./Logo.js";
import Nav from "./Nav.js";

const Wrapper = styled.div``;

const StyledLogo = styled(Logo)``;

const StyledNav = styled(Nav)``;

const StyledCart = styled.div``;

const Header = ({ className }) => {
  const Cart = dynamic(() => import("./Cart.js"), { ssr: false });
  return (
    <Wrapper className={className}>
      <StyledLogo />
      <StyledNav />
      <StyledCart as={Cart} />
    </Wrapper>
  );
};

export default Header;
