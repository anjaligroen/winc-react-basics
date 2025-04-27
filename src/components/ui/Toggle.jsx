import { Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";

export const Toggle = ({ text, changeFn, ...styleProps }) => {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
    changeFn(!isToggled);
  };

  return (
    <Tag
      onClick={handleToggle}
      variant={!isToggled ? "outline" : "solid"}
      boxShadow="md"
      cursor="pointer"
      {...styleProps}
    >
      <TagLeftIcon boxSize="12px" as={AddIcon} />
      <TagLabel>{text}</TagLabel>
    </Tag>
  );
};
