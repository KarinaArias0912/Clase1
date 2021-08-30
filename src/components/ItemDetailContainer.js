import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

  const onAdd = (cantidad) => {
    console.log(`Has agregado al carrito ${cantidad} productos`) }

    const [items, setItems] = useState([])
    const id = useParams();
    console.log(id);
    
    useEffect(()=>{
      
      const promesa = getItem()
        promesa.then(json=> {
            setItems(json)
        })
    }, [id])
  
      const getItem = () => {
  
  
          const promesa = new Promise ((res, rej) => {
            setTimeout(() => {
    
              if(id.id) {
                res(items.filter(items => items.id == id.id))}
                
            }, 2000)
          })
        return promesa;
      }
  
    return (
    <>
       <div className="container">
            {items.map(producto=> {
            return <ItemDetail key={items.id} producto={items} stock={10} initial={1} onAdd={onAdd}/>})}
        </div>
    </>)    
    }
  

export default ItemDetailContainer