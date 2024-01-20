import React from "react";
import CartListItem from "./CartListItem";
import { useState, useEffect } from "react";

const CartList = ({ products }) => {
    const newTotalPrice = products.reduce((acc, product) => {
        return acc + product.precio * product.quantity;
    }, 0);

    return (
        <div>
            {products.map((product) => (
                <CartListItem key={product.id} product={product} />
            ))}
            Precio total: {newTotalPrice}
        </div>
    );
};

export default CartList;
