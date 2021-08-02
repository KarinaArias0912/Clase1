import "bootstrap/dist/css/bootstrap.min.css";
import estilos from "./estilos.css";
import Header from "./Header.js";
import NavBar from "./NavBar.js";
import CartWidget from "./CartWidget";

function itemListContainer(){
    return(
        <>
        <Header/>
        <NavBar/>
        <div>
            <h3>Mi Carrito</h3>
            <p>Lista de Compras:</p>
        </div>
        </>
    );
}

export default itemListContainer 