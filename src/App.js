// import logo from './logo.svg';
import './App.scss';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {ResponsiveAppBar} from './components/Navbar/Navbar'
import { Container, Grid } from "@mui/material"


function App() {
  return (
    <div className='AppComponent'>
     <ResponsiveAppBar/>
     <Container maxWidth="xl">
     <ItemListContainer greeting="Bienvenidos"/>
     </Container>
    </div>
  );
}

export default App;
