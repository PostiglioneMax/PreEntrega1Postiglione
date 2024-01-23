import React from "react";
import CardWidget from "./CardWidget";
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div>
            <Flex as="nav" alignItems="center" bg="gray.900">
                <Box p="4">
                    <Link to={"/"}>
                        <Text color="white"> Streewear </Text>
                    </Link>
                </Box>
                <Spacer />
                <Button colorScheme="transparent" align="center" variant="ghost" color="white">
                    New Collection
                </Button>
                <Spacer />
                <Menu>
                    <MenuButton color="white">Categorias</MenuButton>
                    <MenuList bg="gray">
                        <Link to={"/categoria/A"}>
                            <MenuItem bg="gray" color="white">
                                Categoria A
                            </MenuItem>
                        </Link>
                        <Link to={"/categoria/B"}>
                            <MenuItem bg="gray" color="white">
                                Categoria B
                            </MenuItem>
                        </Link>
                        <Link to={"/categoria/C"}>
                            <MenuItem bg="gray" color="white">
                                Categoria C
                            </MenuItem>
                        </Link>
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
