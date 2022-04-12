import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {data} from '../data/data'
import { AntesyDespues } from './AntesyDespues'
import { Card } from './Card'

import './proyectos.scss'

export const ProyectoScreen = ( ) => {

    const {proyecto} = useParams()

    const proyect = data.filter( p => p.titulo === proyecto )

  return (

    <>
        {
            proyect && proyect.map(({id, titulo, descripcion, ubicacion, area, sobre,  año, background, antes, despues}) =>
            

            <div className='proyectos-container'>
                <h1 key={id}> { titulo } </h1>
                <h3> { descripcion } </h3>
                <div className='proyectos-description'>
                    <p>Ubicacion: { ubicacion } </p>
                    <p> Area: { area } </p>
                    <p> Contruccion: { año } </p>
                </div>
                <div className='proyecto-principal'>
                    <Card image = {background} />
                    <p>{ sobre } </p>
                </div>
                <h4 className='before-after'>ANTES</h4>
                <div className='proyectos-grilla'>
                    <AntesyDespues  imagen = { antes.antes1  } />
                    <AntesyDespues  imagen = { antes.antes2  } />
                    <AntesyDespues  imagen = { antes.antes3  } />
                </div>
                <h4 className='before-after'>DESPUES</h4>
                <div className='proyectos-grilla'>
                    <AntesyDespues  imagen = { despues.despues1  } />
                    <AntesyDespues  imagen = { despues.despues2  } />
                    <AntesyDespues  imagen = { despues.despues3  } />
                </div>
            </div>
            
            )
        }

        
    </>
  )
}
