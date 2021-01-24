import styled from "styled-components";
import { gridVisual } from "neat-components";
import Header from "./Header.js";

const Wrapper = styled.div`
  ${({ theme }) => gridVisual(theme)}
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <div>{children}</div>
    </Wrapper>
  );
};

export default Layout;
