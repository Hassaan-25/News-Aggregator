import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="100%" background="#0F4C75" boxShadow="md" p={4}>
      <Flex justify="center" align="center">
        <Text
          color={"white"}
          fontFamily={"monospace"}
          fontSize={"sm"}
          textAlign={"center"}
        >
          &copy; {new Date().getFullYear()} Hassaan Bin Sajid. All rights
          reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
