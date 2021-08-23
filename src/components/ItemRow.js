
import React from 'react';
import sampleImage from './fotos/logo192.png';
import estilos from "./estilos.css";
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail';

const ItemRow = () => {

  return (

    <div className="row product">
      <div className="col-md-2">
      </div>
      <div className="col-md-8 product-detail">
        <ItemDetail/>
        <ItemCount/>
      </div>
      <div className="col-md-2 product-price">
      </div>
      <div className="col-md-2">
      </div>
      <div className="col-md-8 product-detail">
        <ItemDetail/>
        <ItemCount/>
      </div>
      <div className="col-md-2 product-price">
      </div>
    </div>
  );
}

export default ItemRow;