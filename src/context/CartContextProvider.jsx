import { useReducer } from "react";
import CartContext from "./CartContext";
import cartReducer from "./cartReducer";

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatch({
      type: "Add",
      item,
    });
  }

  function removeItem(id) {
    dispatch({
      type: "Remove",
      id,
    });
  }

  const cartContext = {
    items: state.items,
    addItem,
    removeItem,
  };

  console.log(cartContext);
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
