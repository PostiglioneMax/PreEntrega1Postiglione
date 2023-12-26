import React from "react";
import { Card, Stack, Heading, CardBody, Text, CardFooter, Divider, ButtonGroup } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
    const { productoId } = useParams();
    console.log(productoId);

    return (
        <div>
            <Card maxW="sm">
                <CardBody>
                    <Stack mt="6" spacing="3">
                        <Heading size="md"> {producto.titulo} </Heading>
                        <Text>{producto.descripcion}</Text>
                        <Text color="blue.600" fontsize="2x1">
                            {producto.precio}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing="2">
                        <ItemCount />
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ItemDetail;
