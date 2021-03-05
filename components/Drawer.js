import styled, { css } from "styled-components";
import { transparentize } from "polished";
import { getColor } from "../utils/themeHelpers";
import { useEffect, useRef } from "react";

const fromLeft = css`
  left: 0;
`;

const fromRight = css`
  right: 0;
`;

const Overlay = styled.div`
  background: ${({ theme: { colors } }) =>
    transparentize(0.4, colors.black.base)};
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
`;

const StyledDrawer = styled.div`
  ${({ fromDirection }) => (fromDirection === "left" ? fromLeft : fromRight)};
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background: ${getColor("white")};
  height: 100vh;
  max-width: 40rem;
  padding: 1.5rem;
  position: fixed;
  top: 0;
  width: calc(100vw - 4rem);
  z-index: 1;
`;

const Drawer = ({ children, onClose, ...props }) => {
  const drawerEl = useRef(null);
  useEffect(() => {
    const closeHandler = ({ target }) => {
      const drawer = drawerEl.current;

      if (drawer === null) return;

      const isDrawer = target === drawer || drawer.contains(target);

      if (!isDrawer) {
        onClose();
      }
    };

    document.addEventListener("click", closeHandler);

    return () => {
      document.removeEventListener("click", closeHandler);
    };
  }, []);

  return (
    <Overlay>
      <StyledDrawer ref={drawerEl} {...props}>
        {children}
      </StyledDrawer>
    </Overlay>
  );
};

export default Drawer;
