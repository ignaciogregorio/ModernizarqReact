import React from 'react'
import { ProyectoContainer } from './ProyectoContainer'
import {data} from '../data/data'



import './proyectos.scss'

export const Proyectos = () => {


  return (


  <div className='proyectos-container'>
      <h1>NUESTROS PROYECTOS</h1>
      <hr className='hrMobile' />
      <p className='proyectos-description'>Todos nuestros proyectos realizados</p>
    <div className='proyectos-grilla' data-aos="fade-up-right">
    {
      data && data.map( ({id, titulo, descripcion, año, background}) => (

        <ProyectoContainer
          key={ id }
          title={ titulo}
          description={ descripcion }
          year={ año }
          background= { background }
          id={id}
        />
      ))
    }
    </div>

</div>
  )
}
