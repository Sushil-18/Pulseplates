import React from "react";
import { currencyFormatter } from "../utils/Fromatter";

const Cartitem = ({ name, quantity, price, onIncrease, onDecrease }) => {
  return (
    <li className="flex justify-between">
      <p>
        {name} - {quantity} * {currencyFormatter.format(price)}
      </p>
      <p className="flex gap-4">
        <button
          className="border-0 bg-black text-yellow-500 rounded-[50%] w-6 h-6"
          onClick={onDecrease}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="border-0 bg-black font-semibold text-yellow-500 rounded-[50%] w-6 h-6"
          onClick={onIncrease}
        >
          +
        </button>
      </p>
    </li>
  );
};

export default Cartitem;
