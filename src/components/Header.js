import NavBar from "./NavBar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import estilos from "./estilos.css";
import CartWidget from "./CartWidget.js";

function Header (){

    return(
        <header>
            <a href="App.js"><h1 className="titulo">Zero Waste Store</h1></a>
            <NavBar/>
            <CartWidget/>
            <hr></hr>
        </header>
    );
}

export default Header 