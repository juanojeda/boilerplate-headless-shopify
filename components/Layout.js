import dynamic from "next/dynamic";
const Layout = ({ children }) => {
  const Cart = dynamic(() => import("./Cart.js"), { ssr: false });
  return (
    <div>
      <Cart />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
