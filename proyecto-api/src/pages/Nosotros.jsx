import React from 'react'
import '../css/nosotros.css'

export const nosotros = () => {
     return (
          <div>
  <div className="cuadro">
    <div className="logoCuadro">
      <img src="recursos/logo.png" className="logoCuadro" />
    </div>
    <div className="textCuadro">
      <p>Somos una empresa dedicada a la comercializacion de ropa para todos de estilo vintage, esta es nuestra pagina oficial online con la posibilidad de adquirir nuestros productos desde casa, sin necesidad de buscar y buscar o asistir a sucursales
        en las cuales requiere un esfuerzo salir de casa y arriesgar su seguridad, nuestro objetivo es brindarle la mejor atencion en cada compra y orientarle en todo el proceso, asi como llevar hasta la puerta de su casa cada producto que adquiera aqui,
        brindamos la mejor seguridad ademas de dar garantía y metodos de pago seguros.
      </p>
    </div>
  </div>
  <footer><div className="socialLogos"><a href="https://www.facebook.com/profile.php?id=100069569205743" target="_blank"><img className="social" src="recursos/fb.png" width="44px" /></a></div><div className="socialLogos2"><a href="https://www.instagram.com/azul_briones/?hl=es" target="_blank"><img className="social" src="recursos/ig.png" width="40px" /></a></div><br />Azul Gissele Briones Zavala<br />Emilio Jarey Méndez Torres</footer>
</div>

     )
}

export default nosotros
