import { RecipeCard } from "./RecipeCard";
import { Flex, Box } from "@chakra-ui/react";

export const RecipeList = ({ recipes, recipeClick }) => {
  return (
    <Flex
      flexWrap="wrap"
      gap={20}
      padding={[0, 5]}
      align="center"
      justify="center"
      maxWidth={["100%", "100%", "85%"]}
    >
      {recipes.map((recipe) => (
        <Box
          key={recipe.recipe.label}
          flex="1 1 320px"
          maxW="350px"
          minW="280px"
          display="flex"
          justifyContent="center"
        >
          <RecipeCard recipeClick={recipeClick} recipe={recipe} />
        </Box>
      ))}
    </Flex>
  );
};
