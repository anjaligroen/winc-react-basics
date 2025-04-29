import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { useState } from "react";

export const App = () => {
  const [userRecipe, setUserRecipe] = useState(null);

  // I am handling the Recipe states and buttonhandlers depending on it in the App component to be able to pass it on all through the app.
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
        <RecipeListPage recipeClick={handleRecipeButton} />
      ) : (
        <RecipePage recipe={userRecipe} backClick={handleBack} />
      )}
    </>
  );
};
