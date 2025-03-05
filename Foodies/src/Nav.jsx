import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './Nav.css'


function Nav() {
  return (
    <nav>
       {/*Nav Bar*/}
      <div className="menu">
        {/*Logo Foodies*/}
          <div className="logo"><a>Foodies</a></div>
        {/*Menu options*/}
        <img className="menuIcon" src="./images/menu_icon.png" alt="Icon" width="60" height="60" />
          <div className="options disapear">
            <ul className="menuList">
              <li>Acerca de</li>
              <li>Restaurantes</li>
              <li>Menús</li>
              <li>Contáctanos</li>
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Nav
