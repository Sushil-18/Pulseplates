import { createContext } from "react";
import React from "react";

const CartContext = React.createContext({
  items: [],
  additem: (item) => {},
  removeitem: (id) => {},
});

export default CartContext;
