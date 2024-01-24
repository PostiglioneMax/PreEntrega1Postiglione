import React from "react";
import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Image, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ titulo, id, imagensita, precio }) => {
    return (
        <Card
            maxW="sm"
            _hover={{
                boxShadow: "inner",
                rounded: "md",
                bg: "white",
                border: "1px solid red",
                transition: "0.4s",
            }}
        >
            <CardBody p="4" paddingBottom="0" rounded="md" bg="gray.100">
                <Flex flexDirection="column" justifyContent="content" alignItems="center">
                    <Image w="300px" h="300px" src={imagensita} alt="Clothing" borderRadius="lg" />
                    <Stack display="flex" flexDirection="column" mt="6" spacing="3" justifyContent="center" alignItems="center">
                        <Heading size="md">{titulo}</Heading>
                        <Text textAlign="center" fontSize="15px" fontWeight="bold">
                            $ {precio}
                        </Text>
                    </Stack>
                </Flex>
            </CardBody>

            <Flex alignItems="center" justifyContent="center" bg="gray.100">
                <CardFooter>
                    <ButtonGroup spacing="2">
                        <Link to={`/producto/${id}`}>
                            <Button
                                borderRadius="lg"
                                bgColor="red.600"
                                color="white"
                                _hover={{
                                    bg: "white",
                                    color: "red",
                                    border: "1px solid red",
                                    transform: "scale(1.2)",
                                }}
                                _active={{
                                    bg: "white",
                                    color: "red",
                                    transform: "scale(1.5)",
                                    borderColor: "red",
                                }}
                            >
                                Ver Detalle
                            </Button>
                        </Link>
                    </ButtonGroup>
                </CardFooter>
            </Flex>
        </Card>
    );
};

export default Item;
