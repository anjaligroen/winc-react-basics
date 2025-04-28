import { Tag } from "@chakra-ui/react";

export const HealthLabels = ({ recipe, coreDietlabels }) => {
  const { healthLabels } = recipe.recipe;

  //Determine which health labels to display
  const labelsDisplay = coreDietlabels
    ? healthLabels.filter(
        // checks if the coreDietlabels prop passed is true
        // if coreDietlabels is true, the toDisplay value will be filter out only Vegan and Vegeterian
        // if coreDietlabels is not true, toDisplay will show all the HealthLabels of the recipe
        (label) => label === "Vegan" || label === "Vegetarian"
      )
    : healthLabels;

  return (
    labelsDisplay.length > 0 && (
      <>
        {labelsDisplay.map((label) => (
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
      </>
    )
  );
};
