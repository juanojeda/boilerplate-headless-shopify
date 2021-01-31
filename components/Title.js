import styled from "styled-components";

const BaseTitle = styled.h1`
  margin: 0;
`;
const H1 = styled.h1``;
const H2 = styled.h2``;
const H3 = styled.h3``;
const H4 = styled.h4``;

const levels = { H1, H2, H3, H4 };

const Title = ({ children, level = "H1" }) => (
  <BaseTitle as={levels[level]}>{children}</BaseTitle>
);

export default Title;
