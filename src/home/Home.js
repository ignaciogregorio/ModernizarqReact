import React from 'react'
import { Link } from "react-router-dom";
import { Nosotros } from '../nosotros/Nosotros'
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
    
      

        
    
    </>
  )
}
