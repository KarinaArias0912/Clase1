import NavBar from "./NavBar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import estilos from "./estilos.css";
import CartWidget from "./CartWidget.js";

function Header (){

    return(
        <header>
            <h1 className="titulo">Zero Waste Store</h1>
            <NavBar/>
            <button type="button" className="btn btn-dark">Carrito</button>
            <hr></hr>
        </header>
    );
}

export default Header 