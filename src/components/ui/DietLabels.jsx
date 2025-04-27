import { Flex, Tag } from "@chakra-ui/react";

export const DietLabels = ({ recipe }) => {
  const { dietLabels } = recipe.recipe;

  return (
    dietLabels.length > 0 && (
      <Flex flexWrap="wrap" gap={2} align="flex-start">
        {dietLabels.map((label) => (
          <Tag
            key={label}
            size={["sm", "md"]}
            variant="subtle"
            colorScheme="teal"
            padding={2}
          >
            {label}
          </Tag>
        ))}
      </Flex>
    )
  );
};
