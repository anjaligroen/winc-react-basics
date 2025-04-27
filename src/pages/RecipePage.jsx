import {
  Button,
  IconButton,
  Heading,
  Image,
  Divider,
  Checkbox,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { DietLabels } from "../components/ui/DietLabels";
import { HealthLabels } from "../components/ui/HealthLabels";
import { Cautions } from "../components/ui/Cautions";
import { TotalNutrients } from "../components/TotalNutrients";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export const RecipePage = ({ recipe, backClick }) => {
  const { image, label, ingredientLines, totalTime, dietLabels, cautions } =
    recipe.recipe;

  return (
    <Grid
      templateAreas={{
        base: `"header" 
           "recipe" 
           "labels" 
           "footer"`,
        md: `"header header"
         "recipe labels"
         "footer footer"`,
      }}
      templateRows={{
        base: "auto auto auto auto",
        md: "auto 1fr auto",
      }}
      templateColumns={{
        base: "1fr",
        md: "auto auto",
      }}
      rowGap={3}
      columnGap={10}
      borderWidth="1px"
      borderRadius="lg"
      maxWidth="1000px"
      height="auto"
      margin="auto"
      boxShadow="lg"
    >
      <GridItem area="header" marginBottom={8}>
        <Image
          src={image}
          alt={recipe.recipe.label}
          width="100%"
          height="200"
          objectFit="cover"
          objectPosition="center"
        />
        <IconButton
          aria-label="Back"
          icon={<ChevronLeftIcon />}
          onClick={() => backClick()}
          position="relative"
          size={["md", "lg"]}
          variant="ghost"
        ></IconButton>
      </GridItem>

      <GridItem area="recipe" margin={5} marginTop={0}>
        <Heading size="sm" color="teal.700">
          {recipe.recipe.mealType}
        </Heading>
        <Heading>{label}</Heading>
        <Heading fontSize="xsm" color="gray.500" mt={2}>
          Cooking Time: {totalTime} minutes
          <br />
          Servings: {recipe.recipe.yield}
        </Heading>
        <Divider my={4} />
        <Heading size="md" marginBottom={2}>
          Ingredients:
        </Heading>
        <VStack align="start" spacing={2}>
          {ingredientLines.map((ingredient, index) => (
            <Checkbox key={index} colorScheme="green">
              {ingredient}
            </Checkbox>
          ))}
        </VStack>
      </GridItem>

      <GridItem
        area="labels"
        alignContent={"center"}
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        margin={5}
      >
        <Heading size="xsm">Health labels</Heading>
        <HealthLabels recipe={recipe} onlyCore={false} />
        {cautions.length > 0 && <Heading size="sm">Cautions</Heading>}
        <Cautions recipe={recipe} />
        {dietLabels.length > 0 && <Heading size="sm">Diet</Heading>}
        <DietLabels recipe={recipe} />
        <Divider my={2} />
        <TotalNutrients recipe={recipe} />
      </GridItem>

      <GridItem area="footer">
        <Button onClick={() => backClick()} width="100%">
          Back
        </Button>
      </GridItem>
    </Grid>
  );
};
