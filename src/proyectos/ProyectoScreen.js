import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {data} from '../data/data'
import { AntesyDespues } from './AntesyDespues'

import './proyectos.scss'

export const ProyectoScreen = ( ) => {

    const {proyecto} = useParams()

    const proyect = data.filter( p => p.titulo === proyecto )

  return (

    <div>
        {
            proyect && proyect.map(({id, titulo, descripcion, ubicacion, area, año, background, antes}) =>
            

            <>
                <h1 key={id}> { titulo } { descripcion } </h1>
                <div>
                    <p>Ubicacion: { ubicacion } </p>
                    <p> Area: { area } </p>
                    <p> Contruccion: { año } </p>
                </div>
                <div className='card'>
                    <div className="right bottom"></div>
                    <div className="bottom"></div>
                    <div className="left bottom"></div>
                    <div className="right"></div>
                    <main>
                        <img 
                            src={ background } 
                            alt="" 
                            className='proyectoScreen-img'    
                        />
                    </main>
                    <div className="left"></div>
                    <div className="top right"></div>
                    <div className="top"></div>
                    <div className="left top"></div>
                </div>
                <AntesyDespues  imagen = { antes.antes1  } />
            </>
            
            )
        }

        
    </div>
  )
}
