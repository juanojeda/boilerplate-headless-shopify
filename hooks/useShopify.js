import { useCallback, useEffect, useReducer } from "react";
import ShopifyBuy from "shopify-buy";

const INIT_STATE = {
  loading: true,
  cart: null,
  client: null,
  products: null,
  collections: null,
};

const ACTIONS = {
  SET_LOADING: "SET_LOADING",
  NEW_CLIENT: "NEW_CLIENT",
  NEW_CART: "NEW_CART",
  SET_PRODUCTS: "SET_PRODUCTS",
  SET_COLLECTIONS: "SET_COLLECTIONS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ACTIONS.NEW_CLIENT:
      return {
        ...state,
        client: action.payload,
        loading: false,
      };
    case ACTIONS.NEW_CART:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };
    case ACTIONS.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case ACTIONS.SET_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const getGenericDispatchersFromActions = (actions, dispatcher) =>
  Object.values(actions).reduce((acc, currAction) => {
    const actionKey = currAction
      .toLowerCase()
      .replace(/(_)([a-z])/, (match) => match.toUpperCase().replace("_", ""));
    return {
      ...acc,
      [actionKey]: useCallback(
        (payload) => dispatcher({ type: currAction, payload }),
        [dispatcher]
      ),
    };
  }, {});

const useShopify = ({ domain, storefrontAccessToken }) => {
  const [
    { cart, client, loading, products, collections },
    shopifyDispatch,
  ] = useReducer(reducer, INIT_STATE);

  const dispatch = getGenericDispatchersFromActions(ACTIONS, shopifyDispatch);

  // create the client
  useEffect(() => {
    const newClient = ShopifyBuy.buildClient({
      domain,
      storefrontAccessToken,
    });

    dispatch.newClient(newClient);
  }, [dispatch.newClient]);

  // create the cart
  useEffect(() => {
    if (!client) return;

    dispatch.setLoading(true);

    const createCart = async () => {
      const cart = await client.checkout.create();
      dispatch.newCart(cart);
    };

    createCart();
  }, [client, dispatch.newCart]);

  // fetch products
  useEffect(() => {
    if (!client) return;

    dispatch.setLoading(true);

    const fetchAllProducts = async () => {
      const allProducts = await client.product.fetchAll();

      dispatch.setProducts(allProducts);
    };

    fetchAllProducts();
  }, [client, dispatch.setProducts]);

  // fetch collections
  useEffect(() => {
    if (!client) return;

    dispatch.setLoading(true);

    const fetchAllCollections = async () => {
      const allCollections = await client.collection.fetchAllWithProducts();

      dispatch.setCollections(allCollections);
    };

    fetchAllCollections();
  }, [client, dispatch.setCollections]);

  const addItem = async (productId) => {
    dispatch.setLoading(true);
    const newCheckout = await client.checkout.addLineItems(cart.id, {
      quantity: 1,
      variantId: productId,
    });

    dispatch.newCart(newCheckout);
  };

  const getCollectionByHandle = useCallback(
    (handleToGet) =>
      collections
        ? collections.find((collection) => collection.handle === handleToGet)
        : null,
    [collections]
  );

  return {
    client,
    cart,
    loading,
    products,
    collections,
    addItem,
    getCollectionByHandle,
  };
};

export default useShopify;
