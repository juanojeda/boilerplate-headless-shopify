import React from "react";
import dynamic from "next/dynamic";
import Logo from "./Logo.js";

const Header = () => {
  const Cart = dynamic(() => import("./Cart.js"), { ssr: false });
  return (
    <div>
      <Logo />
      <Cart />
    </div>
  );
};

export default Header;
