import React from "react";
import { createContext } from "react";

const UserProgressContext = React.createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export default UserProgressContext;
