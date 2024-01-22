import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([
        { id: 1, titulo: "Producto A", descripcion: "descripcion de producto A", precio: 1000, categoria: "A", quantity: 5 },
        { id: 2, titulo: "Producto B", descripcion: "descripcion de producto B", precio: 2000, categoria: "A", quantity: 2 },
    ]);
    const addProduct = (producto) => {
        console.log(producto);
        const filteredCart = cart.filter((product) => {
            return producto.id !== product.id;
        });
        const newCart = [...filteredCart, producto];
        setCart(newCart);
        console.log(newCart);
    };

    const handleAddToCart = (productToAdd) => {
        addProduct(productToAdd);
    };

    const clearCart = () => setCart([]);

    const isInCart = (id) => (cart.find((producto) => producto.id === id) ? true : false);

    const removeProduct = (id) => setCart(cart.filter((producto) => producto.id !== id));

    return <CartContext.Provider value={{ cart, setCart, clearCart, isInCart, removeProduct, addProduct, handleAddToCart }}>{children}</CartContext.Provider>;
};
export default ShoppingCartProvider;
