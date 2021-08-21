
import React, { Component } from 'react';
import ProductRow from './ProductRow';
import estilos from "./estilos.css";

class ProductList extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container main-content">
        <ProductRow />
        <ProductRow />
      </div>
    );
  }
}

export default ProductList;