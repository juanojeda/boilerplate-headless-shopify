import styled from "styled-components";
import { gridColumn, gridContainer, gridVisual } from "neat-components";
import Header from "./Header.js";

const Wrapper = styled.div`
  ${gridContainer()};
`;

const StyledHeader = styled(Header)`
  ${({ theme: { grid } }) => gridColumn(grid.md, 12)}
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <StyledHeader />
      {children}
    </Wrapper>
  );
};

export default Layout;
