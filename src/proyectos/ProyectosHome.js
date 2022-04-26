import React from 'react'

import { ProyectoContainer } from './ProyectoContainer'
import {data} from '../data/data'

import './proyectos.scss'

export const ProyectosHome = () => {


    const filtrados = data.filter( h => h.home === true)

  return (

    <div className='proyectos-container' data-aos="fade-right">
        <h2>PROYECTOS</h2>
        <p className='proyectos-description' >Ver mas proyectos realizados</p>
        <div className='proyectos-grilla'>
          {
          filtrados && filtrados.map( ({id, titulo, descripcion, año, background}) => (
            <ProyectoContainer
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
