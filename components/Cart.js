import styled from "styled-components";
import { useContext } from "react";
import { ShopifyContext } from "../hooks/withShopifyContext";
import { formatPrice } from "../utils/formatPrice";
import { CheckoutMajor } from "@shopify/polaris-icons";

const Wrapper = styled.div`
  justify-self: flex-end;
`;

const CartMiniWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const CartIcon = styled(CheckoutMajor)`
  width: 4rem;
  padding: 1rem;
  fill: ${({ theme: { colors } }) => colors.neutral.light_80};
`;

const CartEmpty = () => <div>Your cart is empty</div>;

const CartFull = ({ cart }) => (
  <>
    <div>{cart.lineItems.length}</div>
    {/* <div>Line items subtotal: {formatPrice(cart.subtotalPriceV2)}</div> */}
    {/* {!!cart.lineItems.length && <a href={cart.webUrl}>Go to checkout</a>} */}
  </>
);

const CartMini = ({ cart, className }) => {
  const hasItems = cart.lineItems.length > 0;
  return (
    <CartMiniWrapper className={className}>
      <CartIcon />
      {hasItems ? <CartFull cart={cart} /> : <CartEmpty />}
    </CartMiniWrapper>
  );
};

const Cart = ({ className }) => {
  const { cart, loading } = useContext(ShopifyContext);
  return (
    <Wrapper classname={className}>
      {cart && !loading ? (
        <CartMini className={className} cart={cart}>
          Cart
        </CartMini>
      ) : (
        <div>Loading ...</div>
      )}
    </Wrapper>
  );
};

export default Cart;
