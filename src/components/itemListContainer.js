import "bootstrap/dist/css/bootstrap.min.css";
import estilos from "./estilos.css";
import Header from "./Header.js";
import NavBar from "./NavBar.js";

function itemListContainer(){
    return(
        <>
        <Header/>
        <NavBar/>
        <h3>Mi Carrito</h3>
        </>
    );
}

export default itemListContainer 