import { Button, CardMedia } from "@mui/material"
import { width } from "@mui/system"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {getDataId} from "../../helpers/getDatos"
import { ItemCount } from "../ItemCount/ItemCount"
export const ItemDetailContainer = ()=>{
    const {itemId} = useParams()
    const [producto,setProducto]=useState(null)
    const [cantidad,setCantidad] =useState(1)
    console.log(itemId)
    useEffect(()=>{
        getDataId(Number(itemId))
        .then((res)=>setProducto(res))
        .catch((err)=>{console.log("error",err)})
       
    },[itemId])
         const atras =useNavigate()
         const volver=()=>{
            atras(-1)
         }
         const handleAgregar = ()=>{
            console.log({
              
                ...producto,
                cantidad
            }
            );
         } 
    return(
        
        <div>
            <h2>Detalle { producto && producto.nombre}</h2>
            { producto &&
            <CardMedia  sx={{ height: 300, width:300 }} image={producto.image}/>     
           

            }
            
            {producto && <ItemCount max={producto.stock} setCantidad={setCantidad} cantidad={cantidad}></ItemCount>}
            <Button onClick={volver}> volver</Button>
            <button onClick={handleAgregar}>canidad</button>
        </div>
    )
}