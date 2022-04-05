import React, { useEffect, useState } from 'react'

import { ProyectoView } from '../proyectos/ProyectoView'
import { useFetch } from '../hook/useFetch'

import './proyectos.scss'

export const ProyectosHome = () => {

  const [proyectos, setProyectos] = useState([])
  
  // CARGO LOS PROYECTOS DEL JSON
  useEffect(() => {
   
    fetch( './proyectos.json')
      .then( resp => resp.json())
      .then( datos => 
        setProyectos(datos)
        )
       }, [])
       
       console.log(proyectos);


    const filtrados = proyectos.filter( h => h.home === true)

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
