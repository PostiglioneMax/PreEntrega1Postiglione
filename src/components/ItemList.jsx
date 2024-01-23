import React from "react";
import Item from "./Item";
import { Grid, SimpleGrid } from "@chakra-ui/react";

const ItemList = ({ productos }) => {
    return (
        <Grid maxW="100vh" templateRows="repeat(2, 1fr)" bg="orange" gridGap="20px">
            {productos.map((p) => {
                return <Item key={p.id} titulo={p.titulo} descripcion={p.descripcion} precio={p.precio} id={p.id} imagensita={p.imagensita} />;
            })}
        </Grid>
    );
};

export default ItemList;
