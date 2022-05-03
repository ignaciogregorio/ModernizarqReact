
import React, { useState } from 'react'
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faX } from '@fortawesome/free-solid-svg-icons'
import 'animate.css'


import './navbar.scss'

export const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)

  const navbarLogo = require('../images/Logo Barra Superior.png')

  const currentClass = ({ isActive }) => (isActive ? "navbar-links + active" : "navbar-links")

  const toggleMenu = () =>{
    
    setShowMenu(!showMenu)
    window.scrollTo(0, 0)
  }
  
  return (
    
    
    <nav className='navbar-container'>

        <FontAwesomeIcon 
          className='burger-menu'
          icon={ showMenu ? faX : faBars }
          onClick = { toggleMenu }
        />

        <Link to='/'
          className='logo-img'
        >
          <img src={navbarLogo} alt="" />
        </Link>
        
        <ul className={`animate__animated animate__fadeInLeft navbar-menu ${ showMenu ? '': 'close' }`}>
          <li> 
            <NavLink 
              className={currentClass}  
              to="/nosotros"
              onClick={ toggleMenu }
              > Nosotros </NavLink>
          </li>
          <li> 
            <NavLink 
            className={currentClass}  
            to="/Servicios"
            onClick={ toggleMenu }
            > Servicios </NavLink>
          </li>
          <li>
            <NavLink 
            className={currentClass}  
            to= "/Proyectos"
            onClick={ toggleMenu }
            > Proyectos </NavLink>
          </li>
          <li>
            <NavLink 
            className={currentClass}  
            to= "/Contacto"
            onClick={ toggleMenu }
            > Contacto </NavLink>
          </li>
        </ul>

    </nav>
  )
}
