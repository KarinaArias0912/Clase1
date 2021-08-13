import "bootstrap/dist/css/bootstrap.min.css";
import estilos from "./estilos.css";
import Header from "./Header.js";
import NavBar from "./NavBar.js";
import CartWidget from "./CartWidget";

function itemListContainer(){
    return(
        <>
            <h3>Carrito de Compras</h3>
            <p>Lista de Compras: </p>
        </>
    );
}

export default itemListContainer 