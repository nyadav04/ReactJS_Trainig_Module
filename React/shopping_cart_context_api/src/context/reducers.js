export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart];
  const updateItemIndex = updatedCart.findIndex(
    item => item.id === product.id
  );

  if (updateItemIndex < 0) {
    updatedCart.push({...product, quantity: 1});
  } else {
    const updatedItem = {
      ...updatedCart[updateItemIndex]
    };
    updatedItem.quantity++;
    updatedCart[updateItemIndex] = updatedItem;
  }
  return {...state, cart: updatedCart};
};

const removeProductFromCart = (productId, state) => {
  const updatedCart = [...state.cart];
  const updateItemIndex = updatedCart.findIndex(item=> item.id === productId);

  const updatedItem = {
    ...updatedCart[updateItemIndex]
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updateItemIndex, 1);
  } else {
    updatedCart[updateItemIndex] = updatedItem;
  }
  return {...state, cart: updatedCart};
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    default:
      return state;
  }
};