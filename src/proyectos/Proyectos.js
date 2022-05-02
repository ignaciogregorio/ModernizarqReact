import React, { useEffect } from 'react'
import { ProyectoContainer } from './ProyectoContainer'
import {data} from '../data/data'



import './proyectos.scss'

export const Proyectos = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  
  return (


  <div className='proyectos-container'  data-aos="fade-up-right"> 
      <h2>NUESTROS PROYECTOS</h2>
      <hr className='hrMobile' />
      <p className='proyectos-description'>Todos nuestros proyectos realizados</p>
    <div className='proyectos-grilla'>
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
