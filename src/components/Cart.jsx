import React from "react";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { currencyFormatter } from "../utils/Fromatter";
import UserProgressContext from "../context/UserProgressContext";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce(
    (totalprice, item) => totalprice + item.price * item.quantity,
    0
  );
  function handleHideCart() {
    userProgressCtx.hideCart();
  }
  return (
    <Modal open={userProgressCtx.progress === "cart"}>
      <h2 className="font-semibold text-xl">Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="self-end">{currencyFormatter.format(cartTotal)}</p>
      <p className="flex gap-4 justify-end mb-2">
        <button onClick={handleHideCart}>Close</button>
        <button className="border-0 rounded-md p-1.5 bg-yellow-500">
          Go to Checkout
        </button>
      </p>
    </Modal>
  );
};

export default Cart;
