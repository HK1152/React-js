import { useEffect, useState } from "react";
import Card from "./Card";
import localData from "./LocalData.js";

function CardsList({ onEdit, onDelete }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const storedMeals = localStorage.getItem("meals");
    
    if (storedMeals) {
      setMeals(JSON.parse(storedMeals));
    } else {
      setMeals(localData.meals);
      localStorage.setItem("meals", JSON.stringify(localData.meals));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Delicious Recipes</h2>
          <p className="text-gray-600 text-lg">Discover and manage your favorite recipes</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meals.map((meal) => (
            <Card
              key={meal.idMeal}
              title={meal.strMeal}
              description={meal.strInstructions}
              img={meal.strMealThumb}
              id={meal.idMeal}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardsList;
