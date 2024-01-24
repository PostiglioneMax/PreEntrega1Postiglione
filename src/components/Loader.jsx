import React from "react";
import { Container, Spinner } from "@chakra-ui/react";

const Loader = () => {
    return (
        <Container maxW="2xl" centerContent marginTop="400px">
            <Spinner thickness="4px" speed="0.65s" emptyColor="black" color="gray.300" size="xl" />
        </Container>
    );
};

export default Loader;
