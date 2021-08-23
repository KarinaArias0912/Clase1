
import {useState} from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ItemListContainer from "./ItemListContainer";

function ItemCount(){

    const [contador, setItemCount] = useState(0);
    const sumaContador = () =>{
        setItemCount(contador + 1)
    }
    const restaContador = () =>{
        setItemCount(contador - 1)
    }

    return(
        <>
        <p className="subTitulo">{contador}</p>
        <button type="button" className="btn btn-light">Agregar al Carrito</button>
        <button type="button" className="btn btn-light" onClick={sumaContador}>+</button>
        <button type="button" className="btn btn-light" onClick={restaContador}>-</button>
        </>
    );
}

export default ItemCount 