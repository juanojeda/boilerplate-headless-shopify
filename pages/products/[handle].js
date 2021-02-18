import React from "react";
import productHandlesGQL from "../../graphql/productHandlesGQL";
import {
  fetchContentGQLAsync,
  fetchShopifyGQLAsync,
} from "../../shared/fetchGQLAsync";
import { unwrapGqlEdges } from "../../utils/unwrapGqlEdges";
import productGQL from "../../graphql/productGQL";
import ProductDetail from "../../components/ProductDetail";
import Loading from "../../components/Loading";
import productDescriptionGQL from "../../graphql/productDescriptionGQL";

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
  const { productDetailTemplate } = await fetchContentGQLAsync(
    productDescriptionGQL
  );
  const product = unwrapGqlEdges(productByHandle);
  return { props: { product, template: productDetailTemplate } };
}

const ProductDetailPage = ({ product, template }) => {
  return product ? (
    <ProductDetail {...{ ...product, template }} />
  ) : (
    <Loading />
  );
};

export default ProductDetailPage;
