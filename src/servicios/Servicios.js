import React, { useState } from 'react'
import { ServiciosCard } from './ServiciosCard'

import './servicios.scss'

export const Servicios = () => {

  const [servicios, setServicios] = useState([
  {id: 1, titulo: "DIRECCIÓN DE OBRA", texto: "Profesionales de la construccion daran directivas a la hora de llevar a cabo un proyecto. Los mismos sera responsables de la secuencia."},
  {id: 2, titulo: "PROYECTO", texto: "Es toda la documentación gráfica y escrita necesaria para la ejecución de una obra de arquitectura."},
  {id: 3, titulo: "CROQUIS / ANTEPROYECTO", texto: "Consiste en un quema sencillo de plantas y volumetria, en el cual se expresan las ideas y formas básicas de un proyecto."},
  {id: 4, titulo: "OBRA LLAVE EN MANO", texto: "Se denomina así a la ejecución total de una obra con todos los rubros y resoluciones necesarias."},
  {id: 5, titulo: "CONSTRUCCIÓN", texto: "Es la ejecución propiamente dicha de los proyectados. Consiste en respetar la documentación de manera fiel y precisa."},
  {id: 6, titulo: "DOCUMENTACIÓN MUNICIPAL", texto: "Es la adecuación de una construcción (obra) o proyecto bajo normas y leyes vigentes."},
  {id: 7, titulo: "REMODELACIÓN / RESTAURACIÓN ", texto: "Consiste en adaptar un espacio o bien, la totalidad de la edificación a los nuevos requerimientos del cliente."},
  {id: 8, titulo: "AMPLIACIÓN", texto: "Es una intervención constructiva que consiste en agregar espacios a una edificación o bien dar mayor superficie a alguno de ellos."}
])




  return (

    <div className='servicios-container'>
        <h1>NUESTROS SERVICIOS</h1>
        <hr className='hrMobile' />
        <p className='servicios-description'>Modernizarq es un estudio de Arquitectura, que se especializa en la creación y desarrollo de proyectos enfocados desde el diseño, abordando una amplia gama de actividades como construcción de obra, remodelaciones integrales, ampliaciones, dirección y control mediante diseños altamente personalizados según los objetivos y circunstancias particulares de cada proyecto.</p>
      <div className='servicios-grilla'>
        {
          servicios.map( servicio => (
            <ServiciosCard 
              key={ servicio.id }
              titulo={ servicio.titulo }
              texto={ servicio.texto }
            />
          ))
        }
      </div>
    
    </div>
  )
}
