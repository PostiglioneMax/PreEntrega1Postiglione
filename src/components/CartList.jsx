import React from "react";
import CartListItem from "./CartListItem";
import { useState, useEffect } from "react";
import Formulario from "./Formulario";
import Cart from "./Cart";
import { Box, Flex, Spacer } from "@chakra-ui/react";

const CartList = ({ products, resetCart }) => {
    const [goToForm, setGoToForm] = useState(false);
    const handlePayout = () => setGoToForm(true);
    const newTotalPrice = products.reduce((acc, product) => {
        return acc + product.precio * product.quantity;
    }, 0);

    return (
        <div>
            {!goToForm && products.map((product) => <CartListItem key={product.id} product={product} />)}

            <Flex>
                <Box p="4" bg="red.400">
                    Box 1
                </Box>
                <Spacer />
                <Box p="4" bg="red.400">
                    <button onClick={resetCart}> Clear </button>
                </Box>
                <Box p="4" bg="red.400">
                    Precio total: {newTotalPrice}
                </Box>
                <Box p="4" bg="green.400">
                    <button onClick={handlePayout}> Payout </button>
                </Box>
            </Flex>
            {goToForm && <Formulario products={products} />}
        </div>
    );
};

export default CartList;
