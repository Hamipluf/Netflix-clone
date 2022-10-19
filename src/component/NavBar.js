import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import "../styles/Navbar.css"

function NavBar() {

  const history = useHistory();

  const goProfile = () => {
    history.push("/profile")
    window.location.reload(true); 
  }
  const home = () => {
    history.push("/")
    window.location.reload(true); 
  }

  const [show, handleShow] = useState(false);
  // Detecta cuando se hace scroll en la ventana 
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    // Funcion de limpieza 
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, [])


  return (
    // condicional para el efecto de desaparecer    
    <div className={`nav ${show && "nav__bg"}`}>

      <div className='nav__content'>
        <img
          onClick={home}
          className='nav__content-logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Logo netflix" />
        <img
          onClick={goProfile}
          className='nav__content-avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar netflix default" />

      </div>


    </div>
  )
}

export default NavBar