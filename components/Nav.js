import React, { useState } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import NAV_ITEMS from "../shared/ConstNavItems";
import useMedia from "../hooks/useMedia";

const Wrapper = styled.div``;

const NavContainer = styled.div`
  ${({ $isSideDrawer }) =>
    $isSideDrawer &&
    css`
      background: white;
      box-shadow: 0 0 0 50px rgba(0, 0, 0, 0.5);
      left: 0;
      padding: 1.5rem;
      position: fixed;
      top: 0;
      width: calc(100vw - 4rem);
      height: 100vh;
    `}
`;

const NavList = styled.ul`
  display: ${({ $isSideDrawer }) => ($isSideDrawer ? "block" : "inline-block")};
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  display: ${({ $isSideDrawer }) => ($isSideDrawer ? "block" : "inline-block")};
  padding-right: 2rem;
`;

const Anchor = styled.a`
  display: inline-block;
  padding-bottom: 2rem;
  padding-top: 2rem;
  text-decoration: none;
  text-transform: uppercase;
`;

const OpenNav = ({ isSideDrawer, onClose }) => {
  return (
    <NavContainer $isSideDrawer={isSideDrawer}>
      {isSideDrawer && <button onClick={onClose}>Close menu</button>}
      <NavList $isSideDrawer={isSideDrawer}>
        {NAV_ITEMS.map((item) => (
          <NavItem $isSideDrawer={isSideDrawer} key={item.route}>
            <Link passHref href={item.route}>
              <Anchor>{item.title}</Anchor>
            </Link>
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

const BurgerNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handler = () => setIsOpen(!isOpen);
  const closeHandler = () => setIsOpen(false);

  return (
    <>
      <button onClick={handler}>Menu</button>
      {isOpen && <OpenNav isSideDrawer={true} onClose={closeHandler} />}
    </>
  );
};

const Nav = ({ className }) => {
  const { isMedia } = useMedia();
  const isDrawer = isMedia("md") || isMedia("sm");

  return (
    <Wrapper className={className}>
      {isDrawer ? <BurgerNav /> : <OpenNav />}
    </Wrapper>
  );
};

export default Nav;
