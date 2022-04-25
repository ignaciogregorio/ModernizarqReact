import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

import './contacto.scss'

export const Contacto = () => {
  
  const [state, handleSubmit] = useForm("xpzboqjl");

  const navbarLogo = require('../images/Logo Barra Superior.png')


  if (state.succeeded) {
      
      return (
        <>
          <img className='mensaje-logo' src={navbarLogo} alt="" />
          <p className='mensaje-enviado'>Gracias por su mensaje</p>
          <p className='mensaje-enviado'>Te contestaremos a la brevedad</p>
        </>
      );
  }


  
  return (
    
    <div className='contacto-container'>
      <div className='contacto-info'>
        <h1>estemos en contacto</h1>
        <p>modernizarq@gmail.com</p>
        <p>+54 9 11 63603492 / 11 69631008</p>
        <p> Villa Ballester, Buenos Aires.</p>
      </div>

      <form 
        className='contacto-form'
        onSubmit={handleSubmit}
      >
        <p>Envianos un mensaje</p>

        <label> Nombre </label>
        <input 
          name="nombre"
        />

        <label> Email </label>
        <input 

          name='email'
          type='email'

        />

        <label> Telefono </label>
        <input 

          name='telefono'
          type='tel'
        />

        <label> Mensaje </label>
        <textarea 
          id=""
          cols="30" rows="5"
          name='mensaje'
        >
        </textarea>

        <button type='submit'
        disabled={state.submitting}
        >Enviar</button>

      </form>



    </div>
  )
}
