import styled from "styled-components";
import Drawer from "./Drawer";

const CartDrawer = ({ closeCart }) => (
  <Drawer isOpen fromDirection="right">
    Cart is open <button onClick={closeCart}>close</button>
  </Drawer>
);

export default CartDrawer;
