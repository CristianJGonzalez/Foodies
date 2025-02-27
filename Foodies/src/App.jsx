import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Nav from "./Nav"


function App() {
  return (
    <div className='master'>
        {/*-----------------First Post-------------------*/}  
          <div className="background">
            {/*--------------Nav Bar--------------*/}   
            <Nav />
            {/*Primer Background*/}  
            <img src="/images/Subtract.png" alt="fondo de pantalla" className="background1"/>
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                      {/*Imagen Hamburguesa*/}   
                      <div className="col-lg-6 col-sm-10 col-lg-6">
                        <img src="../public/images/hero_hamburger.png" className="d-block mx-lg-auto img-fluid" alt="Hamburguesa" width="700" height="500" loading="lazy"/>
                      </div>
                      {/*Contenido*/} 
                      <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Un nuevo sabor esta en la ciudad</h1>
                        <p className="lead">Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables.</p>
                        <a href="#" className="nav-link text-dark">
                            Encuentranos
                            <img src="../public/images/arrow-right.png" alt="flecha" height="30"/>
                          </a>  
                      </div>
                    </div>
                </div>
          </div> 
          {/*---------------Second POST-----------------*/}  
    </div>
  )
}

export default App
