import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero";



function App() {
  return (
    <div className="master">
        {/*-----------------Hero Section-------------------*/}  
          <header className="background">
            {/*--------------Nav Bar--------------*/}   
            <Nav color="white" />
            {/*Primer Background*/}  
            <img src="/images/Subtract.png" alt="fondo de pantalla" className="background1"/>
            <img src="/images/span.png" alt="fondo de pantalla" className="span"/>
            <Hero 
            src="/images/hero_hamburger.png" 
            h1="Un nuevo  sabor esta en la ciudad"
            p="Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables."
            enc="Encuentranos"
            src2="/images/arrow-right.png"
            />
          </header> 
          {/*---------------Main container-----------------*/} 
          <main className="main">
             {/*---------------First post----------------*/} 
              <section className="section1">
                  <img src="./images/Vector3.png" className="background2" alt="lineas" height="300" />
                  <div className="contain">
                    {/* Image container */}
                    <div className="postSection1">
                      <img src="./images/Group 22.png" className="img2" alt="Grupo 22"/>
                      <h2>LA COMIDA ES <span className="span2">NUESTRA ARTE</span></h2>
                    </div>

                    {/* Text container first post */}
                    <div className="sub_contain">
                      <h2 className="">¿Quién es Foodies?</h2>
                      <p>
                        Elit irure ad nulla id elit laborum nostrud mollit irure. Velit reprehenderit sunt nulla enim aliquip duis tempor
                        est culpa fugiat consequat culpa consectetur Lorem. Reprehenderit dolore culpa irure eiusmod minim occaecat et id
                        minim ullamco.
                      </p>
                      <a href="#" className="encuentranos nav-link text-dark">
                        Encuentranos
                        <img src="./images/arrow-right.png" alt="flecha" height="30" />
                      </a>
                    </div>
                  </div>
              </section>
            {/*---------------Second Post----------------*/} 
              <section className="section2">
                <div className="firstContainerS2">
                  <h2>Estamos para ti</h2>
                  <div className="fContainerS2">
                    <div className="pallevars2">
                      <img src="./images/soda-ham.png" alt="flecha" height="25" />
                      <h3>Para llevar</h3>
                    </div>
                    <div className="domicilios2">
                      <img src="./images/domicilio.png" alt="flecha" height="25" />
                      <h3>Domicilio</h3>
                    </div>
                  </div>
                  <input type="text" className="inputS2" placeholder="Buscar nombre o dirección" name="search" />

                  {/* Address containers */}
                  <div className="directionsS2">
                    <div className="direction1S2">
                      <h3>Sucursal San Benito</h3>
                      <p>Abierto de 12:00 md - 9:00 pm</p>
                      <p>Calle la reforma #543, Colonia San Benito</p>
                    </div>
                    <div className="direction2S2">
                      <h3>Sucursal San Benito</h3>
                      <p>Abierto de 12:00 md - 9:00 pm</p>
                      <p>Calle la reforma #543, Colonia San Benito</p>
                    </div>
                    <div className="direction3S2">
                      <h3>Sucursal San Benito</h3>
                      <p>Abierto de 12:00 md - 9:00 pm</p>
                      <p>Calle la reforma #543, Colonia San Benito</p>
                    </div>
                  </div>
                </div>

                {/* Map point image */}
                <div className="secondContainerS2">
                  <img src="./images/mapa.png" alt="mapa" />
                </div>
              </section>
            {/*---------------Third Post----------------*/} 
              <section className="section3">         
                <img className="salsa1" src="./images/rojo1.png" alt="rojo"/>
                <img className="salsa2" src="./images/salsa2.png" alt="salsa roja"/>
                <img className="botedeSalsa" src="./images/ketchup.png" alt="bote de salsa"/>
                <div className="row d-flex justify-content-center mt-10">
                  <div className="col-lg-7 px-5 text-center">
                    <div className="container py-lg-5">
                      <h2 className="text-body-emphasis">“El mejor lugar para degustar en familia y amigos!”</h2>
                      <p className="col-lg-8 mx-auto lead">
                        Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera. 
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            {/*---------------Fourth Post----------------*/} 
              <section className="section4">
                <div className="textS4">
                    <h2>Cuentanos tu experiencia</h2>
                    <p>Don&apost miss out on our great offers & Receive deals from all our
                        top restaurants via e-mail.</p>
                </div>
                {/* Comments box */}
                <form className="commentsS4">
                    <div className="inputsS4">
                        <label htmlFor="fname">Nombre y Apellido:</label>
                        <input type="text" id="fname" name="fname" placeholder="John Doe" />
                        <label htmlFor="fcorreo">Correo electrónico:</label>
                        <input type="text" id="fcorreo" name="fcorreo" placeholder="j.doe@correo.com" />
                    </div>
                    <div className="commentTextS4">
                      <label htmlFor="fcomment">Mensaje:</label>
                      <input type="text" id="fname" name="fname"  placeholder="El día de ahora mi experiencia fue..."/>
                    </div>
                </form>
                <div className="buttonS4">
                    <button type="button">
                        Enviar Comentario
                    </button>
                </div>
              </section>
            {/*---------------Fifth Post----------------*/} 
            <section className="section5">
              <div className="section5Image">
                <img className="phoneS5" src="./images/phone.png" alt="phone" />
              </div>
              <div className="section5Info">
                <img src="./images/Group1.png" alt="grupo1" className="group1"/>
                <img src="./images/Group2.png" alt="grupo2" className="group2"/>
                <img src="./images/Group3.png" alt="grupo3" className="group3"/>
                <img src="./images/spanFinal.png" alt="span" className="spanFinal"/>
                <img src="./images/LineaDerecha.png" alt="derecha" className="lineaD"/>
                <img src="./images/LineaIzquierda1.png" alt="izquierda" className="lineaI"/>
                <h2>Obten más beneficios<br />Descarga nuestra app</h2>
                <div className="containerGridS5">
                  <div className="gridContainer1">
                    <a>Solicita rápido</a>
                    <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  </div>
                  <div className="gridContainer2">
                    <a>Fácil de usar</a>
                    <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  </div>
                  <div className="gridContainer3">
                    <a>Promociones especiales</a>
                    <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
          {/*---------------Footer----------------*/} 
          <Footer/>
    </div>
  )
}

export default App
