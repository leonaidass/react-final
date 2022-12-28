import { useEffect, useState } from "react"
import { getData } from "../../helpers/getDatos"
export const ItemListContainer = ({greeting})=>{
    
    const [dataStock,setDataStock]=useState([])
    console.log("primero",dataStock)
    useEffect(()=>{getData().then((res)=>{setDataStock(res)})},[])
    
    console.log("segundo",dataStock)

    return(
        <div>{
            
            dataStock.map((elem)=>(<div key={elem.id} ><h2>{elem.nombre}</h2></div>))
        }</div>
    )
}