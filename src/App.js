
import './App.css';
import Header  from './Components/Header/Header';
import ListaPlatos from './Components/ListaPlatos/ListaPlatos';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Header/>
        <div>
        <BrowserRouter>
          <Routes>
            <Route path = "/" element={<Menu/>}/>
            <Route path = "/Platos" element={<ListaPlatos/>}/>
          </Routes>
        </BrowserRouter>
        </div>
      
    </div>
  );
}

export default App;
