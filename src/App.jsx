import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
                <Route path="/producto/:id" element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
