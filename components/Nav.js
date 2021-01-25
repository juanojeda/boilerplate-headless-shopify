import React from "react";
import styled from "styled-components";
import Link from "next/link";
import NAV_ITEMS from "../shared/ConstNavItems";

const Wrapper = styled.div``;
const NavList = styled.ul``;
const NavItem = styled.li``;
const Anchor = styled.a`
  display: inline-block;
`;

const Nav = ({ className }) => {
  return (
    <Wrapper className={className}>
      <NavList>
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.route}>
            <Link href={item.route}>
              <Anchor>{item.title}</Anchor>
            </Link>
          </NavItem>
        ))}
      </NavList>
    </Wrapper>
  );
};

export default Nav;
