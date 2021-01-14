import Cart from "./Cart";

const Layout = ({ children }) => {
  return (
    <div>
      <Cart />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
