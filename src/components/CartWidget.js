import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import itemListContainer from "./ItemListContainer";
import estilos from "./estilos.css";

function CartWidget () {
    const [ItemCount, setItemCount] = React.useState(1);

    return(
        <div className="carritoContainer">
          <a href="itemListContainer.js"><ShoppingCartIcon />{" "}</a>
      </div>
    );
}

export default CartWidget 

