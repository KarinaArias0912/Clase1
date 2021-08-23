import React, { Component } from 'react';
import { useContext } from "react"
import ItemCount from "./ItemCount"
import estilos from "./estilos.css";

const ItemDetail = ({ item }) => {

  const {addItem} = useContext()

  const onAdd = (cantidad) => {

      const item_para_agregar = {
          item : item ,
          quantity : cantidad
      }

      addItem(item_para_agregar)
  }

  return (
      <article className="item">
          <h3>{item.title} - ${item.price}</h3>
          <img src={item.pictureUrl} alt="thumbnail" />
          <p>{item.description}</p>
          <ItemCount stock={item.stock} initial={item.stock >= 1 ? 1 : 0} onAdd={onAdd}/>
      </article>
  );
}

export default ItemDetail;