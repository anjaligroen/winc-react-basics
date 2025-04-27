import { Flex, Tag } from "@chakra-ui/react";

export const HealthLabels = ({ recipe, onlyCore }) => {
  const labels = recipe.recipe.healthLabels;
  const toDisplay = onlyCore
    ? labels.filter((label) => label === "Vegan" || label === "Vegetarian")
    : labels;

  return (
    toDisplay.length > 0 && (
      <Flex flexWrap="wrap" gap={2} align="flex-start">
        {toDisplay.map((label) => (
          <Tag
            key={label}
            size={["sm", "md"]}
            variant="subtle"
            colorScheme="green"
            padding={2}
          >
            {label}
          </Tag>
        ))}
      </Flex>
    )
  );
};
