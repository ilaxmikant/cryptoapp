import { Spacer,Box,Button, Center, HStack ,Heading,Menu, MenuButton,MenuGroup,MenuList,MenuItem, Flex,} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineMenu,AiFillHome} from "react-icons/ai";
import {BsCurrencyExchange,BsCurrencyBitcoin} from "react-icons/bs";
import {RxAvatar} from "react-icons/rx";

const Header = () => {
  return (
    <Flex alignItems={"center"} p={'2'}>
     <HStack p={"4"} bgColor={"whiteAlpha.900"}>
      <Menu>
        <MenuButton as={Button} rightIcon={<AiOutlineMenu />} colorScheme='teal'>
        </MenuButton>
        <MenuList >
        <MenuGroup title="MENU">
          <MenuItem icon={<AiFillHome/>} as="a" href="/">
            Home
          </MenuItem>
           <MenuItem icon={<BsCurrencyBitcoin/>} as="a" href="/coins">
            Coins 
          </MenuItem>
          <MenuItem icon={<BsCurrencyExchange/>} as="a" href="/exchanges">
            Exchanges
          </MenuItem>
          </MenuGroup>
        </MenuList>        
      </Menu>
      <Center><Heading size='lg' fontSize='7xl' >cryptoes</Heading></Center>
      
    </HStack> 
    <Spacer/>
      <Button  rightIcon={<RxAvatar/>}colorScheme={"teal"} variant={"solid"} color={"white"} > 
        <Link to="/about">About Us</Link>
      </Button>

    </Flex>
  );
};

export default Header;
