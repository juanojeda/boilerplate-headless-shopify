import styled from "styled-components";

const BaseTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
`;

const H1 = styled.h1`
  font-size: 3.5rem;
  line-height: 1.62;
  margin-top: 1.75rem 0;
`;
const H2 = styled.h2`
  font-size: 3rem;
  line-height: 1.62;
  margin: 1.5rem 0;
`;
const H3 = styled.h3`
  font-size: 2.5rem;
  line-height: 1.62;
  margin: 1.25rem 0;
`;
const H4 = styled.h4`
  font-size: 2rem;
  line-height: 1.62;
  margin: 1rem 0;
`;

const levels = { H1, H2, H3, H4 };

const Title = ({ children, level = "H1", className }) => (
  <BaseTitle className={className} as={levels[level]}>
    {children}
  </BaseTitle>
);

export default Title;
