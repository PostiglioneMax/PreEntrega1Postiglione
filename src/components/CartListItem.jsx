import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { useParams } from "react-router-dom";
import { Center, Flex, Select, Square } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartListItem = ({ product }) => {
    const { addProduct, setCart, cart, removeProduct } = useContext(CartContext);
    const handleChange = (event) => {
        const quantity = event.target.value;
        addProduct({ ...product, quantity });
    };

    const deleteProduct = () => {
        removeProduct(product.id);
    };

    return (
        <Flex padding="40px" margin="0px" w="100vw" h="auto" justifyContent="space-between" alignItems="center" color="Black">
            <Center w="100px" bg="green.500">
                <h3>{product.titulo}</h3>
            </Center>
            <Square bg="blue.500" size="150px">
                <p>Precio: ${product.precio}</p>
            </Square>
            <Select w="100px" onChange={handleChange} value={product.quantity} placeholder="Cantidad" name="Cantidad" id="">
                <option value={1}> 1 </option>
                <option value={2}> 2 </option>
                <option value={3}> 3 </option>
                <option value={4}> 4 </option>
                <option value={5}> 5 </option>
                <option value={6}> 6 </option>
                <option value={7}> 7 </option>
                <option value={8}> 8 </option>
                <option value={9}> 9 </option>
            </Select>
            <button onClick={deleteProduct}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </Flex>
    );
};

export default CartListItem;
