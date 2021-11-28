import React from 'react';
//import './App.css';
import './css/admin.css';
import './css/categorias.css';
import './css/compra.css';
import './css/inicio.css';
import './css/login.css';
import './css/nosotros.css';
import './css/opiniones.css';


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
            <li className="menu"><Link to="/" className="hvr-underline-from-center">Inicio</Link></li>
            <li class="menu"><a class="hvr-underline-from-center" href="#">Categorias</a>
              <ul className="ani-menu">
                <li><Link to="/Hombres" className="hvr-underline-from-center">Caballeros</Link></li>
                <li><Link to="/Mujeres" className="hvr-underline-from-center">Damas</Link></li>
                <li><Link to="/Menores" className="hvr-underline-from-center">Niños</Link></li>
              </ul>
            </li>
            <li className="menu"><Link to="/Opiniones" className="hvr-underline-from-center">Opiniones</Link></li>
            <li className="menu"><Link to="/Nosotros" className="hvr-underline-from-center">Sobre nosotros</Link></li>
            <li className="menu"><Link to="/Compra" className="hvr-underline-from-center"><img class="icon" src="recursos/carrito.png"></img></Link></li>
            <li className="menu"><Link to="/Login" className="hvr-underline-from-center"><img class="icon" src="recursos/login.png"></img></Link></li>
            <li className="menu"><Link to="/Admin" className="hvr-underline-from-center"><img class="icon" src="recursos/admin.png"></img></Link></li>
          </ul>
        </nav>
        

        <footer>
          <div class="socialLogos">
            <a href="https://www.facebook.com/profile.php?id=100069569205743" target="_blank">
              <img  class="social" src="recursos/fb.png" width="44px"></img></a>
          </div>

          <div class="socialLogos2">
            <a href="https://www.instagram.com/azul_briones/?hl=es" target="_blank">
              <img class="social" src="recursos/ig.png" width="40px"></img></a>
          </div>
          <br></br>
          Azul Gissele Briones Zavala
          <br></br>
          Emilio Jarey Méndez Torres
        </footer>

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