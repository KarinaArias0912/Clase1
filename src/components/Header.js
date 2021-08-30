import NavBar from "./NavBar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import estilos from "./estilos.css";
import CartWidget from "./CartWidget.js";
import { NavLink, Link, BrowserRouter } from 'react-router-dom';


function Header (){

    return(
        <BrowserRouter>
            <header>
                <Link to="/Home.js"><h1 className="titulo">Zero Waste Store</h1></Link>
                <NavBar/>
                <Link to="/itemCount.js"><CartWidget/></Link>
                <hr></hr>
            </header>
        </BrowserRouter>
    );
}

export default Header 