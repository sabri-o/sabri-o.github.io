const galleryInner = document.querySelector('.gallery-inner');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let isDragging = false;
let startX;
let scrollLeft;

// Variables pour l'animation automatique
let autoScrollInterval;
let autoScrollSpeed = 5; // Vitesse de défilement automatique (pixels/seconde)

// Fonction pour l'animation automatique
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    galleryInner.scrollLeft += autoScrollSpeed;
  }, 1000 / 60); // 60 FPS
}

// Fonction pour arrêter l'animation automatique
function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Gestion du glisser-déposer (similaire à votre code)
galleryInner.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  scrollLeft = galleryInner.scrollLeft;
  stopAutoScroll(); // Arrêter l'animation automatique pendant le glisser-déposer
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  // Redémarrer l'animation automatique après le glisser-déposer
  startAutoScroll(); 
});

galleryInner.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  galleryInner.scrollLeft = scrollLeft - (e.clientX - startX);
});

// Gestion du bouton "prev"
prevButton.addEventListener('click', () => {
  galleryInner.scrollLeft -= 100; // Ajuster la valeur selon vos besoins
});

// Gestion du bouton "next"
nextButton.addEventListener('click', () => {
  galleryInner.scrollLeft += 100; // Ajuster la valeur selon vos besoins
});

// Démarrer l'animation automatique au chargement de la page
startAutoScroll();
