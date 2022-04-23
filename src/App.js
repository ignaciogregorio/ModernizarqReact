import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


import { Home } from "./home/Home";
import { Navbar } from './navbar/Navbar';
import { Nosotros } from "./nosotros/Nosotros";
import { Proyectos } from "./proyectos/Proyectos";
import { Servicios } from "./servicios/Servicios";
import { Contacto } from "./contacto/Contacto";
import { Footer } from "./footer/Footer";
import { ProyectoScreen } from "./proyectos/ProyectoScreen";


function App() {

  AOS.init({
    duration: 1800,
    once: false,
  });

  return (
    
    <Router>
      <div>
        <Navbar />  
        
          <Routes>
            <Route path='/' exact element={ <Home /> } />
            <Route path='/nosotros' exact element={ <Home/>} />
            <Route path='/servicios' exact element={ <Servicios/> } />
            <Route path='/proyectos' exact element={ <Proyectos/> } />
            <Route path='/proyectos/:proyecto' exact element={ <ProyectoScreen/> } />
            <Route path='/contacto' exact element={ <Contacto/> } />
          </Routes>
        <Footer />
      </div>
    </Router>
  
  );
}

export default App;
