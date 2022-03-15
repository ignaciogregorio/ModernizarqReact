

import React from 'react'


import './home.scss'

export const Carrousel = ( { img1, img2 } ) => {


  return (

    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000">
          <img src={ img1 } class="d-block w-100" alt="Foto Principal1"/>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src={ img2 } class="d-block w-100" alt="Foto Principal2"/>
        </div>
      </div>
    </div>
  )
}
