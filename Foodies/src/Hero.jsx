import PropTypes from 'prop-types';

function Hero(props) {

  return (
    <div>
        <div className="container px-4 py-xl-5">
                    <div className="row flex-md-row-reverse align-items-center g-5 py-md-5">
                      {/*Imagen Hamburguesa*/}   
                      <div className="col-md-6 col-sm-10">
                        <img src={props.src} className="d-block mx-lg-auto img-fluid" alt="Hamburguesa" width="700" height="500" loading="lazy"/>
                      </div>
                      {/*Contenido*/} 
                      <div className="col-md-6">
                        <h1 className="display-3 fw-bold text-body-emphasis lh-1 mb-lg-3">{props.h1}<span className="span">{props.span}</span></h1>
                        <p className="lead">{props.p}</p>
                        <a href="#" className="encuentranos nav-link text-dark">
                            {props.enc}
                            <img src={props.src2} alt="flecha" height="30"/>
                          </a>  
                      </div>
                    </div>
                </div>
    </div>
  )
}

Hero.propTypes = {
    src: PropTypes.string,
    h1: PropTypes.string,
    span: PropTypes.string,
    p: PropTypes.string,
    enc: PropTypes.string,
    src2: PropTypes.string,
  };

export default Hero
