import React from "react";
import dynamic from "next/dynamic";
import Logo from "./Logo.js";
import Nav from "./Nav.js";

const Header = () => {
  const Cart = dynamic(() => import("./Cart.js"), { ssr: false });
  return (
    <div>
      <Logo />
      <Nav />
      <Cart />
    </div>
  );
};

export default Header;
