import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage"; // Make sure to import this!
import { useState } from "react";

export const App = () => {
  const [userRecipe, setUserRecipe] = useState(null);

  const handleRecipeButton = (recipe) => {
    console.log("Selected Recipe:" + recipe + userRecipe);
    setUserRecipe(recipe);
  };

  const handleBack = () => {
    console.log("Back button clicked");
    setUserRecipe(null);
  };

  return (
    <>
      {userRecipe === null ? (
        <RecipeListPage clickFn={handleRecipeButton} />
      ) : (
        <RecipePage recipe={userRecipe} backClick={handleBack} />
      )}
    </>
  );
};
