import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Image,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { DietLabels } from "./ui/DietLabels";
import { Cautions } from "./ui/Cautions";
import { HealthLabels } from "./ui/HealthLabels";

export const RecipeCard = ({ recipe, recipeClick }) => {
  const { image, label, mealType, dishType } = recipe.recipe;

  //in the onClick prop the recipe is passed on in the recipeClick prop towards the handleRecipeButton in App.
  return (
    <Card
      onClick={() => recipeClick(recipe)}
      cursor="pointer"
      size="sm"
      width={["320px", "sm"]}
      height={["auto", "md"]}
      margin="auto"
      borderRadius="lg"
      boxShadow="lg"
      _hover={{
        boxShadow: "xl",
        transform: "scale(1.05)",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      }}
    >
      <Image
        src={image}
        alt={label}
        width="100%"
        height="200"
        objectFit="cover"
        borderTopRadius={"lg"}
      />

      <CardHeader
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        padding={3}
        marginTop={3}
      >
        <Heading size="md" color="teal.700">
          {label}
        </Heading>
        <Heading size="sm" color="teal.600" marginTop={2}>
          {mealType}, {dishType}
        </Heading>
        <Divider mt={4} />
      </CardHeader>

      <CardBody p={4} alignContent={"center"} mb={5}>
        <Flex flexWrap="wrap" justifyContent="center" gap={3}>
          <HealthLabels recipe={recipe} coreDietlabels={true} />
          <DietLabels recipe={recipe} />
          <Cautions recipe={recipe} />
        </Flex>
      </CardBody>
    </Card>
  );
};
