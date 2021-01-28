import styled from "styled-components";
import { useContext } from "react";
import { ShopifyContext } from "../hooks/withShopifyContext";
import { formatPrice } from "../utils/formatPrice";
import { CheckoutMajor } from "@shopify/polaris-icons";

const Wrapper = styled.div`
  justify-self: flex-end;
`;

const CartIcon = styled(CheckoutMajor)`
  width: 4rem;
  padding: 1rem;
  fill: ${({ theme: { colors } }) => colors.neutral.light_80};
`;

const CartMini = ({ cart, className }) => {
  return (
    <div className={className}>
      <CartIcon />
      <div>Line items: {cart.lineItems.length}</div>
      <div>Line items subtotal: {formatPrice(cart.subtotalPriceV2)}</div>
      {!!cart.lineItems.length && <a href={cart.webUrl}>Go to checkout</a>}
    </div>
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
