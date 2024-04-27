import React from "react";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { currencyFormatter } from "../utils/Fromatter";
import UserProgressContext from "../context/UserProgressContext";
import Cartitem from "./Cartitem";

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
      <h2 className="font-semibold text-xl text-center">Your Cart</h2>
      {cartCtx.items.length > 0 ? (
        <>
          <ul className="flex flex-col gap-2 p-2">
            {cartCtx.items.map((item) => (
              <Cartitem
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                onIncrease={() => cartCtx.addItem(item)}
                onDecrease={() => cartCtx.removeItem(item.id)}
              ></Cartitem>
            ))}
          </ul>
          <p className=" flex justify-end p-2">
            {currencyFormatter.format(cartTotal)}
          </p>
        </>
      ) : (
        <p className="text-center mt-2 text-md">
          Your cart is currently empty!!
        </p>
      )}
      <p className="flex gap-6 justify-end mb-2 p-2">
        <button onClick={handleHideCart}>Close</button>
        {cartCtx.items.length > 0 && (
          <button className="border-0 rounded-md p-1.5 bg-yellow-500">
            Go to Checkout
          </button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
