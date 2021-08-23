import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./components/ItemCount.js";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App (){
    return (
            <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route path="./components/ItemListContainer.js" component={ItemListContainer} exact />
                    <Route path="./components/ItemDetailContainer.js" component={ItemDetailContainer} exact/>
                    <Route path="./components/Cart.js" component={Cart} exact/>
                </Switch>
                    <p className="textoParrafo">Tienda de Productos Eco-Friendly, Reutilizables y Reciclables</p>
                <ItemListContainer/>
            </BrowserRouter>
    );
}

export default App 