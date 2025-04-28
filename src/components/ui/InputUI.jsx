import { Input } from "@chakra-ui/react";

export const InputUI = ({ value, onChange, placeholder, ...styleProps }) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      variant="unstyled"
      padding={3}
      placeholder={placeholder}
      color="teal.700"
      textAlign={"center"}
      w="300px"
      borderRadius="lg"
      boxShadow="lg"
      _hover={{
        boxShadow: "xl",
        transform: "scale(1.05)",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      }}
      _focus={{
        boxShadow: "xl",
        borderColor: "BlackAlpha.700",
        transition: "border-color 0.3s ease-in-out",
      }}
      _placeholder={{ color: "teal.600" }}
      {...styleProps}
    />
  );
};
