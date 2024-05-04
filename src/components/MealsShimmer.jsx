import React from "react";

const MealsShimmer = () => {
  return (
    <div className="px-64 py-12">
      <ul className="grid grid-cols-3 gap-4 p-4">
        <li className=" border-0 rounded-xl text-center bg-[#1d1a16] overflow-hidden">
          <article className="h-full flex flex-col justify-between">
            <img />
            <div className="flex flex-col gap-1">
              <p className="text-white text-xl font-semibold"></p>
              <div>
                <button className="w-16 py-1 bg-[#312c1d] text-[#ffc404] font-bold rounded-md"></button>
              </div>
              <p className=" font-sm"></p>
            </div>
            <div>
              <button className="px-6 py-1 my-6 border-0 bg-yellow-600 rounded-md"></button>
            </div>
          </article>
        </li>
      </ul>
    </div>
  );
};

export default MealsShimmer;
