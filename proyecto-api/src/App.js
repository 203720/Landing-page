import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Inicio from './pages/Inicio';
import Hombres from './pages/Hombres';
import Mujeres from './pages/Mujeres';
import Menores from './pages/Menores';
import Compra from './pages/Compra';
import Opiniones from './pages/Opiniones';
import Nosotros from './pages/Nosotros';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
        <nav>
          <ul>
            <li className="menu"><Link to="/" className="hvr-underline-from-center">INICIO</Link></li>
            <li class="menu"><a class="hvr-underline-from-center" href="#">CATEGORIAS</a>
              <ul className="ani-menu">
                <li><Link to="/Hombres" className="hvr-underline-from-center">CABALLERO</Link></li>
                <li><Link to="/Mujeres" className="hvr-underline-from-center">DAMA</Link></li>
                <li><Link to="/Menores" className="hvr-underline-from-center">NIÑOS</Link></li>
              </ul>
            </li>
            <li className="menu"><Link to="/Opiniones" className="hvr-underline-from-center">OPINIONES</Link></li>
            <li className="menu"><Link to="/Nosotros" className="hvr-underline-from-center">SOBRE NOSOTROS</Link></li>
            <li className="menu"><Link to="/Compra" className="hvr-underline-from-center"><img class="icon" src="recursos/carrito.png"></img></Link></li>
            <li className="menu"><Link to="/Login" className="hvr-underline-from-center"><img class="icon" src="recursos/login.png"></img></Link></li>
          </ul>
        </nav>
        <Routes>
           <Route path="/" element={<Inicio />} />
           <Route path="/Mujeres" element={<Mujeres />} />
           <Route path="/Hombres" element={<Hombres />} />
           <Route path="/Menores" element={<Menores />} />
           <Route path="/Compra" element={<Compra />} />
           <Route path="/Opiniones" element={<Opiniones />} />
           <Route path="/Nosotros" element={<Nosotros />} />
           <Route path="/Login" element={<Login />} />
           <Route path="/Signin" element={<Signin />} />
           <Route path="/Admin" element={<Admin />} />
        </Routes>
    </Router>
  );
}

export default App;