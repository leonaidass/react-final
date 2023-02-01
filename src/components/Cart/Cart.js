import { useContext } from "react";

import { CartContext } from "../../context/CartContext";


export const Cart = ()=>{
    const {cart} = useContext(CartContext);
    console.log("desde el log",cart);
    return (
        <div>
        <h2>tu compra</h2>
            {
              cart.map(elem=>{
               (<div key={elem.id}>
               <h1>{elem.nombre}</h1>
               </div>)
              })
            }
        </div>
    )
}