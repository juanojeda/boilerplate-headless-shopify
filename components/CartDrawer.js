import { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import Drawer from "./Drawer";
import { MobileCancelMajor } from "@shopify/polaris-icons";
import Title from "./Title";
import HorizontalRule from "./HorizontalRule";
import Icon from "./Icon";
import { ShopifyContext } from "../hooks/withShopifyContext";
import { formatPrice } from "../utils/formatPrice";
import Button from "./Button";
import CartLineItem from "./CartLineItem";
import Loading from "./Loading";

const G_CART_HEADER = "cartHeader";
const G_CART_BODY = "cartBody";
const G_CART_FOOTER = "cartFooter";

const CartWrapper = styled.div`
  display: grid;
  grid-template-areas: ${`
    "${G_CART_HEADER}"
    "${G_CART_BODY}"
    "${G_CART_FOOTER}"
  `};
  grid-template-rows: 5rem auto 1fr;
  height: 100%;
`;

const CartHeader = styled.div`
  align-items: center;
  display: flex;
  grid-area: ${G_CART_HEADER};
  justify-content: space-between;
  padding-bottom: 1rem;
  position: relative;

  ${HorizontalRule};
`;

const CartContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-area: ${G_CART_BODY};
  height: 100%;
  justify-content: flex-start;
  overflow: auto;
  padding: 1rem 0 2rem;
`;

const CartFooterWrapper = styled.div`
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  grid-area: ${G_CART_FOOTER};
  padding-top: 1rem;
  text-align: right;
`;

const SubtotalTitle = styled(Title)`
  padding-right: 1rem;
`;
const SubtotalPrice = styled.p`
  padding-right: 1rem;
  margin: 0.5rem 0;
`;
const SubtotalNote = styled.p`
  padding-right: 1rem;
  margin: 0.5rem 0%;
`;

const CloseIcon = styled(Icon)`
  order: 2;
`;

const EmptyCart = styled.div`
  padding: 2rem;
  text-align: center;
  align-self: center;
`;
const EmptyCartCTA = styled.div`
  margin: 1rem;
`;

const EmptyCartContent = () => (
  <EmptyCart>
    You have no items in your cart.
    <EmptyCartCTA>
      Check out our{" "}
      <Link href="/" passHref>
        <a>knives on sale.</a>
      </Link>
    </EmptyCartCTA>
  </EmptyCart>
);

const CartContent = () => {
  const { cart, loading } = useContext(ShopifyContext);
  const hasItems = cart.lineItems.length > 0;

  return (
    <CartContentWrapper>
      {loading ? (
        <Loading />
      ) : hasItems ? (
        cart.lineItems.map((item) => <CartLineItem key={item.id} item={item} />)
      ) : (
        <EmptyCartContent />
      )}
    </CartContentWrapper>
  );
};

const CartFooter = () => {
  const { cart } = useContext(ShopifyContext);
  return cart ? (
    <CartFooterWrapper>
      <SubtotalTitle asElement="p" level="H5">
        Subtotal
      </SubtotalTitle>
      <SubtotalPrice>{formatPrice(cart.subtotalPriceV2)}</SubtotalPrice>
      <SubtotalNote>(Shipping calculated at checkout)</SubtotalNote>
      <Button
        fullWidth
        variant="primary"
        href={cart.webUrl}
        asLink
        disabled={cart.lineItems.length < 1}
      >
        Go to checkout
      </Button>
    </CartFooterWrapper>
  ) : null;
};

const CartDrawer = ({ closeCart }) => {
  return (
    <Drawer isOpen fromDirection="right" onClose={closeCart}>
      <CartWrapper>
        <CartHeader>
          <CloseIcon icon={MobileCancelMajor} onClick={closeCart} />
          <Title level="H4">Your cart</Title>
        </CartHeader>
        <CartContent />
        <CartFooter />
      </CartWrapper>
    </Drawer>
  );
};

export default CartDrawer;
