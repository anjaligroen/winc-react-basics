import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Image,
  Text,
  Divider,
} from "@chakra-ui/react";
import { DietLabels } from "./ui/DietLabels";
import { Cautions } from "./ui/Cautions";
import { HealthLabels } from "./ui/HealthLabels";

export const RecipeCard = ({ recipe, clickFn }) => {
  const { image, label, mealType, dishType } = recipe.recipe;

  return (
    <Card
      onClick={() => clickFn(recipe)}
      cursor="pointer"
      size="sm"
      width={["320px", "sm"]}
      height={["auto", "md"]}
      margin="auto"
      borderRadius="lg"
      boxShadow="lg"
      _hover={{
        boxShadow: "xl", // Increases shadow when hovered
        transform: "scale(1.05)", // Slightly enlarges the card
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smooth transition for scaling and shadow
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
        <Text fontSize="md" color="teal" mt={2}>
          {mealType}, {dishType}
        </Text>
        <Divider my={0} marginTop={4} color={"teal"} />
      </CardHeader>

      <CardBody
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignContent="center"
        gap={3}
        marginBottom={3}
        padding={4}
      >
        <HealthLabels recipe={recipe} onlyCore={true} />
        <DietLabels recipe={recipe} />
        <Cautions recipe={recipe} />
      </CardBody>
    </Card>
  );
};
