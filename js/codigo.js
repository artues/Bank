//**********SLIDE*************//

var slideIndex = 1;
showSlides(slideIndex);

// Botones Siguiente-Anterior
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Control de las imagenes
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  var i;   // Declara variable
  var slides = document.getElementsByClassName("miSlide");  // Selecciona todos los elementos con la class name miSlide y lo mete en una variable
  if (n > slides.length) {slideIndex = 1} // Si el parametro n es mayor que el numero de slides, poner el index a 1
  if (n < 1) {slideIndex = slides.length}// Si el parametro n es menor que 1, poner el index al total de slides
  for (i = 0; i < slides.length; i++) { //loop que muestra las slides como "none" (no las muestra).
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block"; //muestra solo la slide que está definida en el index (-1 porque el array empieza en 0)
}

//**********DIALOGO MODAL*************//

// Declara la Caja-modal
var modal = document.getElementById('cajaModal');

// Declara el botón que abre la caja
var btn = document.getElementById("boton");

// Declara el elemento span que cierra la caja [0]=primer span con ese class name (por si hubiese algun otro)
var span = document.getElementsByClassName("cerrar")[0];

// Cuando se haga click sobre el boton , se abrirá la caja
btn.onclick = function() {
  modal.style.display = "block";
}
// Cuando el usuario haga click en cerrar (x), se cerrará caja
span.onclick = function() {
modal.style.display = "none";
}
// Cuando el usuario haga click fuera de la caja moda, ésta se cerrará
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
