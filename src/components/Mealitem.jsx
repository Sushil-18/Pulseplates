import React from "react";
import { currencyFormatter } from "../utils/Fromatter";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const Mealitem = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }
  return (
    <li className=" border-0 rounded-xl text-center bg-[#1d1a16] overflow-hidden">
      <article className="h-full flex flex-col justify-between">
        <img
          className="h-[50%] w-auto mb-4"
          src={`http://localhost:3000/${meal.image}`}
          alt={name}
        />
        <div className="flex flex-col gap-1">
          <p className="text-white text-xl font-semibold">{meal.name}</p>
          <div>
            <button className="w-16 py-1 bg-[#312c1d] text-[#ffc404] font-bold rounded-md">
              {currencyFormatter.format(meal.price)}
            </button>
          </div>
          <p className=" font-sm">{meal.description}</p>
        </div>
        <div>
          <button
            onClick={handleAddMealToCart}
            className="px-6 py-1 my-6 border-0 bg-yellow-600 rounded-md"
          >
            Add to Cart
          </button>
        </div>
      </article>
    </li>
  );
};

export default Mealitem;
