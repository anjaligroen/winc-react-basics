import { RecipeSearch } from "../components/RecipeSearch";
import { Heading } from "@chakra-ui/react";

export const RecipeListPage = ({ recipeClick }) => {
  return (
    <>
      {/* Main Heading for the page */}
      <Heading
        size={["xl", "2xl"]}
        textAlign={"center"}
        marginTop={10}
        color={"teal.800"}
        p={10}
      >
        All These Recipes
      </Heading>
      {/* RecipeSearch handles searching and clicking a recipe */}
      <RecipeSearch recipeClick={recipeClick} />
    </>
  );
};
