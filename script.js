// Crear partículas flotantes
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const size = Math.random() * 8 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      const duration = Math.random() * 15 + 10;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      container.appendChild(particle);
    }
  }
  
  // Scroll suave entre secciones
  function scrollToNextSection() {
    const currentSection = document.elementFromPoint(window.innerWidth/2, window.innerHeight/2).closest('section');
    const nextSection = currentSection.nextElementSibling;
    
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Animaciones al hacer scroll
  function setupScrollAnimations() {
    const scrollElements = document.querySelectorAll('[data-scroll]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    scrollElements.forEach(el => {
      observer.observe(el);
    });
  }
  
  // Contador regresivo para el 15 de agosto de 2025
  function updateCountdown() {
    const weddingDate = new Date('August 15, 2025 17:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  }
  
  // Inicializar todo cuando el DOM esté listo
  document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    setupScrollAnimations();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Agregar evento de clic a las flechas
    document.querySelectorAll('.scroll-down').forEach(arrow => {
      arrow.addEventListener('click', scrollToNextSection);
    });
  });

  const modal = document.getElementById("miModal");
const contenido = document.getElementById("contenidoActual");

let indice = 0;
let slides = [];

// Slides para el botón 1 (imagen + mapa + botón Waze)
const slidesWaze = [
  `
    <h6>* Haz clic para agrandar la imagen *</h6>
    <img class="zoomable" src="assets/mapCasaSantaLucia.jpeg" alt="Mapa de cómo llegar" onclick="abrirZoom(this)">
    <p>¡Mapa del lugar de la recepción!</p>

    `,
  `
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.191557321325!2d-90.59099352395401!3d14.588157977379337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a0be1cb707b5%3A0x2e3b9c69d353d8cc!2sCasa%20Santa%20Lucia!5e0!3m2!1ses-419!2sgt!4v1754329109567!5m2!1ses-419!2sgt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <p>Haz clic para abrir la ubicación en Waze:</p>
    <p>⬇️⬇️⬇️</p>
    <a class="boton-waze" href="https://ul.waze.com/ul?venue_id=176554130.1765606835.7048776&overview=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank">
      Abrir en Waze
    </a>
  `
];

// Slides para el botón 2 (Google Maps iframe)
const slidesGoogleMaps = [
  `
  <img src="https://cmsphoto.ww-cdn.com/superstatic/1719356/art/default/30631783-29161924.jpg?v=1549925989" alt="Lugar del evento">
  <p>¡La Iglesia donde nos casaremos!</p>
  <a class="boton-waze" href="https://m.arzobispadodeguatemala.com/directorio-de-parroquias/i/30631783/parroquia-san-juan-bosco" target="_blank">
    Info. de la Iglesia
  </a>
`,
  `
    <p>Aquí puedes ver una vista previa en Google Maps:</p>
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.747722564999!2d-90.55919462585013!3d14.613442076764054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a1a9bac89143%3A0xd6393bae18beed0e!2sParroquia%20San%20Juan%20Bosco!5e0!3m2!1ses-419!2sgt!4v1754284068312!5m2!1ses-419!2sgt"
      allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
    </iframe>
    <p>Haz clic para abrir la ubicación en Waze:</p>
    <p>⬇️⬇️⬇️</p>
    <a class="boton-waze" href="https://ul.waze.com/ul?venue_id=176554130.1765606835.7048776&overview=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank">
      Abrir en Waze
    </a>
  `
];

// Abrir el modal con el contenido correcto
function abrirModal(tipo) {
  slides = tipo === 1 ? slidesWaze : slidesGoogleMaps;
  indice = 0;
  mostrarContenido();
  modal.style.display = "flex";
}

function cerrarModal() {
  modal.style.display = "none";
}

function mostrarContenido() {
  contenido.innerHTML = slides[indice];
}

function anterior() {
  indice = (indice - 1 + slides.length) % slides.length;
  mostrarContenido();
}

function siguiente() {
  indice = (indice + 1) % slides.length;
  mostrarContenido();
}

function abrirZoom(img) {
  const zoomOverlay = document.createElement("div");
  zoomOverlay.classList.add("zoom-overlay");

  const imagenGrande = document.createElement("img");
  imagenGrande.src = img.src;
  imagenGrande.classList.add("imagen-zoom");

  zoomOverlay.appendChild(imagenGrande);
  document.body.appendChild(zoomOverlay);

  zoomOverlay.onclick = () => {
    document.body.removeChild(zoomOverlay);
  };
}

window.onclick = function(event) {
  if (event.target === modal) {
    cerrarModal();
  }
}
