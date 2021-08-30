import "bootstrap/dist/css/bootstrap.min.css";
import estilos from "./estilos.css";
import { BrowserRouter, NavLink, Router, Switch } from "react-router-dom";


function NavBar(){
    return(
        <BrowserRouter>
            <Switch>
            <nav className="nav justify-content-center navbar navbar-light">
                <NavLink to="/Shop/1" className="nav-link active">Cocina</NavLink>
                <NavLink to="/Shop/2" className="nav-link active">Cuidado Personal</NavLink>
                <NavLink to="/Shop/3" className="nav-link active">Limpieza</NavLink>
                <NavLink to="/Shop/4" className="nav-link active">Accesorios</NavLink>
                <hr></hr>
            </nav>
            </Switch>
        </BrowserRouter>
    );
}


export default NavBar 