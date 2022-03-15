import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import 'animate.css';


import { Home } from "./home/Home";
import { Navbar } from './navbar/Navbar';
import { Nosotros } from "./nosotros/Nosotros";
import { Proyectos } from "./proyectos/Proyectos";
import { Servicios } from "./servicios/Servicios";
import { Contacto } from "./contacto/Contacto";


function App() {


  return (
    
    <Router>
      <div>
        <Navbar />  
        
          <Routes>
            <Route path='/' exact element={ <Home /> } />
            <Route path='/nosotros' exact element={ <Nosotros/>} />
            <Route path='/servicios' exact element={ <Servicios/> } />
            <Route path='/proyectos' exact element={ <Proyectos/> } />
            <Route path='/contacto' exact element={ <Contacto/> } />
          </Routes>

      </div>
    </Router>
  
  );
}

export default App;
