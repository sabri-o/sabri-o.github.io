const track = document.getElementById('carouselTrack');
const prevButton = document.querySelector('.carousel-button.left');
const nextButton = document.querySelector('.carousel-button.right');
const images = document.querySelectorAll('.carousel img');
let index = 0;
const imageCount = images.length;
const displayTime = 10000; // 10 seconds per image

// Ajuste la largeur du carrousel dynamiquement
function setCarouselWidth() {
    const trackWidth = images.length * 100;
    track.style.width = `${trackWidth}%`;
}

// Function to move to the next slide
function moveToNext() {
    index = (index + 1) % imageCount;
    updateCarousel();
}

// Function to move to the previous slide
function moveToPrev() {
    index = (index - 1 + imageCount) % imageCount;
    updateCarousel();
}

// Function to update the carousel position
function updateCarousel() {
    const translateX = -index * 100;
    track.style.transform = `translateX(${translateX}%)`;
}

// Auto-scroll every 10 seconds
setInterval(moveToNext, displayTime);

// Event listeners for manual navigation
nextButton.addEventListener('click', moveToNext);
prevButton.addEventListener('click', moveToPrev);

// Initial setup
setCarouselWidth();
window.addEventListener('resize', setCarouselWidth);
