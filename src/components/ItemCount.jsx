import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Button } from "@chakra-ui/react";
import Cart from "./Cart";

const ItemCount = ({ initial, product, onAdd }) => {
    const { handleAddToCart } = useContext(CartContext);
    const [contador, setContador] = useState(initial);

    const sumar = () => {
        if (contador < 10) {
            setContador(contador + 1);
        }
    };

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };

    const handleAdd = () => {
        const productToAdd = { ...product, quantity: contador };
        handleAddToCart(productToAdd);
        onAdd(true);
    };

    return (
        <div>
            <Button colorScheme="teal" size="xs" onClick={sumar}>
                +
            </Button>
            <Button onClick={handleAdd}>Agregar al carrito {contador} </Button>
            <Button colorScheme="teal" size="xs" onClick={restar}>
                -
            </Button>
        </div>
    );
};

export default ItemCount;
