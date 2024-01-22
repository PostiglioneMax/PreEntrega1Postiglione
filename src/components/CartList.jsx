import React from "react";
import CartListItem from "./CartListItem";
import { useState, useEffect } from "react";
import Formulario from "./Formulario";

const CartList = ({ products, resetCart }) => {
    const [goToForm, setGoToForm] = useState(false);
    const handlePayout = () => setGoToForm(true);
    const newTotalPrice = products.reduce((acc, product) => {
        return acc + product.precio * product.quantity;
    }, 0);

    return (
        <div>
            {!goToForm && products.map((product) => <CartListItem key={product.id} product={product} />)}
            Precio total: {newTotalPrice}
            <button onClick={resetCart}> Clear </button>
            <button onClick={handlePayout}> Payout </button>
            {goToForm && <Formulario />}
        </div>
    );
};

export default CartList;
