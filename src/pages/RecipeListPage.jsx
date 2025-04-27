import { RecipeSearch } from "../components/RecipeSearch";
import { Heading } from "@chakra-ui/react";

export const RecipeListPage = ({ clickFn }) => {
  return (
    <>
      <Heading
        size={["xl", "2xl"]}
        textAlign={"center"}
        marginTop={10}
        color={"teal.700"}
        p={10}
      >
        All These Recipes
      </Heading>
      <RecipeSearch clickFn={clickFn} />
    </>
  );
};
