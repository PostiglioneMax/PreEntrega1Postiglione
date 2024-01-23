import React from "react";
import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Image, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ titulo, id, imagensita }) => {
    return (
        <Card
            maxW="sm"
            _hover={{
                boxShadow: "inner",
                rounded: "md",
                bg: "white",
                border: "2px solid gray",
                transform: "scale(1)",
            }}
        >
            <CardBody p="6" rounded="md" bg="white">
                <Image w="auto" h="auto" src={imagensita} alt="Clothing" borderRadius="lg" />
                <Stack display="flex" flexDirection="row" mt="6" spacing="3" justifyContent="center" alignContent="center" flexWrap="wrap">
                    <Heading size="md">{titulo}</Heading>
                    <Text textAlign="center" fontSize="15px" fontWeight="extrabold">
                        {" "}
                        $1090{" "}
                    </Text>
                </Stack>
            </CardBody>
            <Flex alignItems="center" justifyContent="center">
                <CardFooter>
                    <ButtonGroup spacing="2">
                        <Link to={`/producto/${id}`}>
                            <Button
                                borderRadius="lg"
                                bgColor="red.500"
                                color="white"
                                _hover={{
                                    bg: "white",
                                    color: "red",
                                    border: "1px solid red",
                                    transform: "scale(1.2)",
                                }}
                                _active={{
                                    bg: "blue",
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
