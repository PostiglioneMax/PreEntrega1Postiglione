import { Button, Card, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import Swal from "sweetalert2";

const Formulario = (products) => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");

    const db = getFirestore();
    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
        console.log(orderId);
    };

    const order = {
        cliente: { nombre, email },
        items: { ...{ orderId }, products },
    };
    const ordersCollection = collection(db, "orden");
    // --
    const handleSwal = () => {
        Swal.fire({
            title: "Orden confirmada",
            text: "Verifica tu Email con los detalles de la orden",
            icon: "success",
        });
    };

    Swal.isVisible(false);

    return (
        <div>
            <Card w="400px" h="400px" padding="20px">
                <form action="" onSubmit={handleSubmit}>
                    <FormControl onSubmit={handleSubmit} isRequired>
                        <FormLabel>Nombre</FormLabel>
                        <Input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                        <FormLabel>Email</FormLabel>
                        <Input type="text" placeholder="Mail" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </FormControl>
                    <Button onClick={handleSwal} marginTop="10px" type="submit">
                        {" "}
                        Enviar{" "}
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default Formulario;
