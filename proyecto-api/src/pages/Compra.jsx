import React from 'react'
import '../css/compra.css'

export const Compra = () => {
     return (
      <div>
  <nav>
    <ul>
      <li className="menu"><a className="hvr-underline-from-center" href="home.html">INICIO</a></li>
      <li className="menu"><a className="hvr-underline-from-center" href="#">CATEGORIAS</a>
        <ul className="ani-menu">
          <li><a className="hvr-underline-from-center" href="hombres.html">Caballeros</a></li>
          <li><a className="hvr-underline-from-center" href="mujeres.html">Damas</a></li>
          <li><a className="hvr-underline-from-center" href="ninos.html">Niños</a></li>
        </ul>
      </li>
      <li className="menu"><a className="hvr-underline-from-center" href="/public/index.html">OPINIONES</a></li>
      <li className="menu"><a className="hvr-underline-from-center" href="nosotros.html">SOBRE NOSOTROS</a></li>
      <li className="menu"><a className="hvr-underline-from-center" href="compra.html"><img className="icon" src="recursos/carrito.png" /></a></li>
      <li className="menu"><a className="hvr-underline-from-center" href="login.html"><img className="icon" src="recursos/login.png" /></a></li>
    </ul>
  </nav>
  <div className="text"><p>PROXIMAMENTE...</p></div>
</div>

     )
}

export default Compra
