import React from "react";
import { useEffect, useState } from "react";
import { fetchMeals } from "../http";
import Mealitem from "./Mealitem";

const Meals = () => {
  const [mealsData, setMealsData] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const meals = await fetchMeals();
        setMealsData(meals);
      } catch (error) {
        setError({ message: "Failed to fetch the meal data" });
      }
    }
    fetchData();
  }, []);
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
