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
            <Button
                margin="10px"
                borderRadius="2rem"
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
                onClick={sumar}
            >
                +
            </Button>
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
                onClick={handleAdd}
            >
                Agregar al carrito {contador}{" "}
            </Button>
            <Button
                margin="10px"
                borderRadius="2rem"
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
                    transform: "scale(1.2)",
                    borderColor: "red",
                }}
                onClick={restar}
            >
                -
            </Button>
        </div>
    );
};

export default ItemCount;
