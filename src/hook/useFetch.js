import { useEffect, useState } from "react"


export const useFetch = ( url ) => {


    const [proyectos, setProyectos] = useState([])
  
    // CARGO LOS PROYECTOS DEL JSON
    useEffect(() => {
      
      fetch( url)
        .then( resp => resp.json())
        .then( datos => 
          setProyectos(datos)
          )

    }, [url])
    
    return proyectos



}
