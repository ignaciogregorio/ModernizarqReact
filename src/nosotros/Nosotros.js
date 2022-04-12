import  AOS  from 'aos'
import React from 'react'
import { Link } from 'react-router-dom'

import './nosotros.scss'

export const Nosotros = ({ imgLogo }) => {

  AOS.init()
  
  return (
    <div className='nosotros-container' id='nosotros'>
        <div className='nosotros-left' data-aos="fade-right">
        
          <h1> ESTUDIO DE ARQUITECTURA</h1>
          <p> Modernizarq es una estudio de arquitectura fundada en 2018 por los arq. Federico De Luca y Joel Lage Asis recibidos de la universidad de Buenos Aires, enfocado en el diseño que van desde renovaciones interiores, ampliaciones y nuevas construcciones. Modernizarq ofrece a sus clientes diseños personalizados, adaptadose a los objetivos y circunstancias particulares de cada proyecto como también prestando atención al presupuesto, al calendario y a la calidad. Se ofrecemos un servicio personalizado a lo largo de todo el proceso, desde la evaluación de una propiedad potencial, pasando por el diseño, la construcción.</p>
          <p className='p-mobile'>Modernizarq es una estudio de arquitectura fundada en 2018 por los arq. Federico De Luca y Joel Lage Asis recibidos de la universidad de Buenos Aires, enfocado en el diseño que van desde renovaciones interiores, ampliaciones y nuevas construcciones.</p>
        
        </div>

        <div className='nosotros-right' data-aos="fade-left">
          <img src={ imgLogo } alt="logo" />
          <p>Buscamos aprovechar al máximo tu espacio adaptándonos a tus necesidades mediante diseños personalizados.</p>
          <Link
            to='/Contacto'
            className='link-class'
          >
            <button>Contactanos</button>
          </Link>
        </div>
    </div>
  )
}
