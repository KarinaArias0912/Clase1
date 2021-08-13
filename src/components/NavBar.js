import "bootstrap/dist/css/bootstrap.min.css";
import estilos from "./estilos.css";


function NavBar(){
    return(
        <nav className="nav justify-content-center navbar navbar-light">
            <a className="nav-link active" href= "#">Cocina</a>
            <a className="nav-link active" href= "#">Cuidado Personal</a>
            <a className="nav-link active" href= "#">Limpieza</a>
            <a className="nav-link active" href= "#">Accesorios</a>
            <hr></hr>
        </nav>
    );
}


export default NavBar 