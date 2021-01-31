import styled from "styled-components";
import Drawer from "./Drawer";
import { MobileCancelMajor } from "@shopify/polaris-icons";
import Title from "./Title";

const CartHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const CloseIcon = styled(MobileCancelMajor)`
  fill: ${({ theme: { colors } }) => colors.black.light_40};
  order: 2;
  padding: 1rem;
  width: 4rem;
`;

const CartDrawer = ({ closeCart }) => (
  <Drawer isOpen fromDirection="right">
    <CartHeader>
      <CloseIcon onClick={closeCart} />
      <Title level="H2">Your cart</Title>
    </CartHeader>
  </Drawer>
);

export default CartDrawer;
