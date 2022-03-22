

import React from 'react'


import './home.scss'

export const Carrousel = ( { img1, img2 } ) => {


  return (

    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img src={ img1 } className="d-block w-100" alt="Foto Principal1"/>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src={ img2 } className="d-block w-100" alt="Foto Principal2"/>
        </div>
      </div>
    </div>
  )
}
