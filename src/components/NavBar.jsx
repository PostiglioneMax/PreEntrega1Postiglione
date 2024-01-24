import React from "react";
import CardWidget from "./CardWidget";
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div>
            <Flex as="nav" alignItems="center" bg="gray.100" height="90px">
                <Box p="4">
                    <Link to={"/"}>
                        <Image boxSize="4.5rem" borderRadius="full" src="https://firebasestorage.googleapis.com/v0/b/testing2-ddfc5.appspot.com/o/cringeEdit.jpeg?alt=media&token=6c0a00d0-879f-4d62-a540-5f08f0c106b1" alt="Fluffybuns the destroyer" mr="12px" />
                    </Link>
                </Box>
                <Spacer />
                <Button
                    colorScheme="transparent"
                    align="center"
                    color="black"
                    px={4}
                    py={2}
                    fontWeight="600"
                    transition="all 0.2s"
                    borderRadius="md"
                    borderWidth="md"
                    _hover={{
                        bg: "white",
                    }}
                >
                    New Collection
                </Button>
                <Spacer />
                <Menu>
                    <MenuButton
                        px={4}
                        py={2}
                        color="black"
                        fontWeight="600"
                        transition="all 0.2s"
                        borderRadius="md"
                        borderWidth="md"
                        _hover={{
                            bg: "white",
                        }}
                        _expanded={{
                            bg: "white",
                            boxShadow: "inline",
                        }}
                    >
                        Categorias
                    </MenuButton>
                    <MenuList bg="gray.100">
                        <Link to={"/categoria/A"}>
                            <MenuItem
                                bg="gray.100"
                                color="black"
                                fontWeight="500"
                                _hover={{
                                    bg: "white",
                                }}
                            >
                                Remeras Oversize
                            </MenuItem>
                        </Link>
                        <Link to={"/categoria/B"}>
                            <MenuItem
                                bg="gray.100"
                                color="black"
                                fontWeight="500"
                                _hover={{
                                    bg: "white",
                                }}
                            >
                                Shorts
                            </MenuItem>
                        </Link>
                        <Link to={"/categoria/C"}>
                            <MenuItem
                                bg="gray.100"
                                color="black"
                                fontWeight="500"
                                _hover={{
                                    bg: "white",
                                }}
                            >
                                Perfumes
                            </MenuItem>
                        </Link>
                    </MenuList>
                </Menu>{" "}
                <Spacer />
                <Menu>
                    <MenuButton
                        color="black"
                        px={4}
                        py={2}
                        fontWeight="600"
                        transition="all 0.2s"
                        borderRadius="md"
                        borderWidth="md"
                        _hover={{
                            bg: "white",
                        }}
                    >
                        Contacto
                    </MenuButton>
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
