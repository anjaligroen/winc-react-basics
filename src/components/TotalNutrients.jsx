import { Box, Text } from "@chakra-ui/react";

export const TotalNutrients = ({ recipe, ...styleProps }) => {
  //Destructuring the recipe's totalNutrients object data:
  const { ENERC_KCAL, FAT, CHOCDF, PROCNT, FIBTG, SUGAR } =
    recipe.recipe.totalNutrients;

  return (
    <Box {...styleProps}>
      <Text>
        <strong>Calories:</strong> {Math.round(ENERC_KCAL.quantity)} kcal
      </Text>
      <Text>
        <strong>Fat:</strong> {Math.round(FAT.quantity)} g
      </Text>
      <Text>
        <strong>Carbohydrates:</strong> {Math.round(CHOCDF.quantity)} g
      </Text>
      <Text>
        <strong>Protein:</strong> {Math.round(PROCNT.quantity)} g
      </Text>
      <Text>
        <strong>Sugar:</strong> {Math.round(SUGAR.quantity)} g
      </Text>
      <Text>
        <strong>Fiber:</strong> {Math.round(FIBTG.quantity)} g
      </Text>
    </Box>
  );
};
