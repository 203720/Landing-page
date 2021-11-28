import React from 'react';

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
      <div>
        <nav>
          <ul>
            <li className="menu"><Link to="/" className="hvr-underline-from-center">Inicio</Link></li>
            <li className="menu"><Link to="/" className="hvr-underline-from-center" >Categorias</Link>
              <ul className="menu">
                <li className="menu"><Link to="/Hombres" className="hvr-underline-from-center">Caballeros</Link></li>
                <li className="menu"><Link to="/Mujeres" className="hvr-underline-from-center">Damas</Link></li>
                <li className="menu"><Link to="/Menores" className="hvr-underline-from-center">Niños</Link></li>
              </ul>
            </li>
            <li className="menu"><Link to="/Opiniones" className="hvr-underline-from-center">Opiniones</Link></li>
            <li className="menu"><Link to="/Nosotros" className="hvr-underline-from-center">Sobre nosotros</Link></li>
            <li className="menu"><Link to="/Compra" className="hvr-underline-from-center"><img class="icon" src="recursos/carrito.png"></img></Link></li>
            <li className="menu"><Link to="/Login" className="hvr-underline-from-center"><img class="icon" src="recursos/login.png"></img></Link></li>
            <li className="menu"><Link to="/Admin" className="hvr-underline-from-center"><img class="icon" src="recursos/admin.jpg"></img></Link></li>
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
        
      </div>
    </Router>
  );
}

export default App;