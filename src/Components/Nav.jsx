import "./Nav.css"
import PropTypes from 'prop-types';
import { useState }  from "react";

function Nav(props) {
  const [bgColor] = useState(props.color || "white");


  return (
    <nav>
       {/*Nav Bar*/}
      <div className="menu">
        {/*Logo Foodies*/}
          <div className="logo" style={{ color: bgColor === 'black' ? 'white' : 'black' }}><a>Foodies</a></div>
        {/*Menu options*/}
        <img className="menuIcon" src="./images/menu_icon.png" alt="Icon" width="60" height="60" />
          <div className="options disapear">
            <ul className="menuList" style={{ color: bgColor === 'black' ? 'white' : 'black' }}>
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


Nav.propTypes = {
    color: PropTypes.string,
  };

export default Nav
