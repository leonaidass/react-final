// import logo from './logo.svg';
import "./App.scss";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ResponsiveAppBar } from "./components/Navbar/Navbar";
import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Nosotros } from "./components/Nosotros/Nosotros";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Contacto } from "./components/Contacto/Contacto";
import { CartContext } from "./context/CartContext";
import { useState } from "react";
import { Cart } from "./components/Cart/Cart";

function App() {
  const [cart, setCart] = useState([]);
  console.log("carrito",cart);
  const agragarCarrito= (item)=>{
    setCart([...cart,item])
  }
  const isInCart = (id)=>{
    return cart.some((elem)=>elem.id === id)
  }
 
  return (
    <CartContext.Provider value={{cart,agragarCarrito,isInCart}}>
    <BrowserRouter>
      <ResponsiveAppBar />
      <Container maxWidth="lg">
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenidos" />}
          />
          <Route
           path="/nosotros"
           element={<Nosotros />} />
           <Route
           path="/*"
           element={<Navigate to={"/"}/>} />
           <Route
           path="/productos/:categoryId"
           element={<ItemListContainer greeting="Bienvenidos" />} />
           <Route
           path="/detalle/:itemId"
           element={<ItemDetailContainer/>} />
           <Route
            path="/contacto"
            element={<Contacto/>}
           />
           <Route
            path="/carrito"
            element={<Cart/>}
           />
        </Routes>
      </Container>
    </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
