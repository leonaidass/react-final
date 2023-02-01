import { Button, CardMedia } from "@mui/material"
import { ItemCount } from "../ItemCount/ItemCount"
import { useContext,useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";



export const ItemDetail = ({categoria,id,descripcion,image,nombre,precio,stock})=>{
    const [cantidad, setCantidad] = useState(1);
    const {cart, agragarCarrito,isInCart} = useContext(CartContext)

    const handleAgregar = () => { 
        const item = {
          categoria,
          id,
          descripcion,
          image,
          nombre,
          precio,
          stock,
          cantidad
        }
        console.log("revisar",isInCart(id));
        agragarCarrito(item)
      }
    return (
        <div>
            <CardMedia sx={{ height: 300, width: 300 }} image={image}/>
            { !isInCart(id)?
            <ItemCount
                max={stock}
                setCantidad={setCantidad}
                cantidad={cantidad}
                onAdd={handleAgregar}
            />:<Link to='/carrito'>Terminar Compra</Link>
                
            }
        </div>
        
    )
}