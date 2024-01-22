import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, getFirestore, doc } from "firebase/firestore";
import { useGetProduct } from "../hooks/useProduct";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const { product } = useGetProduct(id);

    if (!product) {
        console.log(product);
        return <div> Loading... </div>;
    }

    return (
        <div>
            <ItemDetail producto={product} />
        </div>
    );
};

export default ItemDetailContainer;
