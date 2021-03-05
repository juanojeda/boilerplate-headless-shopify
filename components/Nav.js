import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import {
  MobileCancelMajor,
  MobileHamburgerMajor,
} from "@shopify/polaris-icons";
import useMedia from "../hooks/useMedia";
import Drawer from "./Drawer";
import Icon from "./Icon";
import { useNavData } from "../hooks/useNav";
import NavAnchor from "./NavAnchor";

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

const StyledIcon = styled(Icon)`
  cursor: pointer;
`;

const OpenNav = ({ isSideDrawer, onClose }) => {
  const { navData } = useNavData();

  return (
    <NavContainer
      as={isSideDrawer ? Drawer : "div"}
      onClose={onClose}
      fromDirection="left"
      isOpen={true}
    >
      {isSideDrawer && (
        <StyledIcon icon={MobileCancelMajor} onClick={onClose} />
      )}
      <NavList $isSideDrawer={isSideDrawer}>
        {navData &&
          navData.map((item) => (
            <NavItem $isSideDrawer={isSideDrawer} key={item.route}>
              <Link passHref href={item.route}>
                <NavAnchor onClick={onClose}>{item.title}</NavAnchor>
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
