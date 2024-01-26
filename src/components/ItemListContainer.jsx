import React from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useGetProducts } from "../hooks/useProduct";
import { Center, Container, Grid, Heading, Image, SimpleGrid, VStack, grid } from "@chakra-ui/react";
import Loader from "./Loader";

const ItemListContainer = ({}) => {
    const { categoriaId } = useParams();
    const { products } = useGetProducts({ categoriaId });
    const sortedProducts = products.toSorted(({ categoriaId: categoriaA }, { categoriaId: categoriaB }) => categoriaA.localeCompare(categoriaB));

    const isEmpty = products.length === 0;

    return (
        <>
            {isEmpty ? (
                <Loader />
            ) : (
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
                    <SimpleGrid display="grid" bg="gray.900" padding="50px">
                        <ItemList productos={sortedProducts} />
                    </SimpleGrid>
                </>
            )}
        </>
    );
};

export default ItemListContainer;

//    const [productos, setProductos] = useState([]);
//    useEffect(() => {
//        const db = getFirestore();
//
//        const itemsCollection = collection(db, "store");
//
//        getDocs(itemsCollection).then((snapshot) => {
//            const docs = snapshot.docs.map((doc) => doc.data());
//            setProductos(docs);
//        });
//    },);
//
//    const mostrarProductos = new Promise((resolve, reject) => {
//        if (productos.length >= 0) {
//            resolve(productos);
//        } else {
//            reject("No se obtuvieron productos");
//        }
//    });
//    mostrarProductos
//        .then((resultado) => {})
//        .catch((error) => {
//            console.log(error);
//        });
//
//    const productosFiltrados = productos.filter((producto) => producto.categoria == categoriaId);
