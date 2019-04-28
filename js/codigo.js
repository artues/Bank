var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("miSlide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

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
