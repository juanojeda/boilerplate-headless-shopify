import React from "react";
import styled, { css } from "styled-components";
import dynamic from "next/dynamic";
import Logo from "./Logo.js";
import Nav from "./Nav.js";

const HorizontalRule = css`
  background: #e3e3e3;
  content: "";
  display: block;
  height: 1px;
  margin: 0 auto;
  width: 80%;
`;

const Wrapper = styled.div`
  &::after {
    ${HorizontalRule}
  }
`;

const StyledLogo = styled(Logo)``;

const StyledNav = styled(Nav)``;

// const StyledCart = styled(Cart)``;

const Header = ({ className }) => {
  const Cart = dynamic(() => import("./Cart.js"), { ssr: false });
  return (
    <Wrapper className={className}>
      <StyledLogo />
      <StyledNav />
      <Cart />
    </Wrapper>
  );
};

export default Header;
