import React, { useState } from 'react'

import './proyectos.scss'

export const ProyectoView = ({title, description, year, background}) => {

  const [show, setShow] = useState(false)

  const backgroundImage = { 
    backgroundImage: require(`url('${background}')`),
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
            <div className='proyecto-card'>
              <h4> {title} </h4>
              <p>{ description }</p>
              <p> { year } </p>
              <hr />
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
