import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import CartList from "./CartList";
import Swal from "sweetalert2";
import { Center, Flex } from "@chakra-ui/react";

const Cart = () => {
    const { cart, clearCart } = useContext(CartContext);
    const emptyCart = cart.length === 0;
    return (
        <div>
            {emptyCart ? (
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Parece que aun no agregaste productos a tu carrito",
                    showConfirmButton: false,
                    footer: '<a href="/">¿Que estas esperando? Añadelos</a>',
                })
            ) : (
                <Flex justifyContent="center" padding="0px" m="20px">
                    <CartList products={cart} resetCart={clearCart}></CartList>
                </Flex>
            )}
        </div>
    );
};

export default Cart;
