import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import CartList from "./CartList";

const Cart = () => {
    const { cart, clearCart } = useContext(CartContext);
    const emptyCart = cart.length === 0;
    return <div>{emptyCart ? "No tenes productos ;C" : <CartList products={cart} resetCart={clearCart}></CartList>}</div>;
};

export default Cart;
