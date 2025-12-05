import { useState } from 'react'
import './App.css'
import CardsList from './Components/CardsList'
import EditCard from './Components/EditCard'
import Header from './Components/Header'

function App() {
  const [editingCard, setEditingCard] = useState(null)
  const [refreshKey, setRefreshKey] = useState(0)

  const handleSave = (updatedData) => {
    const storedMeals = JSON.parse(localStorage.getItem("meals") || "[]");
    const updatedMeals = storedMeals.map((meal) => {
      if (meal.idMeal === updatedData.id) {
        return {
          ...meal,
          strMeal: updatedData.title,
          strArea: updatedData.description,
        };
      }
      return meal;
    });
    localStorage.setItem("meals", JSON.stringify(updatedMeals));
    setEditingCard(null);
    setRefreshKey((prev) => prev + 1);
  };

  const handleDelete = (id) => {
    const storedMeals = JSON.parse(localStorage.getItem("meals") || "[]");
    const updatedMeals = storedMeals.filter((meal) => meal.idMeal !== id);
    localStorage.setItem("meals", JSON.stringify(updatedMeals));
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <>
      <Header />
      <CardsList key={refreshKey} onEdit={setEditingCard} onDelete={handleDelete} />
      {editingCard && (
        <EditCard 
          id={editingCard.id}
          title={editingCard.title} 
          description={editingCard.description}
          onCancel={() => setEditingCard(null)}
          onSave={handleSave}
        />
      )}
    </>
  )
}

export default App
