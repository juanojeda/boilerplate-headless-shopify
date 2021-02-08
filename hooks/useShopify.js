import { useCallback, useEffect, useReducer } from "react";
import ShopifyBuy from "shopify-buy";

const LS_CART_ID = "shopify_checkout_id";
const INIT_STATE = {
  loading: true,
  cart: null,
  client: null,
  products: null,
  collections: null,
  cartOpen: false,
};

const ACTIONS = {
  SET_LOADING: "SET_LOADING",
  NEW_CLIENT: "NEW_CLIENT",
  NEW_CART: "NEW_CART",
  SET_PRODUCTS: "SET_PRODUCTS",
  SET_COLLECTIONS: "SET_COLLECTIONS",
  SET_CART_OPEN: "SET_CART_OPEN",
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
    case ACTIONS.SET_CART_OPEN:
      return {
        ...state,
        cartOpen: action.payload,
      };
    default:
      return state;
  }
};

const getGenericDispatchersFromActions = (actions, dispatcher) =>
  Object.values(actions).reduce((acc, currAction) => {
    const actionKey = currAction
      .toLowerCase()
      .replace(/(_)([a-z])/g, (match) => match.toUpperCase().replace(/_/g, ""));
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
    { cart, cartOpen, client, loading, products, collections },
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

    const localCartId = localStorage.getItem(LS_CART_ID);

    const initializeCart = async () => {
      const setCartInState = (cart) => {
        localStorage.setItem(LS_CART_ID, cart.id);
        dispatch.newCart(cart);
      };

      if (localCartId) {
        try {
          const existingCart = await client.checkout.fetch(localCartId);
          if (!existingCart.completedAt) {
            setCartInState(existingCart);
            return;
          }
        } catch (e) {
          localStorage.setItem(LS_CART_ID, null);
        }
      }

      const newCart = await client.checkout.create();

      setCartInState(newCart);
    };

    initializeCart();
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

  const addItem = useCallback(
    async (productId) => {
      dispatch.setLoading(true);
      const newCheckout = await client.checkout.addLineItems(cart.id, [
        {
          quantity: 1,
          variantId: productId,
        },
      ]);

      dispatch.newCart(newCheckout);
    },
    [dispatch, client]
  );

  const removeItem = useCallback(
    async (productId) => {
      dispatch.setLoading(true);
      const newCheckout = await client.checkout.removeLineItems(cart.id, [
        productId,
      ]);

      dispatch.newCart(newCheckout);
    },
    [dispatch, client]
  );

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
    cartOpen,
    setCartOpen: dispatch.setCartOpen,
    loading,
    products,
    collections,
    addItem,
    removeItem,
    getCollectionByHandle,
  };
};

export default useShopify;
