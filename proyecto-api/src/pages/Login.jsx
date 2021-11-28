import React from 'react'
import '../css/login.css'

export const Login = () => {
  return(
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
  <div className="container">
    <div className="wrapper">
      <div className="cuadro">    
        <div className="contact-wrapper-login">
          <div className="login">
            <h1>Iniciar Sesión</h1>
            <br />
            <form method="post">
              <input id="user" type="text" name="u" placeholder="Usuario" required="required" />
              <input id="pass" type="password" name="p" placeholder="Contraseña" required="required" />
              <button id="login" className="btn btn-primary btn-block btn-large" onclick="info()">Acceder</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>)
}

export default Login
