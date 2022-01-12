import React from "react";

export default React.createContext({
  products: [
    {id: "p1", title: "Perfume", price: 3000},
    {id: "p2", title: "Jacket", price: 6000},
    {id: "p3", title: "Aldo Bag", price: 14000},
    {id: "p4", title: "T-Shirt", price: 7000},
  ],
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: product => {}
});