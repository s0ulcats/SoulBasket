'use client'

import React, { useState, useEffect } from "react";
import MealCard from "@/components/ui/elements/MealCard";
import PaginationComponent from "@/components/ui/elements/PaginationComponent";
import { useSearchParams } from "next/navigation";
import CategoryFilter from "@/components/ui/elements/CategoryFilter";

interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
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
  );
}
