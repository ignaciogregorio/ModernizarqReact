

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'

import './home.scss'

export const Whatsapp = () => {

    

  return (

    <>
      <a href="https://api.whatsapp.com/send?phone=541138029762" target='_blank'>
        <FontAwesomeIcon icon={faWhatsapp} className='icono-whsp' />
      </a>
    </>
  )
}
