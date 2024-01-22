import { collection, getDocs, where, query, setDoc, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firebase } from "../firebase";

export const useGetProducts = ({ categoriaId }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let _query;
        if (categoriaId) {
            _query = query(collection(firebase, "products"), where("categoriaId", "==", categoriaId));
        } else {
            _query = collection(firebase, "products");
        }
        getDocs(_query)
            .then((snapshot) => {
                const docs = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setProducts(docs);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoriaId]);
    console.log("useGetProducts", products);
    return {
        products,
    };
};

export const useGetProduct = (productId) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const docRef = doc(firebase, "products", productId);
        getDoc(docRef).then((_doc) => {
            if (_doc.exists()) {
                console.log("Document data:", _doc.data());
                setProduct(_doc.data());
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }
        });
    }, [productId]);
    //console.log("useGetProducts", products);
    return {
        product,
    };
};
