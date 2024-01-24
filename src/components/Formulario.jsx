import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";

const Formulario = (products) => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");

    const db = getFirestore();
    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    };

    const order = {
        cliente: { nombre, email },
        items: { orderId, products },
    };
    const ordersCollection = collection(db, "orden");

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                <input type="text" placeholder="Mail" onChange={(e) => setEmail(e.target.value)} value={email} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Formulario;
