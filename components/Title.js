import styled from "styled-components";

const BaseTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
  line-height: 1.62;
`;

const H1 = styled(BaseTitle).attrs(({ asElement }) => ({
  as: asElement || "h1",
}))`
  font-size: 3.5rem;
  margin-top: 1.75rem;
`;
const H2 = styled(BaseTitle).attrs(({ asElement }) => ({
  as: asElement || "h2",
}))`
  font-size: 3rem;
  margin: 1.5rem 0;
`;
const H3 = styled(BaseTitle).attrs(({ asElement }) => ({
  as: asElement || "h3",
}))`
  font-size: 2.5rem;
  margin: 1.25rem 0;
`;
const H4 = styled(BaseTitle).attrs(({ asElement }) => ({
  as: asElement || "h4",
}))`
  font-size: 2rem;
  margin: 1rem 0;
`;
const H5 = styled(BaseTitle).attrs(({ asElement }) => ({
  as: asElement || "h5",
}))`
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0.75rem 0;
`;

const levels = { H1, H2, H3, H4, H5 };

const Title = ({ children, level = "H1", className, asElement }) => {
  const RenderTitle = levels[level];

  return (
    <RenderTitle className={className} asElement={asElement}>
      {children}
    </RenderTitle>
  );
};

export default Title;
