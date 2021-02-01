import styled from "styled-components";
import { useCatalogData } from "../hooks/useCatalog";
import { getMedia } from "../utils/themeHelpers";
import MaxWidthContainer from "./MaxWidthContainer";
import ProductThumb from "./ProductThumb";
import Title from "./Title";

const Wrapper = styled(MaxWidthContainer)`
  padding: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-column-gap: 4rem;

  ${getMedia("sm")} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${getMedia("md")} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  ${getMedia("lg")} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const Catalog = () => {
  const { productData } = useCatalogData();
  const addToCart = (id) => console.log(id);

  return (
    <Wrapper>
      <Title level="H2">{productData.title}</Title>
      <Grid>
        {productData.products.map((product) => (
          <ProductThumb key={product.id} {...product} addToCart={addToCart} />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Catalog;
