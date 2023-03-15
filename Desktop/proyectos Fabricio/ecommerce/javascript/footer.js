const $textoFooter1 = document.querySelector("#textoFooter1")
const $textoFooter2 = document.querySelector("#textoFooter2")
const $textoFooter3 = document.querySelector("#textoFooter3")
const $textoFooter4 = document.querySelector("#textoFooter4")

const textos = {
    "textoFooter1": "Promos y descuentos",
    "textoFooter2": "Envíos gratis",
    "textoFooter3": "Chatea con nosotros",
    "textoFooter4": "Top 5 productos destacados"
  };


  $textoFooter1.textContent = textos.textoFooter1
  $textoFooter2.textContent = textos.textoFooter2
  $textoFooter3.textContent = textos.textoFooter3
  $textoFooter4.textContent = textos.textoFooter4