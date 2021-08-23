import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import estilos from "./estilos.css";
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";
import {useParams} from "react-router-dom";
import {p} from "./productos";

const ItemListContainer = () =>{

    
    const [items, setItems] = useState([])
    const params = useParams()
  
    useEffect(()=>{
    
        const promesa = getItem()
        promesa.then(json=> {
          setItems(json)
        })
      }, [params.categoria])
    
        const getItem = () => {
    
    
            const promesa = new Promise ((res, rej) => {
                setTimeout(() => {
        
                if(params.categoria) {
                    res(p.filter(items => items.cantidad == params.cantidad))
                } else {
                    res(p)
                }
        
                }, 2000)
            })
            return promesa;
        }
    
    
      return (
        <div>
          <ItemList items={items}/>
        </div>
      )
    }
    
  
  export default ItemListContainer;