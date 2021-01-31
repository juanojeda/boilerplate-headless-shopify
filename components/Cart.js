import styled from "styled-components";
import { useContext, useState } from "react";
import { ShopifyContext } from "../hooks/withShopifyContext";
import { CheckoutMajor } from "@shopify/polaris-icons";
import { getColor } from "../utils/themeHelpers";
import CartDrawer from "./CartDrawer";
import Icon from "./Icon";
import Loading from "./Loading";

const Wrapper = styled.div`
  justify-self: flex-end;
`;

const CartMiniWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const CartIcon = styled(Icon)`
  fill: ${({ $hasItems, ...theme }) =>
    $hasItems
      ? getColor("neutral", "dark_20")(theme)
      : getColor("neutral", "light_60")(theme)};
`;

const CartCount = styled.div`
  background: ${getColor("primary")};
  border-radius: 50%;
  color: ${getColor("background")};
  font-size: 1.4rem;
  line-height: 2.5rem;
  padding: 0 0.5rem;
  text-align: center;
  width: 2.5rem;
`;

const CartEmpty = () => <div>(0)</div>;

const CartFull = ({ cart }) => (
  <>
    <CartCount>{cart.lineItems.length}</CartCount>
  </>
);

const CartMini = ({ cart, className, toggleCart }) => {
  const hasItems = cart.lineItems.length > 0;
  return (
    <CartMiniWrapper onClick={toggleCart} className={className}>
      <CartIcon icon={CheckoutMajor} $hasItems={hasItems} />
      {hasItems ? <CartFull cart={cart} /> : <CartEmpty />}
    </CartMiniWrapper>
  );
};

const Cart = ({ className }) => {
  const { cart, loading } = useContext(ShopifyContext);
  const [cartOpen, setCartOpen] = useState(false);
  const handleCartToggle = () => setCartOpen(!cartOpen);
  const handleCartClose = () => setCartOpen(false);

  return (
    <Wrapper classname={className}>
      {cart && !loading ? (
        <>
          <CartMini
            className={className}
            cart={cart}
            toggleCart={handleCartToggle}
          >
            Cart
          </CartMini>
          {cartOpen && <CartDrawer closeCart={handleCartClose} />}
        </>
      ) : (
        <Loading />
      )}
    </Wrapper>
  );
};

export default Cart;
