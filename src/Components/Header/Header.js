import React from "react"

import "./Header.css"


class Header extends React.Component {

    render(){
        return(
        <header className="main center-v center-h">
               <nav class="navi">
                    <ul>
                    <li><a href="/">Menus</a></li>
                    <li><a href="/Platos">Platos</a></li>
                    <li><a href="/CrearPlato">Crear Plato</a></li>
                    <li><a href="/CrearMenu">Crear Menu</a></li>
                    <li className="title"><a href="/">MI PLAZOLETA</a></li>
                    </ul>
              </nav>
        </header>
        );
    }


} 

export default Header



