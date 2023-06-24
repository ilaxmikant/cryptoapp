import { Box, HStack, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Icon } from '@chakra-ui/react';
import {BsFacebook,BsInstagram,BsTwitter,BsYoutube} from "react-icons/bs";


const Footer = () => {
  return (
    <Box
    bgColor={"teal"}
    color={"blackAlpha"}
    w={"full"} h={"100px"}
    alignItems={"center"}
    >
      <VStack>
        <Text fontSize="3xl">
          reach us at:
        </Text>
        <HStack>
          <Link href="https://www.facebook.com/"><Icon as={BsFacebook} boxSize={6}/></Link>
          <Link href="https://www.instagram.com/"><Icon as={BsInstagram} boxSize={6}/></Link>
          <Link href="https://twitter.com/"><Icon as={BsTwitter} boxSize={6}/></Link>
          <Link href="https://www.youtube.com/"><Icon as={BsYoutube} boxSize={6}/></Link>
          
        </HStack>
      </VStack>
      
    </Box>
  );
};

export default Footer;