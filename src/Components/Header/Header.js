import React from "react"

import "./Header.css"
import {Link} from "react-router-dom"


export default function Header () {
        return(
        <header className="main center-v center-h">
               <nav className="navi">
                    <ul>
                    <li><Link to="/Platos">Platos</Link></li>
                    <li><Link to="/CrearPlato">Crear Plato</Link></li>
                    <li><Link to="/CrearMenu">Crear Menu</Link></li>
                    <li><Link to="/">Menus</Link></li>
                    <li className="title"><Link to="/">MI PLAZOLETA</Link></li>
                    </ul>
              </nav>
        </header>
        );


} 




