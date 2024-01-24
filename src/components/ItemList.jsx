import React from "react";
import Item from "./Item";
import { Grid, SimpleGrid } from "@chakra-ui/react";

const ItemList = ({ productos }) => {
    return (
        <SimpleGrid margin="30px" columns={4} spacing={10} minChildWidth="300px" bg="gray.900">
            {productos.map((p) => {
                return <Item key={p.id} titulo={p.titulo} descripcion={p.descripcion} precio={p.precio} id={p.id} imagensita={p.imagensita} />;
            })}
        </SimpleGrid>
    );
};

export default ItemList;
