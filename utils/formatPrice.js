export const formatPrice = ({ amount, currencyCode }) =>
  new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: currencyCode,
  }).format(amount);
