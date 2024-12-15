const track = document.getElementById('carouselTrack');
const prevButton = document.querySelector('.carousel-button.left');
const nextButton = document.querySelector('.carousel-button.right');
const images = document.querySelectorAll('.carousel img');
let index = 0;
const imageCount = images.length;
const displayTime = 15000; // 15 seconds per image
let isAnimating = false; // Flag to prevent rapid clicks

// Ajuste la largeur du carrousel dynamiquement
function setCarouselWidth() {
    const trackWidth = images.length * 100;
    track.style.width = `${trackWidth}%`;
}

// Function to move to the next slide
function moveToNext() {
    if (isAnimating) return; // Ignore if already animating
    isAnimating = true;

    index = (index + 1) % imageCount;
    updateCarousel();

    setTimeout(() => {
        isAnimating = false; // Allow new actions after the transition ends
    }, 500); // Same as the CSS transition duration
}

// Function to move to the previous slide
function moveToPrev() {
    if (isAnimating) return; // Ignore if already animating
    isAnimating = true;

    index = (index - 1 + imageCount) % imageCount;
    updateCarousel();

    setTimeout(() => {
        isAnimating = false; // Allow new actions after the transition ends
    }, 500); // Same as the CSS transition duration
}

// Function to update the carousel position
function updateCarousel() {
    const translateX = -index * 100;
    track.style.transform = `translateX(${translateX}%)`;
}

// Auto-scroll every 15 seconds
const autoScroll = setInterval(moveToNext, displayTime);

// Event listeners for manual navigation
nextButton.addEventListener('click', () => {
    clearInterval(autoScroll); // Reset auto-scroll timer
    moveToNext();
});

prevButton.addEventListener('click', () => {
    clearInterval(autoScroll); // Reset auto-scroll timer
    moveToPrev();
});

// Initial setup
setCarouselWidth();
window.addEventListener('resize', setCarouselWidth);

