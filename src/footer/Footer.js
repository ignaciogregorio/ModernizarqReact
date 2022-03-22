

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

import './footer.scss'

export const Footer = () => {

    const footerLogo = require('../images/Logo barra inferior (1).png')


  return (

    <div className='footer-container'>
        
        <img src={ footerLogo } alt="" />
        <p className='footer-info'>+54 9 11 63603492 - 69631008 / info@modernizarq.com</p>
        <div className='social-media'>
            <p> Seguinos en </p>
            <a href="https://www.facebook.com/modernizarq/" target='_blank'>
              <FontAwesomeIcon className='icon-style' icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com/modernizarq/" target='_blank'>
              <FontAwesomeIcon className='icon-style' icon={faInstagram} />
            </a>
        </div>

    </div>
  )
}
