import React, { useState } from 'react'
import { ServiciosCard } from './ServiciosCard'

import './servicios.scss'

export const Servicios = () => {

  const [servicios] = useState([
  {id: 1, titulo: "DIRECCIÓN DE OBRA", texto: "Profesionales de la construcción darán directivas a la hora de llevar a cabo un proyecto. Los mismos serán los responsables de la secuencia de las tareas a realizar, de interpretar la documentación y velarán por que las mismas tengan resultados eficientes, seguros y que respondan a lo proyectado, utilizando los materiales adecuados."},
  {id: 2, titulo: "PROYECTO", texto: "Es toda la documentación gráfica y escrita necesaria para la ejecución de una obra de arquitectura. Incluye planos, esquemas, detalles técnicos, montajes e información precisa que será fundamental para poder obtener una construcción sólida y bien acabada, tanto de desde lo estético, estructural y de todos los servicios."},
  {id: 3, titulo: "CROQUIS / ANTEPROYECTO", texto: "Consiste en un esquema sencillo de plantas y volumetría, en el cual se expresan las ideas y formas básicas de un proyecto. Se concentra en distribución y confección de espacios, planos y volúmenes. No se expresan cuestiones constructivas ni de terminaciones."},
  {id: 4, titulo: "OBRA LLAVE EN MANO", texto: "Se denomina así a la ejecución total de una obra con todos los rubros y resoluciones necesarias. Esto conlleva la gestión y provisión de materiales, mano de obra y habilitaciones que la totalidad de la edificación requiera desde el inicio al final del proceso."},
  {id: 5, titulo: "CONSTRUCCIÓN", texto: "Es la ejecución propiamente dicha de los proyectado. Consiste en respetar la documentación de manera fiel y precisa, velando por la seguridad de las personas intervinientes. Los resultados deben ser satisfactorios y cumplir con el encargo."},
  {id: 6, titulo: "DOCUMENTACIÓN MUNICIPAL", texto: "Es la adecuación de una construcción (obra) o proyecto bajo normas y leyes vigentes. Resulta fundamental para la habilitación de la ejecución de las mismas, el correcto cobro de impuestos, el registrar el inmueble para sus propietarios y poder determinar el valor económico del mismo."},
  {id: 7, titulo: "REMODELACIÓN / RESTAURACIÓN ", texto: "Consiste en adaptar un espacio o bien, la totalidad de la edificación a los nuevos requerimientos del cliente, para satisfacer sus necesidades técnicas y estéticas."},
  {id: 8, titulo: "AMPLIACIÓN", texto: "Es una intervención constructiva que consiste en agregar espacios a una edificación o bien dar mayor superficie a alguno de ellos."}
])




  return (

    <div className='servicios-container'>
        <h2>NUESTROS SERVICIOS</h2>
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
