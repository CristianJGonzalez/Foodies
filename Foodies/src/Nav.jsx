import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './Nav.css'


function Nav() {
  return (
    <nav>
       {/*Nav Bar*/}
         <div className="container mt-10">
            <div className="row">
                {/*Logo del site*/}
                <div className="col-lg-2 d-flex justify-content-left py-3">  
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-5 link-body-emphasis text-decoration-none">
                        <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                        <span className="fs-4">Foodies</span>
                    </a>
                </div>
                 {/*Options*/}
                <div className="col-lg-10 d-flex justify-content-left align-items-center"> 
                    <ul className="nav nav-pills">
                        <li className="nav-item"><a href="#" className="nav-link text-dark">Acerca de</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-dark">Restaurantes</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-dark">Menú</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-dark">Contáctanos</a></li>
                    </ul>
                </div>
            </div>
          </div>
    </nav>
  )
}

export default Nav
