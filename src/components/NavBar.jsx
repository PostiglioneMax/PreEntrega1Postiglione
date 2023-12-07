import React from "react";
import CardWidget from "./CardWidget";
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Button, Text } from "@chakra-ui/react";
const NavBar = () => {
    return (
        <div>
            <Flex alignItems="center" bg="black">
                <Box p="4">
                    <Text color="white"> Streewear </Text>
                </Box>
                <Spacer />
                <Button colorScheme="transparent" align="center" variant="ghost" color="white">
                    Inicio
                </Button>
                <Spacer />
                <Menu>
                    <MenuButton color="white">Categorias</MenuButton>
                    <MenuList bg="gray">
                        <MenuItem bg="gray" color="white">
                            Hoodie
                        </MenuItem>
                        <MenuItem bg="gray" color="white">
                            Oversize Shirts
                        </MenuItem>
                        <MenuItem bg="gray" color="white">
                            Shorts
                        </MenuItem>
                    </MenuList>
                </Menu>{" "}
                <Spacer />
                <Menu>
                    <MenuButton color="white">Contacto</MenuButton>
                    <MenuList bg="gray">
                        <MenuItem bg="gray" color="white">
                            Sobre nosotros
                        </MenuItem>
                        <MenuItem bg="gray" color="white">
                            Redes
                        </MenuItem>
                        <MenuItem bg="gray" color="white">
                            Collabs
                        </MenuItem>
                    </MenuList>
                </Menu>{" "}
                <Spacer />
                <Box p="4">
                    <CardWidget />
                </Box>
            </Flex>
        </div>
    );
};

export default NavBar;
