import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Logo from "./Logo.js";
import Nav from "./Nav.js";

const Wrapper = styled.div``;

const Header = () => {
  const Cart = dynamic(() => import("./Cart.js"), { ssr: false });
  return (
    <Wrapper>
      <Logo />
      <Nav />
      <Cart />
    </Wrapper>
  );
};

export default Header;
