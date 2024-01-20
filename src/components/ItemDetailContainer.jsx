import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { id } = useParams();

    const productos = [
        { id: 1, titulo: "Producto A", descripcion: "descripcion de producto A", precio: 1000, categoria: "A" },
        { id: 2, titulo: "Producto B", descripcion: "descripcion de producto B", precio: 2000, categoria: "A" },
        { id: 3, titulo: "Producto C", descripcion: "descripcion de producto C", precio: 2000, categoria: "A" },
        { id: 4, titulo: "Producto D", descripcion: "descripcion de producto D", precio: 1000, categoria: "B" },
        { id: 5, titulo: "Producto E", descripcion: "descripcion de producto E", precio: 5000, categoria: "B" },
        { id: 6, titulo: "Producto F", descripcion: "descripcion de producto F", precio: 2000, categoria: "C" },
        { id: 7, titulo: "Producto G", descripcion: "descripcion de producto G", precio: 6000, categoria: "C" },
        { id: 8, titulo: "Producto H", descripcion: "descripcion de producto H", precio: 2000, categoria: "C" },
        { id: 9, titulo: "Producto I", descripcion: "descripcion de producto I", precio: 7000, categoria: "C" },
        { id: 10, titulo: "Producto J", descripcion: "descripcion de producto J", precio: 1000, categoria: "C" },
    ];

    const mostrarProductos = new Promise((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos);
            }, 3000);
        } else {
            reject("No se obtuvieron productos");
        }
    });

    mostrarProductos
        .then((resultado) => {
            //console.log(resultado);
        })
        .catch((error) => {
            console.log(error);
        });

    const productoFiltrado = productos.find((producto) => producto.id == id);

    return (
        <div>
            <ItemDetail producto={productoFiltrado} data={productos} />
        </div>
    );
};

export default ItemDetailContainer;
