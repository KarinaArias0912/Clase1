
import React from 'react';
import sampleImage from './fotos/logo192.png';
import estilos from "./estilos.css";
import ItemCount from './ItemCount';
import ProductDetail from './ProductDetail';

const ProductRow = () => {

  return (

    <div className="row product">
      <div className="col-md-2">
      </div>
      <div className="col-md-8 product-detail">
        <ProductDetail/>
        <ItemCount/>
      </div>
      <div className="col-md-2 product-price">
        $19.99
      </div>
      <div className="col-md-2">
      </div>
      <div className="col-md-8 product-detail">
        <ProductDetail/>
        <ItemCount/>
      </div>
      <div className="col-md-2 product-price">
        $19.99
      </div>
    </div>
  );
}

export default ProductRow;