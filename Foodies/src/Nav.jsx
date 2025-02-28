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

       {/*Nav Bar*
         <<div className="container mt-10">
            <div className="row d-sm-flex justify-content-between">
                {/*Logo del site*
                <div className="col-xs-5 col-lg-2 d-lg-flex justify-content-left py-3">  
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-5 link-body-emphasis text-decoration-none">
                        <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                        <span className="fs-4">Foodies</span>
                    </a>
                </div>
                 {/*Options*
                <div className="d-md-none col-xs-5">
                  <img className="menu" src="./images/menu_icon.png" alt="Icon" width="50" height="50" />
                </div>
                <div className="disapear col-lg-10 d-lg-flex d-xs-none justify-content-left align-items-center"> 
                    <ul className="nav nav-pills">
                        <li className="nav-item"><a href="#" className="nav-link text-dark">Acerca de</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-dark">Restaurantes</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-dark">Menú</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-dark">Contáctanos</a></li>
                    </ul>
                </div>
            </div>
          </div>
          */}
    </nav>
  )
}

export default Nav
