import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from 'react';
import "./Hero.css"

function Hero(props) {
  const [bgColor] = useState(props.color || 'white');


  const textClass = bgColor === 'black' ? 'text-white' : 'text-black';



  return (
    <div>
        <div className="container px-4 py-xl-5">
                    <div className="row flex-md-row-reverse align-items-center g-5 py-md-5">
                      {/*Imagen Hamburguesa*/}   
                      <div className="col-md-6 col-sm-10">
                        <img src={props.src} className="d-block mx-lg-auto img-fluid" alt="Hamburguesa" width="700" height="500" loading="lazy"/>
                      </div>
                      {/*Contenido*/} 
                      <div className="col-md-6 px-lg-4 px-xs-5 px-md-1 phone">
                        <h1 className={`text display-3 display-sm-5 lh-1 mt-xs-5 mb-lg-3 ${textClass}`}>{props.h1}</h1>
                        <p className="lead">{props.p}</p>
                        <a href="#" className="encuentranos nav-link text-dark">
                            {props.enc}
                            <img src={props.src2} height="30"/>
                          </a>  
                      </div>
                    </div>
                </div>
    </div>
  )
}

Hero.propTypes = {
    src: PropTypes.string,
    color: PropTypes.string,
    h1: PropTypes.string,
    span: PropTypes.string,
    p: PropTypes.string,
    enc: PropTypes.string,
    src2: PropTypes.string,
  };

export default Hero
