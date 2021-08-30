import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./components/ItemCount.js";
import ItemList from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail.js";
import Cart from "./components/context/Cart";
import CustomCartProvider from "./components/context/CustomCartProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App (){
    return (
                
                <CustomCartProvider>
                    <Header></Header>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route
                            exact
                            path='/Shop/:CategoryId'
                            component={Shop}
                        />
                        <Route
                            exact
                            path='/Shop/:CategoryId/:ItemId'
                            component={ItemDetail}
                        />
                        <Route exact path='/Cart' component={Cart} />
                    </Switch>
                </CustomCartProvider>
    );
}

export default App 