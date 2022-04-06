import React from 'react'

import { ProyectoView } from '../proyectos/ProyectoView'
import {data} from '../data/data'

import './proyectos.scss'

export const ProyectosHome = () => {


    const filtrados = data.filter( h => h.home === true)

  return (

    <div className='proyectos-container'>
        <h1>PROYECTOS</h1>
        <p className='proyectos-description' >Ver mas proyectos realizados</p>
        <div className='proyectos-grilla'>
          {
          filtrados && filtrados.map( ({id, titulo, descripcion, año, background}) => (
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
