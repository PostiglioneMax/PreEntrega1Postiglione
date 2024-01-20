import { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Card, Stack, Heading, CardBody, Text, CardFooter, Divider, ButtonGroup, Button } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import Item from "./Item";

const ItemDetail = ({ producto, data }) => {
    const { productoId } = useParams();
    const [goToCart, setGoToCart] = useState(false);
    const { addProduct, cart } = useContext(CartContext);

    //    const handleAddToCart = (quantity) => {
    //        const productQuantity = { ...producto, quantity: quantity };
    //        addProduct(productQuantity);
    //        setGoToCart(true);
    //        console.log(productQuantity);
    //    };

    return (
        <div>
            <Card maxW="sm">
                <CardBody>
                    <Stack mt="6" spacing="3">
                        <Heading size="md"> {producto.titulo} </Heading>
                        <Text>{producto.descripcion}</Text>
                        <Text color="blue.600" fontSize="2x1">
                            {producto.precio}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing="2">{goToCart ? <Link to="/cart">Terminar Compra</Link> : <ItemCount initial={1} product={producto} onAdd={setGoToCart} />}</ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ItemDetail;
