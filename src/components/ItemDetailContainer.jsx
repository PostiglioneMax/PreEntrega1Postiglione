import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, getFirestore, doc } from "firebase/firestore";
import { useGetProduct } from "../hooks/useProduct";
import Loader from "./Loader";
import { Center, Container, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const { product } = useGetProduct(id);

    if (!product) {
        return <Loader />;
    }

    return (
        <>
            <VStack flexDirection="none" p="0px 0px" m="0px 0px" gap="0px">
                <Container p="0px" m="0px" maxW="auto" h="450px" bg="gray.900" color="white" backgroundImage="https://firebasestorage.googleapis.com/v0/b/testing2-ddfc5.appspot.com/o/testBannerGray1Bottom.png?alt=media&token=7eca46dc-e300-47cc-a81f-fd2df8c339d7" backgroundPosition="center" backgroundRepeat="no-repeat">
                    <Center bg="" h="450px" color="white">
                        <Image w="300px" h="300px" src="https://firebasestorage.googleapis.com/v0/b/testing2-ddfc5.appspot.com/o/posingBeach3.jpg?alt=media&token=e8f966d9-758c-424d-b4b4-898eafd1a5b4" alt="Clothing" borderRadius="lg" />
                    </Center>
                </Container>
                <Container p="0px 0px" m="0px 0px" maxW="auto" h="450px" bg="gray.900" color="white" backgroundImage="https://firebasestorage.googleapis.com/v0/b/testing2-ddfc5.appspot.com/o/testBannerMid2.png?alt=media&token=baf3f91a-5bd6-41e9-888d-4af04d21997a" backgroundPosition="center" backgroundRepeat="no-repeat">
                    <Center bg="" h="450px" color="white" flexDirection="column">
                        <Image w="150px" h="150px" src="https://firebasestorage.googleapis.com/v0/b/testing2-ddfc5.appspot.com/o/LOGO%202222.jpeg?alt=media&token=d38c2235-08dc-4d56-8cea-38fa76d94235" alt="Clothing" borderRadius="full" />

                        <Heading> "More than a Brand</Heading>
                        <Heading> we are a Mindset"</Heading>
                    </Center>
                </Container>
                <Container p="0px" m="0px" maxW="0px" h="450px" bg="gray.900" color="white" backgroundImage="https://firebasestorage.googleapis.com/v0/b/testing2-ddfc5.appspot.com/o/testBannerGray3Top.png?alt=media&token=8261c73e-ebb7-4db4-a03b-417344b5ce34" backgroundPosition="center" backgroundRepeat="no-repeat"></Container>
            </VStack>
            <SimpleGrid display="grid" justifyContent="center" bg="gray.900" padding="200px" border="5px solid #171923">
                <ItemDetail producto={product} />
            </SimpleGrid>
        </>
    );
};

export default ItemDetailContainer;
