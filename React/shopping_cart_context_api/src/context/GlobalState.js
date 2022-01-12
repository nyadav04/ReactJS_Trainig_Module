import React, { useState, useReducer } from "react";
import ShopContext from "./shop-context";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";

const GlobalState = props => {
  const products = [
    {id: "p1", title: "Perfume", price: 3000},
    {id: "p2", title: "Jacket", price: 6000},
    {id: "p3", title: "Aldo Bag", price: 14000},
    {id: "p4", title: "T-Shirt", price: 7000},
  ];

  const [cartState, dispatch] = useReducer(shopReducer, { cart: []});

  const addProductToCart = product => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, product: product});
    }, 700);
  };

  const removeProductFromCart = productId => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId: productId});
    }, 700);
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
      >
        {props.children}
      </ShopContext.Provider>
  );

};

export default GlobalState;