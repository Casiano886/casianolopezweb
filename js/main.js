// Selecciona el botón del menú hamburguesa
const menuBtn = document.getElementById("menuBtn");
// Selecciona el contenedor de enlaces de navegación
const navLinks = document.getElementById("navLinks")

// Añade el evento click al botón del menú
menuBtn.addEventListener("click", () => {
    // Alterna la clase active para mostrar/ocultar el menú
    navLinks.classList.toggle("active");
    // Si el menú está activo, cambia el icono y el atributo aria-expanded
    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML = "⨉";
        menuBtn.setAttribute("aria-expanded", "true")
    } else {
        // Si no está activo, vuelve al icono hamburguesa
        menuBtn.innerHTML = "☰";
        menuBtn.setAttribute("aria-expanded",
        "false")
    }
});


// Selecciona el contenedor principal del carrusel
const carousel = document.getElementById("carousel");
// Selecciona el botón anterior
const prevBtn = document.getElementById("prevBtn");
// Selecciona el botón siguiente
const nextBtn = document.getElementById("nextBtn");

// Índice de la diapositiva actual
let currentIndex = 0;
// Selecciona todos los elementos del carrusel
const items = document.querySelectorAll(".carousel__div");
// Cuenta cuántas diapositivas hay en total
const totalItems = items.length;

// Función que mueve el carrusel según el índice actual
function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Función que calcula el siguiente índice y actualiza el carrusel
function goToSlide(index) {
    currentIndex = (index + totalItems) % totalItems;
    updateCarousel();
}

// Mueve el carrusel una diapositiva hacia atrás al hacer click
prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
// Mueve el carrusel una diapositiva hacia adelante al hacer click
nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));

// Inicializa el carrusel en la primera diapositiva
updateCarousel();