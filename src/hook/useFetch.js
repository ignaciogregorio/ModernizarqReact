import { useEffect, useState } from "react"


export const useFetch = ( ) => {


    const [proyectos, setProyectos] = useState([])
  
    // CARGO LOS PROYECTOS DEL JSON
    useEffect(() => {
      
      fetch( './proyectos.json' )
        .then( resp => resp.json())
        .then( datos => 
          setProyectos(datos)
          )

    }, [])
    
    return proyectos



}
