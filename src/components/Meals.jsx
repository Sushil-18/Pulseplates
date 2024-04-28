import React from "react";
import Mealitem from "./Mealitem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
const congigObj = {};
const Meals = () => {
  const {
    Data: mealsData,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meal", congigObj, []);
  if (isLoading) {
    return <p className="text-center mt-16">Fetching meals Data...</p>;
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
