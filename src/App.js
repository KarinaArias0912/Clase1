import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./components/ItemCount.js";
import ProductList from "./components/ProductList";

function App (){
    return (
        <>
            <Header></Header>
            <p className="textoParrafo">Tienda de Productos Eco-Friendly, Reutilizables y Reciclables</p>
            <ProductList/>
        </>
    );
}

export default App 