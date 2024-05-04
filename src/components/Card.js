import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Box } from "@chakra-ui/react"

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack spacing={2}>
      <Box p={4} borderRadius='lg' bg={"white"}>
        <Image borderRadius='lg' src={imageSrc}></Image>
        <Heading color={"black"}>{title}</Heading>
        <Text color={"black"}>{description}</Text>
        <HStack spacing={1}>
          <Text color="black">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black"/>
        </HStack>
      </Box>
    </VStack>

    
  );
};

export default Card;
