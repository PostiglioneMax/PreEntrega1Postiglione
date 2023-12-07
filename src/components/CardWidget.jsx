import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Text } from "@chakra-ui/react";

const CardWidget = () => {
    return (
        <div>
            <Text color="white">
                <FontAwesomeIcon icon={faCartShopping} color="white" /> 0
            </Text>
        </div>
    );
};

export default CardWidget;
