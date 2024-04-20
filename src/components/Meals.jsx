import React from "react";
import { useEffect, useState } from "react";
import { fetchMeals } from "../http";

const Meals = () => {
  const [mealsData, setMealsData] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const meals = await fetchMeals();
        setMealsData([...meals]);
      } catch (error) {
        setError({ message: "Failed to fetch the meal data" });
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      {console.log(mealsData)}
      <ul>
        {mealsData.map((meal) => {
          <li key={meal.id}>{meal.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Meals;
