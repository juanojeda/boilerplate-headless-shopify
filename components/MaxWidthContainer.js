import styled from "styled-components";

const MaxWidthContainer = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
  max-width: ${({ theme }) => theme.maxWidth}px;
  margin: 0 auto;
`;

export default MaxWidthContainer;
