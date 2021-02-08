import styled from "styled-components";
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
