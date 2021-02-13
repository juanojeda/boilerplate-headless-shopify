import React from "react";
import productHandlesGQL from "../../graphql/productHandlesGQL";
import { fetchShopifyGQLAsync } from "../../hooks/useShopifyGql";
import { unwrapGqlEdges } from "../../utils/unwrapGqlEdges";
import productGQL from "../../graphql/productGQL";
import ProductDetail from "../../components/ProductDetail";
import Loading from "../../components/Loading";

export async function getStaticPaths() {
  const { products } = await fetchShopifyGQLAsync(productHandlesGQL);
  const unwrappedProducts = unwrapGqlEdges(products);

  return {
    paths: unwrappedProducts.map(({ id, handle }) => ({
      params: {
        id,
        handle,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params: { id, handle } }) {
  const { productByHandle } = await fetchShopifyGQLAsync(productGQL, {
    handle,
  });
  const product = unwrapGqlEdges(productByHandle);
  return { props: { product } };
}

const ProductDetailPage = ({ product }) => {
  return product ? <ProductDetail {...product} /> : <Loading />;
};

export default ProductDetailPage;
