import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./components/ItemCount.js";

function App (){
    return (
        <>
            <Header></Header>
            <p className="textoParrafo">Tienda de Productos Eco-Friendly, Reutilizables y Reciclables</p>
            <p>Producto 1</p>
            <ItemCount/>
        </>
    );
}

export default App 