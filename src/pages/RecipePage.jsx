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
  Flex,
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
      maxWidth="1200px"
      height="auto"
      margin="auto"
      boxShadow="lg"
    >
      <GridItem area="header" marginBottom={8}>
        {/* The Recipe Image */}
        <Image
          src={image}
          alt={recipe.recipe.label}
          width="100%"
          height="200"
          objectFit="cover"
          objectPosition="center"
        />
        {/* A subtle Backbotton to navigate back to RecipeListPage */}
        <IconButton
          aria-label="Back"
          color="teal.600"
          icon={<ChevronLeftIcon />}
          onClick={() => backClick()}
          position="relative"
          size={["md", "lg"]}
          variant="ghost"
          _hover={{
            boxShadow: "lg",
          }}
        ></IconButton>
      </GridItem>

      {/* Recipe Information */}
      <GridItem area="recipe" px={3}>
        <Heading size="sm" color="teal.600">
          {recipe.recipe.mealType}
        </Heading>
        <Heading color="teal.900">{label}</Heading>
        <Heading fontSize="xsm" color="teal.600" mt={2}>
          Cooking Time: {totalTime} minutes
          <br />
          Servings: {recipe.recipe.yield}
        </Heading>
        <Divider my={4} />

        {/*Ingredient List */}
        <Heading size="md" color="teal.700" marginBottom={2}>
          Ingredients:
        </Heading>
        <VStack align="start" spacing={2} color="teal.900">
          {ingredientLines.map((ingredient, index) => (
            <Checkbox key={index} colorScheme="green">
              {ingredient}
            </Checkbox>
          ))}
        </VStack>
      </GridItem>

      {/* Health Labels, Cautions, and diet information*/}
      <GridItem area="labels" p={3}>
        <Divider my={4}></Divider>
        <Heading size="xsm" color="teal.700" py={3}>
          Health labels
        </Heading>
        <Flex wrap={"wrap"} align={"flex-start"} gap={3}>
          <HealthLabels recipe={recipe} coreDietlabels={false} />
        </Flex>

        {cautions.length > 0 && (
          <Heading size="sm" color="teal.700" py={3}>
            Cautions
          </Heading>
        )}
        <Flex wrap={"wrap"} align={"flex-start"} gap={3}>
          <Cautions recipe={recipe} />
        </Flex>

        {dietLabels.length > 0 && (
          <Heading size="sm" color="teal.700" py={3}>
            Diet
          </Heading>
        )}
        <Flex wrap={"wrap"} align={"flex-start"} gap={3}>
          <DietLabels recipe={recipe} />
        </Flex>

        {/* Nutrient list */}
        <Divider my={8} />
        <TotalNutrients recipe={recipe} color="teal.800" />
      </GridItem>

      {/* Another backbutton navigating to RecipeListPage */}
      <GridItem area="footer">
        <Button onClick={() => backClick()} width="100%" color="teal.800">
          Back
        </Button>
      </GridItem>
    </Grid>
  );
};
