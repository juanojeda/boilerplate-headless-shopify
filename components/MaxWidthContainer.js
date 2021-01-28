import styled from "styled-components";

const MaxWidthContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth}px;
  margin: 0 auto;
`;

export default MaxWidthContainer;
