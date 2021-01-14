import { useContext } from "react";
import { ShopifyContext } from "../hooks/withShopifyContext";
import { formatPrice } from "../utils/formatPrice";

const CartMini = ({ cart }) => {
  return (
    <div>
      <div>Line items: {cart.lineItems.length}</div>
      <div>Line items subtotal: {formatPrice(cart.subtotalPriceV2)}</div>
      {!!cart.lineItems.length && <a href={cart.webUrl}>Go to checkout</a>}
    </div>
  );
};

const Cart = () => {
  const { cart, loading } = useContext(ShopifyContext);

  return cart && !loading ? (
    <CartMini cart={cart}>Cart</CartMini>
  ) : (
    <div>Loading ...</div>
  );
};

export default Cart;
