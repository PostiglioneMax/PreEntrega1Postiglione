import React from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useGetProducts } from "../hooks/useProduct";
import { Container, Grid, SimpleGrid } from "@chakra-ui/react";

const ItemListContainer = ({}) => {
    const { categoriaId } = useParams();
    const { products } = useGetProducts({ categoriaId });
    const sortedProducts = products.toSorted(({ categoriaId: categoriaA }, { categoriaId: categoriaB }) => categoriaA.localeCompare(categoriaB));

    const isEmpty = products.length === 0;

    return (
        <Container maxW="100vh" maxH="100vh">
            {isEmpty ? <h1>Quemaste todo</h1> : <ItemList productos={sortedProducts} />}
        </Container>
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
