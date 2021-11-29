import React from 'react'
import CrudApiOpinions from '../componentes/CrudApiOpinions';
import '../css/opiniones.css'

export const opiniones = () => {
     return (
<div>
     <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
     <link  rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
     <>
    <CrudApiOpinions/>
    </>
      <footer className="text-center text-white" >
    <div className="socialLogos"><a href="https://www.facebook.com/profile.php?id=100069569205743" target="_blank"><img className="social" src="recursos/fb.png" width="44px" /></a></div>
    <div className="socialLogos2"><a href="https://www.instagram.com/azul_briones/?hl=es" target="_blank"><img className="social" src="recursos/ig.png" width="40px" /></a></div><br />Azul Gissele Briones Zavala<br />Emilio Jarey Méndez Torres
  </footer>
</div>
     )
}

export default opiniones
