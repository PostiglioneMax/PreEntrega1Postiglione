import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const CartListItem = ({ product }) => {
    const { addProduct } = useContext(CartContext);
    const handleChange = (event) => {
        const quantity = event.target.value;
        addProduct({ ...product, quantity });
    };
    return (
        <div>
            <h3>{product.titulo}</h3>
            <p>Precio: ${product.precio}</p>
            <p> {product.descripcion} </p>
            <select onChange={handleChange} value={product.quantity} name="" id="">
                <option value={1}> 1 </option>
                <option value={2}> 2 </option>
                <option value={3}> 3 </option>
                <option value={4}> 4 </option>
                <option value={5}> 5 </option>
                <option value={6}> 6 </option>
                <option value={7}> 7 </option>
                <option value={8}> 8 </option>
                <option value={9}> 9 </option>
            </select>
        </div>
    );
};

export default CartListItem;
