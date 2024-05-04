import React from "react";
import Mealitem from "./Mealitem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
import MealsShimmer from "./MealsShimmer";
const configObj = {};
const arr = [].fill(1);
const Meals = () => {
  const {
    Data: mealsData,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", configObj, []);
  if (isLoading) {
    return <p className="text-center">Fetching Meals data...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <div className="px-64 py-12">
      <ul className="grid grid-cols-3 gap-4 p-4">
        {mealsData.map((meal) => (
          <Mealitem key={meal.id} meal={meal} />
        ))}
      </ul>
    </div>
  );
};

export default Meals;
