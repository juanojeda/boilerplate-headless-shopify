import styled from "styled-components";
import Drawer from "./Drawer";
import { MobileCancelMajor } from "@shopify/polaris-icons";
import Title from "./Title";
import HorizontalRule from "./HorizontalRule";
import Icon from "./Icon";
import { useContext } from "react";
import { ShopifyContext } from "../hooks/withShopifyContext";

const CartHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  position: relative;

  ${HorizontalRule};
`;

const CloseIcon = styled(Icon)`
  order: 2;
`;

const CartContent = () => {
  const { cart, loading } = useContext(ShopifyContext);
  const hasItems = cart.lineItems.length > 0;
  if (loading) {
    return <Loading />;
  }

  return hasItems ? (
    <div>{cart.lineItems.length} items</div>
  ) : (
    <div>You have no items</div>
  );
};

const CartDrawer = ({ closeCart }) => {
  return (
    <Drawer isOpen fromDirection="right" onClose={closeCart}>
      <CartHeader>
        <CloseIcon icon={MobileCancelMajor} onClick={closeCart} />
        <Title level="H2">Your cart</Title>
      </CartHeader>
      <CartContent />
    </Drawer>
  );
};

export default CartDrawer;
