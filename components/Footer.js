import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useNavData } from "../hooks/useNav";
import NAV_ITEMS from "../shared/ConstNavItems";
import { getMedia } from "../utils/themeHelpers";

import HorizontalRule from "./HorizontalRule";
import MaxWidthContainer from "./MaxWidthContainer";
import NavAnchor from "./NavAnchor";
import Title from "./Title";

const Wrapper = styled(MaxWidthContainer)`
  display: grid;
  padding-top: 3rem;
  padding-bottom: 3rem;
  grid-template-rows: 1fr;
  grid-column-gap: 4rem;
  ${HorizontalRule("top")};

  ${getMedia("sm")} {
    grid-template-columns: repeat(2, calc(50% - 2rem));
  }

  ${getMedia("md")} {
    grid-template-columns: repeat(3, calc(33% - 2rem));
  }

  ${getMedia("lg")} {
    grid-template-columns: repeat(4, calc(25% - 2rem));
  }
`;

const FooterSection = styled.div``;

const NavLinkList = styled.ul`
  padding: 0;
  margin: 0;
`;

const NavLinkItem = styled.li`
  list-style-type: none;
`;

const Footer = () => {
  const { footerData } = useNavData();
  return (
    <Wrapper>
      <FooterSection>
        <Title level="H6">Products</Title>
        <NavLinkList>
          {NAV_ITEMS.map((item) => (
            <NavLinkItem key={item.route}>
              <Link href={item.route} passHref>
                <NavAnchor $isCompact>{item.title}</NavAnchor>
              </Link>
            </NavLinkItem>
          ))}
        </NavLinkList>
      </FooterSection>
      <FooterSection>
        <Title level="H6">More Info</Title>
        <NavLinkList>
          {footerData &&
            footerData.map((item) => (
              <NavLinkItem key={item.route}>
                <Link href={item.route} passHref>
                  <NavAnchor $isCompact>{item.title}</NavAnchor>
                </Link>
              </NavLinkItem>
            ))}
        </NavLinkList>
      </FooterSection>
    </Wrapper>
  );
};

export default Footer;
