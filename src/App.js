// import logo from './logo.svg';
import "./App.scss";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ResponsiveAppBar } from "./components/Navbar/Navbar";
import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Nosotros } from "./components/Nosotros/Nosotros";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
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
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
