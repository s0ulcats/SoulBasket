import React from "react";
import { Card, CardContent } from "@/components/ui/common/Card";
import { Button } from "@/components/ui/common/Button";
import { toast } from "sonner";
import { FaYoutube } from "react-icons/fa"; // Импортируем иконку YouTube

interface Meal {
  idMeal: number;
  strMeal: string;
  strMealAlternate: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  strImageSource: string;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
}

interface MealModalWindowProps {
  selectedMeal: Meal;
  closeModal: () => void;
}

const MealModalWindow: React.FC<MealModalWindowProps> = ({
  selectedMeal,
  closeModal,
}) => {
  const addToBasket = () => {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");

    basket.push(selectedMeal);

    localStorage.setItem("basket", JSON.stringify(basket));

    toast.success("Successfully added to basket!");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <Card className="w-[1080px] h-[720px] p-6 text-white rounded-xl relative">
        <button
          className="absolute top-4 right-4 text-white text-xl"
          onClick={closeModal}
        >
          ×
        </button>
        <CardContent className="flex flex-col gap-6 justify-center items-center overflow-y-auto max-h-full">
          <img
            src={selectedMeal.strMealThumb}
            alt={selectedMeal.strMeal}
            className="w-xl mt-[120px] h-40 object-cover rounded-lg"
          />
          <h2 className="text-2xl font-bold text-center">{selectedMeal.strMeal}</h2>
          <p className="text-sm text-center">
            {selectedMeal.strCategory} - {selectedMeal.strArea}
          </p>
          <p className="text-sm mt-4">{selectedMeal.strInstructions}</p>
          <p className="text-sm mt-2">
            Tags: {selectedMeal.strTags}
          </p>
          <div className="text-sm mt-2">
            {selectedMeal.strYoutube ? (
              <a
                href={selectedMeal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-red-500 hover:underline"
              >
                <FaYoutube size={20} /> <span>Watch Recipe</span>
              </a>
            ) : (
              "Not available"
            )}
          </div>

          <div className="mt-4 w-full">
            <h3 className="font-semibold">Ingredients:</h3>
            <ul className="list-disc pl-5">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
                const ingredient = selectedMeal[
                  `strIngredient${i}` as keyof Meal
                ];
                const measure = selectedMeal[`strMeasure${i}` as keyof Meal];
                return (
                  ingredient && (
                    <li key={i} className="text-sm">
                      {ingredient} - {measure}
                    </li>
                  )
                );
              })}
            </ul>
          </div>
          <Button onClick={addToBasket}>Add to basket</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MealModalWindow;
