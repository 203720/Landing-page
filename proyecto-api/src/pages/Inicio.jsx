import React from "react";
import '../css/inicio.css'

const inicio =()=>{
     return(
         <div>
  <section>
    <div className="presentacion">
      <div className="slider-frame">
        <div className="slide-images">
          <div className="img-container">
            <div className="circle"><img className="imagen" src="recursos/4.jpg" /></div>
          </div>
          <div className="img-container">
            <div className="circle"><img className="imagen" src="recursos/1.jpg" /></div>
          </div>
          <div className="img-container">
            <div className="circle"><img className="imagen" src="recursos/5.jpg" /></div>
          </div>
        </div>
      </div>
      <div className="logo"><img src="recursos/logo2.png" width="60px" /></div>
      <div className="text">M A J O R</div>
      <div className="text2">La mejor ropa vintage</div>
    </div>
  </section>
  <section>
    <div className="ofertas">
      <div className="circle"><img className="imagen" src="recursos/offer5.jpg" /></div>
      <center>
        <h1>OFERTAS</h1>
      </center>
      <div className="card-colums">
        <div className="card" style={{width: '18rem'}}>
          <img className="card-img-top" src="recursos/camisa_h.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Camisa - $199</h5>
            <p className="card-text">Camisa beige con patrón caballero<br />Tallas: XL - L - M - S<br />Envío grátis</p>
            <a href="compra.html" className="btn btn-primary">Comprar</a>
          </div>
        </div>
        <div className="card" style={{width: '18rem'}}>
          <img className="card-img-top" src="recursos/pantalones_m.jpeg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Pantalones - $289</h5>
            <p className="card-text">Pantalón mezclilla dama<br />Tallas: XL - L - M - S - XS<br />Envío grátis</p>
            <a href="compra.html" className="btn btn-primary">Comprar</a>
          </div>
        </div>
        <div className="card" style={{width: '18rem'}}>
          <img className="card-img-top" src="recursos/bolsa.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Bolsa - $389</h5>
            <p className="card-text">Bolso elegante dama<br />Colores: Blanco con negro<br />Envío grátis</p>
            <a href="compra.html" className="btn btn-primary">Comprar</a>
          </div>
        </div>
      </div>
      <div className="offerts">
        <img className="oferta" src="recursos/offer2.png" alt="ofertas" />
        <img className="oferta" src="recursos/offer2.png" alt="ofertas" />
        <img className="oferta" src="recursos/offer2.png" alt="ofertas" />
      </div>
    </div>
  </section>
  <section>
    <div className="wrapper">
      <div className="mostsold">
        <center>
          <h2>Lo mas vendido</h2>
        </center>
        <div className="presentacion">
          <div className="slider-frame2">
            <div className="slide-images2">
              <div className="img-container2">
                <div className="card-colums2">
                  <div className="card2" style={{width: '18rem'}}>
                    <img className="card-img-top" src="recursos/boina.jpg" alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Boina - $189</h5>
                      <p className="card-text">Boina azul suiza<br />Colores: Azul / Negra<br />Envío grátis</p>
                      <a href="compra.html" className="btn btn-primary">Comprar</a>
                    </div>
                  </div>
                  <div className="card2" style={{width: '18rem'}}>
                    <img className="card-img-top" src="recursos/Imagen1.jpg" alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Camisa colores - $199</h5>
                      <p className="card-text">Camisa patrón colores caballero<br />Tallas: XL - L - M - S<br />Envío grátis</p>
                      <a href="compra.html" className="btn btn-primary">Comprar</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="img-container">
                <div className="card-colums2">
                  <div className="card2" style={{width: '18rem'}}>
                    <img className="card-img-top" src="recursos/Imagen2.jpg" alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Vestido - $319</h5>
                      <p className="card-text">Vestido rosa con botónes<br />Tallas: XL - L - M - S - XS<br />Envío grátis</p>
                      <a href="compra.html" className="btn btn-primary">Comprar</a>
                    </div>
                  </div>
                  <div className="card2" style={{width: '18rem'}}>
                    <img className="card-img-top" src="recursos/Imagen3.jpg" alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Sueter Chaleco - $299</h5>
                      <p className="card-text">Sueter tipo chaleco caballero<br />Tallas: XL - L - M - S<br />Envío grátis</p>
                      <a href="compra.html" className="btn btn-primary">Comprar</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="img-container">
                <div className="card-colums2">
                  <div className="card2" style={{width: '18rem'}}>
                    <img className="card-img-top" src="recursos/boina_m.jpeg" alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Boina Militar - $299</h5>
                      <p className="card-text">Boina militar dama<br />Colores: Negro<br />Envío grátis</p>
                      <a href="compra.html" className="btn btn-primary">Comprar</a>
                    </div>
                  </div>
                  <div className="card2" style={{width: '18rem'}}>
                    <img className="card-img-top" src="recursos/Imagen4.jpg" alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Vestido Stripes - $329</h5>
                      <p className="card-text">Vestido rayas blancas azules<br />Tallas: XL - L - M - S - XS<br />Envío grátis</p>
                      <a href="compra.html" className="btn btn-primary">Comprar</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popular">
        <center>
          <h2>Tendencia</h2>
        </center>
        <div className="presentacion">
          <div className="slider-frame2">
            <div className="slide-images3">
              <div className="img-container2">
                <div className="card-colums2">
                  <div className="card2" style={{width: '18rem'}}>
                    <img className="card-img-top" src="recursos/Imagen5.jpg" alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Vestido Negro - $349</h5>
                      <p className="card-text">Vestido negro holgado corto<br />Tallas: XL - L - M - S - XS<br />Envío grátis</p>
                      <a href="compra.html" className="btn btn-primary">Comprar</a>
                    </div>
                  </div>
                  <div className="card2" style={{width: '18rem'}}>
                    <img className="card-img-top" src="recursos/boina2.jpeg" alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Boina - $199</h5>
                      <p className="card-text">Boina rosa palo unisex<br />Colores: Rosa palo<br />Envío grátis</p>
                      <a href="compra.html" className="btn btn-primary">Comprar</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="img-container">
                <div className="card-colums2">
                  <div className="card2" style={{width: '18rem'}}>
                    <img className="card-img-top" src="recursos/Imagen9.jpg" alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Camisa Algodón - $349</h5>
                      <p className="card-text">Camisa tela suave caballero<br />Tallas: XL - L - M - S<br />Envío grátis</p>
                      <a href="compra.html" className="btn btn-primary">Comprar</a>
                    </div>
                  </div>
                  <div className="card2" style={{width: '18rem'}}>
                    <img className="card-img-top" src="recursos/Imagen6.jpg" alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Camisa Tirantes - $599</h5>
                      <p className="card-text">Camisa con tirantes pajarita<br />Tallas: XL - L - M - S<br />Envío grátis</p>
                      <a href="compra.html" className="btn btn-primary">Comprar</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="img-container">
                <div className="card-colums2">
                  <div className="card2" style={{width: '18rem'}}>
                    <img className="card-img-top" src="recursos/Imagen11.jpg" alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Camisa Stripes - $199</h5>
                      <p className="card-text">Camisa rayas negras caballero<br />Tallas: XL - L - M - S<br />Envío grátis</p>
                      <a href="compra.html" className="btn btn-primary">Comprar</a>
                    </div>
                  </div>
                  <div className="card2" style={{width: '18rem'}}>
                    <img className="card-img-top" src="recursos/imagen7.jpg" alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Pantalones hombre - $299</h5>
                      <p className="card-text">Pantalones vintage slim<br />Tallas: XL - L - M - S<br />Envío grátis</p>
                      <a href="compra.html" className="btn btn-primary">Comprar</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

<footer class="bg-dark text-center text-white">
  <div class="container p-4 pb-0">
    <section class="mb-4">
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-twitter"></i
      ></a>

      
    </section>
  </div>
  <div class="text-center p-3" styli="background-color: rgba(0, 0, 0, 0.2);">
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</footer>

  <footer className="text-center text-white" >
    <div className="socialLogos"><a href="https://www.facebook.com/profile.php?id=100069569205743" target="_blank"><img className="social" src="recursos/fb.png" width="44px" /></a></div>
    <div className="socialLogos2"><a href="https://www.instagram.com/azul_briones/?hl=es" target="_blank"><img className="social" src="recursos/ig.png" width="40px" /></a></div><br />Azul Gissele Briones Zavala<br />Emilio Jarey Méndez Torres
  </footer>
</div>
 
     );
};

export default inicio