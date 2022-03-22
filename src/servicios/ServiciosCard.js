import React from 'react'

import './servicios.scss'

export const ServiciosCard = ({ titulo, texto}) => {


  return (

    <div className='card'>
        <div className="right bottom"></div>
        <div className="bottom"></div>
        <div className="left bottom"></div>
        <div className="right"></div>
        <main>
            <h4> {titulo} </h4>
            <hr />
            <p className='servicios-text'>{ texto }</p>
            <button 
            className='servicios-button'
            >
            VER MAS </button>
        </main>
        <div className="left"></div>
        <div className="top right"></div>
        <div className="top"></div>
        <div className="left top"></div>
    </div>
  )
}
