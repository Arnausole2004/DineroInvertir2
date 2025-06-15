// main.js

// Inicializar AOS (Animate On Scroll)
AOS.init({
  duration: 800, // duración de la animación en ms
  easing: 'ease-in-out', // tipo de animación
  once: true, // animar solo una vez al hacer scroll
});

// Código adicional (opcional)
// Por ejemplo, smooth scroll para los links del navbar

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

