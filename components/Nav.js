import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import {
  MobileCancelMajor,
  MobileHamburgerMajor,
} from "@shopify/polaris-icons";
import NAV_ITEMS from "../shared/ConstNavItems";
import useMedia from "../hooks/useMedia";
import Drawer from "./Drawer";
import Icon from "./Icon";
import { getColor } from "../utils/themeHelpers";
import { useNavData } from "../hooks/useNav";

const Wrapper = styled.div``;

const NavContainer = styled.div``;

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
  color: ${getColor("links")};
  &:hover {
    color: ${getColor("links", "light_40")};
  }
`;

const OpenNav = ({ isSideDrawer, onClose }) => {
  const cmsPages = useNavData();

  return (
    <NavContainer
      as={isSideDrawer ? Drawer : "div"}
      onClose={onClose}
      fromDirection="left"
      isOpen={true}
    >
      {isSideDrawer && <Icon icon={MobileCancelMajor} onClick={onClose} />}
      <NavList $isSideDrawer={isSideDrawer}>
        {[...NAV_ITEMS, ...cmsPages].map((item) => (
          <NavItem $isSideDrawer={isSideDrawer} key={item.route}>
            <Link passHref href={item.route}>
              <Anchor onClick={onClose}>{item.title}</Anchor>
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
      <Icon icon={MobileHamburgerMajor} onClick={handler}>
        Menu
      </Icon>
      {isOpen && <OpenNav isSideDrawer={true} onClose={closeHandler} />}
    </>
  );
};

const Nav = ({ className }) => {
  const { isMedia } = useMedia();
  const isDrawer = isMedia("md") || isMedia("sm") || isMedia("xs");

  return (
    <Wrapper className={className}>
      {isDrawer ? <BurgerNav /> : <OpenNav />}
    </Wrapper>
  );
};

export default Nav;
