import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import NAV_ITEMS from "../shared/ConstNavItems";
import useMedia from "../hooks/useMedia";

const NavList = styled.ul`
  display: inline-block;
  margin: 0;
  padding: 0;
`;
const NavItem = styled.li`
  display: inline-block;
  padding-right: 2rem;
`;
const Anchor = styled.a`
  display: inline-block;
  padding-bottom: 2rem;
  padding-top: 2rem;
  text-decoration: none;
  text-transform: uppercase;
`;

const OpenNav = () => (
  <NavList>
    {NAV_ITEMS.map((item) => (
      <NavItem key={item.route}>
        <Link passHref href={item.route}>
          <Anchor>{item.title}</Anchor>
        </Link>
      </NavItem>
    ))}
  </NavList>
);

const BurgerNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handler = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={handler}>Menu</button>
      {isOpen && <OpenNav />}
    </>
  );
};

const Nav = ({ className }) => {
  const { isMedia } = useMedia();

  return (
    <Wrapper className={className}>
      {isMedia("SM") ? <BurgerNav /> : <OpenNav />}
    </Wrapper>
  );
};

export default Nav;
