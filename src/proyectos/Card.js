import React from 'react'

export const Card = ({image}) => {
  return (
    <div className='card'>
        <div className="right bottom"></div>
        <div className="bottom"></div>
        <div className="left bottom"></div>
        <div className="right"></div>
        <main>
            <img 
                src={ image } 
                alt="" 
                className='proyectoScreen-img'    
            />
        </main>
        <div className="left"></div>
        <div className="top right"></div>
        <div className="top"></div>
        <div className="left top"></div>
    </div>
  )
}
