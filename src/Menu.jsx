import "./Menu.css"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero";

function Menu() {

  return (
    <div className="master">
        {/*-----------------Hero Section-------------------*/}  
        <header className="background">
                {/*--------------Nav Bar--------------*/}   
                <Nav color="black" />
                {/*Hero Post*/}  
                <Hero 
                src="/images/hero_hamburger2.png" 
                color="black"
                h1="Un nuevo sabor esta en "
                span="la ciudad"
                />
        </header> 
        <Footer />
    </div>
  )
}

export default Menu
