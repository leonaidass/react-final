import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from "@mui/material";
import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

export const Cart = () => {
  const { cart, deleteCart, totalCart,deleteItem } = useContext(CartContext);

  return (
    <div>
      <h2>tu compra</h2>
      <p>Detalle</p>
      <hr></hr>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.nombre}</h2>
          <p>cantidad: {item.cantidad}</p>
          <p>total: ${item.precio * item.cantidad}</p>
          
            <IconButton
              color="error"
              aria-label="delete"
              size="large"
              component="label"
              onClick={()=>{deleteItem(item.id)}}
            >
             
              <DeleteIcon fontSize="inherit" />
            </IconButton>
         
          <hr></hr>
        </div>
      ))}
      <h2>total: ${totalCart()}</h2>
      <Button variant="outlined" onClick={deleteCart} color="error">
        Vaciar Carrito
      </Button>
    </div>
  );
};
