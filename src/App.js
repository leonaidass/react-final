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

function App() {
  const nombreT ='leonardo'
  const apellido='Esquivel'
  return (
    <CartContext.Provider value={{nombreT,apellido}}>
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
        </Routes>
      </Container>
    </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
