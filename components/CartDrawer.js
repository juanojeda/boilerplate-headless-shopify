import styled from "styled-components";
import Drawer from "./Drawer";
import { MobileCancelMajor } from "@shopify/polaris-icons";
import Title from "./Title";
import HorizontalRule from "./HorizontalRule";
import Icon from "./Icon";

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

const CartDrawer = ({ closeCart }) => (
  <Drawer isOpen fromDirection="right">
    <CartHeader>
      <CloseIcon icon={MobileCancelMajor} onClick={closeCart} />
      <Title level="H2">Your cart</Title>
    </CartHeader>
  </Drawer>
);

export default CartDrawer;
