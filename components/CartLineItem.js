import styled from "styled-components";
import { DeleteMajor } from "@shopify/polaris-icons";
import { getColor } from "../utils/themeHelpers";
import { formatPrice } from "../utils/formatPrice";
import Icon from "./Icon";
import { ShopifyContext } from "../hooks/withShopifyContext";
import { useContext } from "react";

const G_ITEM_IMG = "itemImage";
const G_ITEM_TITLE = "itemTitle";
const G_ITEM_PRICE = "itemPrice";
const G_ITEM_REMOVE = "itemRemove";

const LineItem = styled.div`
  background: ${getColor("realWhite")};
  border-radius: 0.4rem;
  display: grid;
  grid-template-areas: ${`
    "${G_ITEM_IMG} ${G_ITEM_TITLE} ${G_ITEM_REMOVE}"
    "${G_ITEM_IMG} ${G_ITEM_PRICE} ${G_ITEM_PRICE}"
  `};
  grid-template-columns: 6rem 1fr 4rem;
  grid-column-gap: 1.5rem;
  margin: 0.5rem 0;
  padding: 1rem;
  width: 100%;
`;

const ItemImage = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  grid-area: ${G_ITEM_IMG};
`;

const ItemTitle = styled.div`
  grid-area: ${G_ITEM_TITLE};
  font-size: 2rem;
`;

const ItemPrice = styled.div`
  grid-area: ${G_ITEM_PRICE};
  font-weight: 100;
`;

const ItemRemove = styled.button`
  appearance: none;
  background: 0;
  border: 0;
  cursor: pointer;
  grid-area: ${G_ITEM_REMOVE};
  padding: 0;
`;

const StyledRemoveIcon = styled(Icon)`
  fill: ${getColor("neutral")};
  padding: 0 1.25rem;
  width: 100%;
  &:hover {
    fill: ${getColor("primary")};
  }
`;
const CartLineItem = ({ item: { id, variant, title } }) => {
  const { removeItem } = useContext(ShopifyContext);
  const handleRemoveItem = (e) => {
    e.stopPropagation();
    removeItem(id);
  };
  return (
    <LineItem>
      <ItemImage src={variant.image.src} />
      <ItemTitle>{title}</ItemTitle>
      <ItemPrice>{formatPrice(variant.priceV2)}</ItemPrice>
      <ItemRemove onClick={handleRemoveItem}>
        <StyledRemoveIcon icon={DeleteMajor} />
      </ItemRemove>
    </LineItem>
  );
};

export default CartLineItem;
