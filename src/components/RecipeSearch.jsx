import { useState } from "react";
import { data } from "../utils/data";
import { RecipeList } from "./RecipeList";
import { Input, Box, Flex } from "@chakra-ui/react";
import { Toggle } from "./ui/Toggle";

export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const matchedRecipes = data.hits.filter((recipe) =>
    recipe.recipe.label.toLowerCase().includes(searchField.toLowerCase())
  );

  const filteredRecipes = matchedRecipes.filter(
    (recipe) =>
      (isVegan ? recipe.recipe.healthLabels.includes("Vegan") : true) &&
      (isVegetarian ? recipe.recipe.healthLabels.includes("Vegetarian") : true)
  );

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  const handleVeganToggle = (isVegan) => {
    setIsVegan(isVegan);
  };
  const handleVegetarianToggle = (isVegetarian) => {
    setIsVegetarian(isVegetarian);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent={"center"}
      mt={8}
    >
      <Input
        value={searchField}
        onChange={handleChange}
        variant="unstyled"
        padding={3}
        placeholder="Search for Recipes"
        textAlign={"center"}
        w="300px"
        mb={8}
        borderRadius="lg"
        boxShadow="lg"
        _hover={{
          boxShadow: "xl",
          transform: "scale(1.05)",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        }}
        _focus={{
          boxShadow: "xl",
          borderColor: "BlackAlpha.700",
          transition: "border-color 0.3s ease-in-out",
        }}
        _placeholder={{ color: "gray.500" }}
      />

      <Flex justifyContent={"space-around"} width="300px" mb={8}>
        <Toggle
          text="Vegetarian"
          changeFn={handleVegetarianToggle}
          colorScheme="green"
        ></Toggle>
        <Toggle
          text="Vegan"
          changeFn={handleVeganToggle}
          colorScheme="green"
        ></Toggle>
      </Flex>
      <RecipeList clickFn={clickFn} recipes={filteredRecipes} />
    </Box>
  );
};
