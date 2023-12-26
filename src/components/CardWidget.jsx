import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CardWidget = () => {
    return (
        <div>
            <Text color="white">
                <Link to={"/cart"}>
                    <FontAwesomeIcon icon={faCartShopping} color="white" /> 0
                </Link>
            </Text>
        </div>
    );
};

export default CardWidget;
