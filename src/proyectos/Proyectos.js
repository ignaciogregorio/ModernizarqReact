import React from 'react'
import { ProyectoView } from './ProyectoView'
// import { useFetch } from '../hook/useFetch'
import {data} from '../data/data'



import './proyectos.scss'

export const Proyectos = () => {

  console.log(data);
  return (


  <div className='proyectos-container'>
      <h1>NUESTROS PROYECTOS</h1>
      <hr className='hrMobile' />
      <p className='proyectos-description'>Todos nuestros proyectos realizados</p>
    <div className='proyectos-grilla'>
    {
      data && data.map( ({id, titulo, descripcion, año, background}) => (
        <ProyectoView
          key={ id }
          title={ titulo}
          description={ descripcion }
          year={ año }
          background= { background }
        />
      ))
    }
    </div>

</div>
  )
}
