import React from 'react'

export const AntesyDespues = ( {imagen} ) => {


  return (

    <div>


        <div className='card'>
            <div className="right bottom"></div>
            <div className="bottom"></div>
            <div className="left bottom"></div>
            <div className="right"></div>
            <main>
                <img 
                    src={ imagen } 
                    alt="" 
                    className='proyectoScreen-img'    
                />
            </main>
            <div className="left"></div>
            <div className="top right"></div>
            <div className="top"></div>
            <div className="left top"></div>
        </div>
    
    

    </div>
  )
}
