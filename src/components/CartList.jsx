import React from "react";
import CartListItem from "./CartListItem";
import { useState, useEffect } from "react";
import Formulario from "./Formulario";
import Cart from "./Cart";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CartList = ({ products, resetCart }) => {
    const [goToForm, setGoToForm] = useState(false);
    const handlePayout = () => setGoToForm(true);
    const newTotalPrice = products.reduce((acc, product) => {
        return acc + product.precio * product.quantity;
    }, 0);

    return (
        <div>
            {!goToForm &&
                products.map((product) => (
                    <Flex background="gray.300" justifyContent="center" alignItems="center" margin="0px" p="0px" border="1px solid black" borderRadius="2rem">
                        <CartListItem key={product.id} product={product} />
                    </Flex>
                ))}

            <Flex>
                <Box p="4">
                    <Link to={"/"}>
                        <Button> Seguir comprando </Button>
                    </Link>
                </Box>
                <Spacer />
                <Box p="4">
                    <Button onClick={resetCart}> Clear </Button>
                </Box>
                <Box p="4" display="flex" alignItems="center" justifyContent="center">
                    Precio total: {newTotalPrice}
                </Box>
                <Box p="4">
                    <Button onClick={handlePayout}> Payout </Button>
                </Box>
            </Flex>
            {goToForm && (
                <Flex justifyContent="center">
                    <Formulario products={products} />
                </Flex>
            )}
        </div>
    );
};

export default CartList;
