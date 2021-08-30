
import React, { Component, useEffect, useState } from 'react';
import itemRow from './ItemRow';
import estilos from "./estilos.css";
import ItemCount from './ItemCount';
import Item from "./Item";
import p from "./productos.js"

export default function ItemList({ categoryId }) {
    const [products, setProducts] = useState([]);

    function formatProduct(data) {
        let product = data.data();
        product.id = data.id;

        return (
            <div
                key={`${product.id}`}
                className='col-xs-6 col-sm-5 col-lg-3 m-sm-3 m-md-3 border'
            >
                <Item
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    pictureURL={product.imagesURL}
                    categoryId={product.categoryId}
                />
            </div>
        );
    }
    async function serverRequest() {
        const itemCollection = p.collection('items');
        itemCollection
            .where('categoryId', '==', Number(categoryId))
            .get()
            .then((data) => {
                let products = [];
                data.forEach((doc) => {
                    products = [...products, formatProduct(doc)];
                });
                setProducts(products);
            })
            .catch((err) => {
                throw new Error(`Error de obtención de datos de bd:\n\n${err}`);
            });
    }

    useEffect(() => {
        serverRequest();
    }, [categoryId]);

    return (
        <div className='container px-5 px-sm-0'>
            <div className='row align-items-center justify-content-center px-5 px-sm-0 gy-5 gy-sm-0'>
                {products}
            </div>
        </div>
    );
}