import { useEffect, useState } from "react"
import { getData } from "../../helpers/getDatos"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = ({greeting})=>{
    
    const [dataStock,setDataStock]=useState([])
    console.log("primero",dataStock)
    useEffect(()=>{getData().then((res)=>{setDataStock(res)})},[])
    
    console.log("segundo",dataStock)

    return(

        <ItemList productos={dataStock}/>
       
    )
}