import { Button, CardMedia } from "@mui/material"
import { width } from "@mui/system"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {getDataId} from "../../helpers/getDatos"
export const ItemDetailContainer = ()=>{
    const {itemId} = useParams()
    const [producto,setProducto]=useState(null)
    console.log(itemId)
    useEffect(()=>{
        getDataId(Number(itemId)).then((res)=>setProducto(res)).catch((err)=>{console.log("error",err)})
       
    },[itemId])
         const atras =useNavigate()
         const volver=()=>{
            atras(-1)
         }
    return(
        
        <div>
            <h2>Detalle { producto && producto.nombre}</h2>
            { producto &&
            <CardMedia  sx={{ height: 300, width:300 }} image={producto.image}/>
            

            }
            <Button onClick={volver}> volver</Button>
            
        </div>
    )
}