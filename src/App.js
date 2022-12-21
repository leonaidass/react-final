// import logo from './logo.svg';
import './App.scss';
import { ItemListContainer } from './components/Navbar/ItemListContainer/ItemListContainer';
import {ResponsiveAppBar} from './components/Navbar/Navbar'

function App() {
  return (
    <div className='AppComponent'>
     <ResponsiveAppBar/>
     <ItemListContainer greeting="Bienvenidos"/>
    </div>
  );
}

export default App;
