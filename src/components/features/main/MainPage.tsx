'use client'

import React, { useState, useEffect, Suspense } from "react";
import MealCard from "@/components/ui/elements/MealCard";
import PaginationComponent from "@/components/ui/elements/PaginationComponent";
import { useSearchParams } from "next/navigation";
import CategoryFilter from "@/components/ui/elements/CategoryFilter";
import { Skeleton } from "@/components/ui/common/Skeleton";

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

export default function MainPage() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const itemsPerPage = 10;
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm") || ""; 

  useEffect(() => {
    const fetchAllMeals = async () => {
      try {
        const requests = alphabet.map((letter) =>
          fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
            .then((res) => res.json())
        );
        const responses = await Promise.all(requests);
        const allMeals = responses
          .flatMap((res) => res.meals || [])
          .filter(Boolean);

        setMeals(allMeals);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    fetchAllMeals();
  }, []);

  const filteredMeals = meals.filter(meal => {
    const matchesSearchTerm = meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || meal.strCategory === selectedCategory;
    return matchesSearchTerm && matchesCategory;
  });

  const indexOfLastMeal = currentPage * itemsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - itemsPerPage;
  const currentMeals = filteredMeals.slice(indexOfFirstMeal, indexOfLastMeal);
  const totalPages = Math.ceil(filteredMeals.length / itemsPerPage);

  const categories = ["All", ...new Set(meals.map(meal => meal.strCategory))];

  return (
    <Suspense fallback={
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[...Array(itemsPerPage)].map((_, index) => (
          <div key={index} className="w-[250px] h-[350px] rounded-3xl bg-primary p-4 shadow-lg text-white relative flex flex-col justify-between">
            <Skeleton className="w-full h-40 rounded-lg" />
            <div className="text-center mt-4">
              <Skeleton className="w-3/4 h-6 mx-auto" />
              <Skeleton className="w-1/2 h-4 mx-auto mt-2" />
            </div>
            <Skeleton className="w-full h-10 rounded-full mt-4" />
          </div>
        ))}
      </div>
    }>
    <div className="p-6">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {currentMeals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>

      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
    </Suspense>
  );
}
