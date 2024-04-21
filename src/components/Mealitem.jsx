import React from "react";

const Mealitem = ({ img, name, price, desc }) => {
  return (
    <li className="border-0 rounded-xl text-center bg-[#1d1a16] overflow-hidden">
      <article>
        {console.log(name)}
        <img
          className="h-[50%] w-auto mb-4"
          src={`http://localhost:3000/${img}`}
          alt={name}
        />
        <div className="flex flex-col gap-1">
          <p className="text-white text-xl font-semibold">{name}</p>
          <div>
            <button className="w-16 py-1 bg-[#312c1d] text-[#ffc404] font-bold rounded-md">
              {price}
            </button>
          </div>
          <p className=" font-sm">{desc}</p>
        </div>
        <button className="px-6 py-1 mb-6 border-0 bg-yellow-600 rounded-md">
          Add to Cart
        </button>
      </article>
    </li>
  );
};

export default Mealitem;
