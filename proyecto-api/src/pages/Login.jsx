import React from 'react'
import '../css/login.css'

export const Login = () => {
  return(
    <div>
  
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
              <a  href="http://localhost:3000/Signin">Registrarse</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>)
}

export default Login
