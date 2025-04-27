import { Flex, Tag } from "@chakra-ui/react";

export const Cautions = ({ recipe }) => {
  const cautions = recipe.recipe.cautions;

  return (
    cautions.length > 0 && (
      <Flex flexWrap="wrap" gap={2} justifyContent="center" align="flex-start">
        {cautions.map((label) => (
          <Tag
            key={label}
            size={["sm", "md"]}
            variant="subtle"
            colorScheme="red"
            padding={2}
          >
            {label}
          </Tag>
        ))}
      </Flex>
    )
  );
};
