import React from 'react'

import './proyectos.scss'

export const ProyectoView = ({title, description, year, background}) => {

  const backgroundImage = { 
    backgroundImage: `url('${background}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  
  }

  return (

    <div className='card'>
        <div className="right bottom"></div>
        <div className="bottom"></div>
        <div className="left bottom"></div>
        <div className="right"></div>
        <main style= {backgroundImage}>
            <h4> {title} </h4>
            <p>{ description }</p>
            <p> { year } </p>
            <hr />
        </main>
        <div className="left"></div>
        <div className="top right"></div>
        <div className="top"></div>
        <div className="left top"></div>
    </div>
  )
}
