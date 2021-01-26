import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import useMedia from "../hooks/useMedia.js";
import Header from "./Header.js";

const Wrapper = styled.div``;

const StyledHeader = styled(Header)``;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <StyledHeader />
      {children}
    </Wrapper>
  );
};

export default Layout;
