import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Collection = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const db = getFirestore();

        const itemsCollection = collection(db, "Shirts");

        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data());
            setProductos(docs);
        });
    });
    return (
        <div>
            {productos.map((p) => {
                <div key={p.nombre}>
                    <h2> {p.nombre} </h2>
                    <h3> {p.nombre} </h3>
                </div>;
            })}
        </div>
    );
};

export default Collection;
