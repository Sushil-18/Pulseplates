import React from "react";
import logo from "../assets/logo.jpg";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import UserProgressContext from "../context/UserProgressContext";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  return (
    <header>
      <div className="flex items-center justify-around gap-96 mt-8">
        <div className=" flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 border-2 border-green-400 rounded-full"
          />
          <p className="text-2xl font-semibold text-amber-400">PULSEPLATES</p>
        </div>
        <div>
          <button
            onClick={handleShowCart}
            className="text-xl font-medium text-amber-400"
          >
            Cart ({totalCartItems})
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
