import { Button, } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDataId } from "../../helpers/getDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  
  
  useEffect(() => {
    getDataId(Number(itemId))
      .then((res) => setProducto(res))
      .catch((err) => {
        console.log("error", err);
      });
  }, [itemId]);
  const atras = useNavigate();
  const volver = () => {
    atras(-1);
  };
  ;
  return (
    <div>
      <h2>Detalle {producto && producto.nombre}</h2>
      {
        producto && 
        <ItemDetail {...producto}/>
      }
                 
      {
        producto &&(
         <Button onClick={volver}> volver</Button>

        )
      }
     
      
    </div>
  );
};
