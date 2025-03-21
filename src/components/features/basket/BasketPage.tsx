'use client'

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/common/Card";
import MealModalWindow from "../main/ModalWindow/MealModalWindow";

const BasketPage: React.FC = () => {
  const [basketItems, setBasketItems] = useState<any[]>([]);
  const [ingredientCount, setIngredientCount] = useState<Map<string, number>>(new Map());
  const [selectedMeal, setSelectedMeal] = useState<any | null>(null); 
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); 

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(storedBasket);

    const ingredientsMap = new Map<string, number>();
    storedBasket.forEach((meal: any) => {
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        if (ingredient) {
          ingredientsMap.set(ingredient, (ingredientsMap.get(ingredient) || 0) + 1);
        }
      }
    });
    setIngredientCount(ingredientsMap);
  }, []);

  const openModal = (meal: any) => {
    setSelectedMeal(meal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMeal(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center text-primary mb-6">Your Basket</h2>
      
      {basketItems.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Your basket is empty.</p>
      ) : (
        <div className="flex flex-wrap gap-6">
          {basketItems.map((meal: any, index: number) => (
            <Card
              key={`${meal.idMeal}-${index}`} 
              className="w-[300px] p-4 bg-primary text-white rounded-lg cursor-pointer shadow-lg transform transition-all duration-300 hover:scale-105"
              onClick={() => openModal(meal)} 
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <CardContent>
                <h3 className="text-xl font-semibold">{meal.strMeal}</h3>
                <p className="text-sm">{meal.strCategory} - {meal.strArea}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-white">Ingredients Count</h3>
        <ul className="mt-4 space-y-3">
          {Array.from(ingredientCount.entries()).map(([ingredient, count]) => (
            <li key={ingredient} className="text-lg text-white flex justify-between items-center">
              <span>{ingredient}</span>
              <span className="font-semibold text-blue-400">{count}</span>
            </li>
          ))}
        </ul>
      </div>

      {isModalOpen && selectedMeal && (
        <MealModalWindow selectedMeal={selectedMeal} closeModal={closeModal} />
      )}
    </div>
  );
};

export default BasketPage;
