import { useEffect, useState } from "react";
import { getData } from "../../helpers/getDatos";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
    const {categoryId}=useParams()
    console.log(categoryId)
  const [dataStock, setDataStock] = useState([]);

  useEffect(() => {
    getData().then((res) => {
        if(categoryId){
            
            setDataStock(res.filter((prod)=>prod.categoria==categoryId));
        }else{
            setDataStock(res);
        }
    });
  }, [categoryId]);

  return <ItemList productos={dataStock} />;
};
