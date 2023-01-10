import { useEffect, useState } from "react"
import { getData } from "../../helpers/getDatos"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = ({greeting})=>{
    
    const [dataStock,setDataStock]=useState([])
    
    useEffect(()=>{getData().then((res)=>{setDataStock(res)})},[])
    
    

    return(
           
              <ItemList productos={dataStock}/>

           
           
            
       
         
       
       
    )
}