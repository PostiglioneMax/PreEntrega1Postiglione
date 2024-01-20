import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import CartList from "./CartList";

const Cart = () => {
    const { cart } = useContext(CartContext);
    return (
        <div>
            Terminar Compra
            <CartList products={cart}></CartList>
        </div>
    );
};

export default Cart;
