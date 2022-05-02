import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {data} from '../data/data'
import { AntesyDespues } from './AntesyDespues'
import { Card } from './Card'


import './proyectos.scss'

export const ProyectoScreen = ( ) => {

    const {proyecto} = useParams()

    const proyect = data.filter( p => p.titulo === proyecto )

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (

    <>
        {
            proyect && proyect.map(({id, titulo, descripcion, ubicacion, area, sobre,  año, background, antes, despues}) =>
            

            <div  key={id} className='proyectos-container'>
                <h2> { titulo } </h2>
                <h3> { descripcion } </h3>
                <div className='proyectos-description'>
                    <p> 
                        <strong>Ubicacion:</strong>
                        { ubicacion }
                    </p>
                    <p>
                        <strong>Area:</strong>
                        { area } 
                    </p>
                    <p>
                        
                        <strong>Contruccion:</strong> 
                        { año }
                    </p>
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
