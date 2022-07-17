
import { Routes, Route } from "react-router-dom";
import ListaPlatos from "../Components/ListaPlatos/ListaPlatos";
import CrearMenu from "../Components/CrearMenu/CrearMenu"
import CrearPlato from "../Components/CrearPlato/CrearPlato";
import Menu from "../Components/Menu/Menu"


export default function AppRouter() {
        return (
            <div>
                <Routes>
                        <Route path ="/" element = {<Menu/>}/>
                        <Route exact path="/Platos" element={<ListaPlatos/>}/>
                        <Route exact path="/CrearMenu"  element ={<CrearMenu/>}/>
                        <Route exact path="/CrearPlato" element={<CrearPlato/>}/>       
                    </Routes> 
            </div>
                   
       );

}
