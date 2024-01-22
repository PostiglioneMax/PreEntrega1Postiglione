import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartContext";

const CardWidget = () => {
    const { cart } = useContext(CartContext);

    const totalProducts = cart.reduce((acc, { quantity }) => {
        return acc + quantity;
    }, 0);
    return (
        <div>
            <Text color="white">
                <Link to={"/cart"}>
                    <FontAwesomeIcon icon={faCartShopping} color="white" /> {totalProducts}
                </Link>
            </Text>
        </div>
    );
};

export default CardWidget;
