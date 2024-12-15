const galleryInner = document.querySelector('.gallery-inner');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let isDragging = false;
let startX;
let scrollLeft;

galleryInner.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  scrollLeft = galleryInner.scrollLeft;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

galleryInner.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  galleryInner.scrollLeft = scrollLeft - (e.clientX - startX);
});

// ... code pour l'animation automatique et le gestion des boutons ...
