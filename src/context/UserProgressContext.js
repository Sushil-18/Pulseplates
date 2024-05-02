import React from "react";
import { createContext } from "react";

const UserProgressContext = React.createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckOut: () => {},
  hideCheckOut: () => {},
  clearCart: () => {},
});

export default UserProgressContext;
