import React from "react";
import { Center, Text } from "@chakra-ui/react";

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <Text align="center" fontSize="40">
                {greeting}{" "}
            </Text>
        </div>
    );
};

export default ItemListContainer;
