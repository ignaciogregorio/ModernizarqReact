import React from 'react'
import { Nosotros } from '../nosotros/Nosotros'
import { ProyectosHome } from '../proyectos/ProyectosHome'
import { Carrousel } from './Carrousel'

import './home.scss'

export const Home = () => {

  const carrousel1 = require('../images/foto principal 1.png')
  const carrousel2 = require('../images/foto principal 2.png')
  const imgLogo = require('../images/Logo.png')



  return (

    <>
      <Carrousel img1={ carrousel1 } img2={ carrousel2 } />

      <Nosotros imgLogo={ imgLogo } />

      <ProyectosHome />

    </>
  )
}
