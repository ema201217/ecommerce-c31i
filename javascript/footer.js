const $textoFooter1 = document.querySelector("#textoFooter1")
const $textoFooter2 = document.querySelector("#textoFooter2")
const $textoFooter3 = document.querySelector("#textoFooter3")
const $textoFooter4 = document.querySelector("#textoFooter4")
const $footerWithJs = document.querySelector("#footerWithJs")




$footerWithJs.innerHTML = `<footer class="border">
<div class="d-flex my-3  justify-content-around flex-wrap">
      <div class="col-12 col-md-4 col-lg-3 my-1 border border-2 d-flex justify-content-center text-center align-items-center" style="height: 20vh;"><h3 id="textoFooter1" class="m-0">Promos y descuentos</h3></div>
      <div class="col-12 col-md-4 col-lg-3 my-1 border border-2 d-flex justify-content-center text-center align-items-center" style="height: 20vh;"><h3 id="textoFooter2" class="m-0">Envíos gratis</h3></div>
      <div class="col-12 col-md-4 col-lg-3 my-1 border border-2 d-flex justify-content-center text-center align-items-center" style="height: 20vh;"><h3 id="textoFooter3" class="m-0">Chatea con nosotros</h3></div>
      <div class="col-12 col-md-4 col-lg-3 my-1 border border-2 d-flex justify-content-center text-center align-items-center" style="height: 20vh;"><h3 id="textoFooter4" class="m-0">Top 5 productos destacados</h3></div>
  </div>
  <!--nav inferior  -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
  <ul class="navbar-nav">
  <li class="nav-item">
  <a class="nav-link" href="#">Quienes somossss</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="#">Trabajá con nosotros</a>
  </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Promociones y descuentos</a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="#">Contacta con nosotros</a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="#">Defensa al consumidor</a>
              </li>
              </ul>
              </div>
              </div>
              </nav>
              <div class="redesSociales d-flex justify-content-center  ">
              <div class="d-flex justify-content-around w-100 mb-3 flex-sm-nowrap">
              <div class="pt-2 d-flex align-items-center">
          <a href="/404.html" target="_blank">
          <img class="redesfooter" src="/assets/imagenes/iconos/fb.png.webp" alt="logo Facebook"/>
          </a>
          <div class="d-none d-md-block">
          <a class="redes " target="_blank" href="/404.html">Facebook</a>
          </div>
          </div>
          <div class="pt-2 d-flex align-items-center">
          <a href="/404.html" target="_blank">
            <img class="redesfooter" src="/assets/imagenes/iconos/insta.png" alt="Logo Instagram"/>
          </a>
          <div  class="d-none d-md-block">
            <a class="redes" target="_blank" href="/404.html">Instagram</a>
            </div>
            </div>
            <div class="pt-2 d-flex align-items-center">
            <a href="/404.html" target="_blank">
            <img class="redesfooter" src="/assets/imagenes/iconos/twitter.png" alt="Logo Twitter"/>
            </a>
            <div class="d-none d-md-block">
            <a class="redes" target="_blank" href="/404.html">Twitter</a>
            </div>
            </div>
        <div class="pt-2 d-flex align-items-center">
        <a href="/404.html" target="_blank">
        <img class="redesfooter" src="/assets/imagenes/iconos/linkedin.png" alt="Logo LinkedIn"/>
        </a>
        <div class="d-none d-md-block">
        <a class="redes" target="_blank" href="/404.html">LinkedIn</a>
        </div>
        </div>
        </div>
        </div>
        <div>
        <p class="m-0 text-center">©Copyright - La Tiendita 2023</p>
        </div>
        </footer>`
        
      
        



// Preguntar como trabajar con esto ya que no funciona con las id


        // const textos = {
        //     "textoFooter1": "Promos y descuentos",
        //     "textoFooter2": "Envíos gratis",
        //     "textoFooter3": "Chatea con nosotros",
        //     "textoFooter4": "Top 5 productos destacados"
        //   };
        
        
        //   $textoFooter1.textContent = textos.textoFooter1
        //   $textoFooter2.textContent = textos.textoFooter2
        //   $textoFooter3.textContent = textos.textoFooter3
        //   $textoFooter4.textContent = textos.textoFooter4