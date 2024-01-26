import { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Card, Stack, Heading, CardBody, Text, CardFooter, Divider, ButtonGroup, Button, Flex, Image } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import Item from "./Item";

const ItemDetail = ({ producto, data }) => {
    console.log(producto);
    const { productoId } = useParams();
    const [goToCart, setGoToCart] = useState(false);
    const { addProduct, cart } = useContext(CartContext);

    return (
        <div>
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
                        <Image w="300px" h="300px" src={producto.imagensita} alt="Clothing" borderRadius="lg" />
                        <Stack display="flex" flexDirection="column" mt="6" spacing="3" justifyContent="center" alignItems="center">
                            <Heading size="md">{producto.titulo}</Heading>
                            <Text textAlign="center" fontSize="15px" fontWeight="bold">
                                $ {producto.precio}
                            </Text>
                        </Stack>
                    </Flex>
                </CardBody>

                <Flex alignItems="center" justifyContent="center" bg="gray.100">
                    <CardFooter>
                        <ButtonGroup spacing="2">
                            {goToCart ? (
                                <Link to="/cart">
                                    <Button
                                        bgColor="white"
                                        color="red.600"
                                        border="1px solid red"
                                        borderRadius="2rem"
                                        _hover={{
                                            bg: "white",
                                            color: "red",
                                            border: "1px solid red",
                                            transform: "scale(1.1)",
                                        }}
                                        _active={{
                                            bg: "white",
                                            color: "red",
                                            transform: "scale(1.5)",
                                            borderColor: "red",
                                        }}
                                    >
                                        Terminar Compra
                                    </Button>
                                </Link>
                            ) : (
                                <ItemCount initial={1} product={producto} onAdd={setGoToCart} />
                            )}
                        </ButtonGroup>
                    </CardFooter>
                </Flex>
            </Card>
        </div>
    );
};

export default ItemDetail;
