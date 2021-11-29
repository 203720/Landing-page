import React from 'react'
import '../css/login.css'

export const Login = () => {
  return(
       <div class="container">
        <div class="wrapper">
        <div className="contact-wrapper-login">
          <div className="login">
            <h1 id="log">Iniciar Sesión</h1>
            <br />
            <form method="post">
              <input className="inputLogin" id="user" type="text" name="u" placeholder="Usuario" required="required" />
              <input className="inputLogin" id="pass" type="password" name="p" placeholder="Contraseña" required="required" />
              <button id="login" class="btn btn-primary btn-block btn-large" onclick="info()">Acceder</button>
              <a href="http://localhost:3000/Signin">Registrarse</a>
            </form>
          </div>
        </div>
         </div>
                
        </div>
  )
}

export default Login
