import React, { useState } from "react";
import { Button } from "../common/Button";
import { Skeleton } from "../common/Skeleton";
import MealModalWindow from "@/components/features/main/ModalWindow/MealModalWindow";

interface Meal {
    idMeal: number
    strMeal: string
    strMealAlternate: string
    strCategory: string
    strArea: string
    strInstructions: string
    strMealThumb: string
    strTags: string
    strYoutube: string
    strIngredient1: string
    strIngredient2: string
    strIngredient3: string
    strIngredient4: string
    strIngredient5: string
    strIngredient6: string
    strIngredient7: string
    strIngredient8: string
    strIngredient9: string
    strIngredient10: string
    strIngredient11: string
    strIngredient12: string
    strIngredient13: string
    strIngredient14: string
    strIngredient15: string
    strIngredient16: string
    strIngredient17: string
    strIngredient18: string
    strIngredient19: string
    strIngredient20: string
    strMeasure1: string
    strMeasure2: string
    strMeasure3: string
    strMeasure4: string
    strMeasure5: string
    strMeasure6: string
    strMeasure7: string
    strMeasure8: string
    strMeasure9: string
    strMeasure10: string
    strMeasure11: string
    strMeasure12: string
    strMeasure13: string
    strMeasure14: string
    strMeasure15: string
    strMeasure16: string
    strMeasure17: string
    strMeasure18: string
    strMeasure19: string
    strMeasure20: string
    strSource: string
    strImageSource: string
    strCreativeCommonsConfirmed: string
    dateModified: string
}

const MealCard: React.FC<{ meal: Meal }> = ({ meal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-[250px] h-[350px] rounded-3xl bg-primary p-4 shadow-lg text-white relative flex flex-col justify-between">
      {!meal ? (
        <>
          <Skeleton className="w-full h-40 rounded-lg" />
          <div className="text-center mt-4">
            <Skeleton className="w-3/4 h-6 mx-auto" />
            <Skeleton className="w-1/2 h-4 mx-auto mt-2" />
          </div>
          <Skeleton className="w-full h-10 rounded-full mt-4" />
        </>
      ) : (
        <>
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-40 object-cover rounded-lg"
          />
          <div className="text-center">
            <h2 className="text-lg font-bold">{meal.strMeal}</h2>
            <p className="text-sm">
              {meal.strCategory} - {meal.strArea}
            </p>
          </div>
          <Button
            className="bg-white text-purple-600 font-bold px-6 py-2 rounded-full"
            onClick={openModal} 
          >
            More
          </Button>

          {isModalOpen && (
            <MealModalWindow
              selectedMeal={meal} 
              closeModal={closeModal}
            />
          )}
        </>
      )}
    </div>
  );
};

export default MealCard;
