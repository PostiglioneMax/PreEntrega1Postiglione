import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { useParams } from "react-router-dom";
import { Center, Flex, Image, Select, Square } from "@chakra-ui/react";
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
        <Flex padding="30px" w="95vw" h="auto" justifyContent="space-between" alignItems="center" color="Black">
            <Square size="150px">
                <Image w="120px" h="120px" src={product.imagensita} alt="Clothing" borderRadius="lg" />
            </Square>
            <Square w="100px" display="flex" alignItems="center" justifyContent="center">
                <h3>{product.titulo}</h3>
            </Square>
            <Square size="150px">
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
