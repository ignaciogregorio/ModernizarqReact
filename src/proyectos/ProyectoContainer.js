import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ProyectoScreen } from './ProyectoScreen'

import './proyectos.scss'

export const ProyectoContainer = ({title, description, year, background, id}) => {

  const [show, setShow] = useState(false)

  const backgroundImage = { 
    backgroundImage:(`url('${background}')`),
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  
  }

  const mouseEnter = () =>{
    setShow(!show)
  }
  const mouseLeave = () =>{
    setShow(!show)
  }

  return (

    <div className='card'>
        <div className="right bottom"></div>
        <div className="bottom"></div>
        <div className="left bottom"></div>
        <div className="right"></div>
        <main 
          style= {backgroundImage}
          onMouseEnter={ mouseEnter }
          onMouseLeave= { mouseLeave }
        >
          {
            show &&
              <div className='animate__animated animate__zoomIn proyecto-card'>
                <h4> {title} </h4>
                <p>{ description }</p>
                <p> { year } </p>
                <hr />
                <Link to={`/proyectos/${title}`}>
                  <button className='proyecto-button'>Ver mas</button>
                </Link>
              </div>
          }
        </main>
        <div className="left"></div>
        <div className="top right"></div>
        <div className="top"></div>
        <div className="left top"></div>
    </div>
  )
}
