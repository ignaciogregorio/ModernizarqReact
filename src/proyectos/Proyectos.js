import React, { useEffect, useState } from 'react'
import { ProyectoView } from './ProyectoView'




import './proyectos.scss'

export const Proyectos = () => {

  const [proyectos, setProyectos] = useState([])
  

  // CARGO LOS PROYECTOS DEL JSON
  useEffect(() => {
    
    fetch( './proyectos.json')
      .then( resp => resp.json())
      .then( datos => 
        setProyectos(datos)
        )

  }, [])



  return (


  <div className='proyectos-container'>
      <h1>NUESTROS PROYECTOS</h1>
      <hr className='hrMobile' />
      <p className='proyectos-description'>Todos nuestros proyectos realizados</p>
    <div className='proyectos-grilla'>
    {
      proyectos && proyectos.map( ({id, titulo, descripcion, año, background}) => (
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
