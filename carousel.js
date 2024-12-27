const track = document.getElementById('carouselTrack');
const prevButton = document.querySelector('.carousel-button.left');
const nextButton = document.querySelector('.carousel-button.right');
const images = document.querySelectorAll('.carousel img');
const imageCount = images.length;
const displayTime = 10000; // 10 seconds per image
let index = 0; // Current index of the carousel
let autoScroll; // To store the auto-scroll interval
let isAnimating = false; // Prevent fast multiple clicks

// Function to update the carousel position
function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

// Function to move to the next slide
function moveToNext() {
    if (isAnimating) return;
    isAnimating = true;

    index = (index + 1) % imageCount;
    updateCarousel();

    setTimeout(() => (isAnimating = false), 500); // Unlock after transition
}

// Function to move to the previous slide
function moveToPrev() {
    if (isAnimating) return;
    isAnimating = true;

    index = (index - 1 + imageCount) % imageCount;
    updateCarousel();

    setTimeout(() => (isAnimating = false), 500); // Unlock after transition
}

// Auto-scroll every 10 seconds
function startAutoScroll() {
    autoScroll = setInterval(moveToNext, displayTime);
}

// Stop auto-scroll
function stopAutoScroll() {
    clearInterval(autoScroll);
}

// Event listeners
nextButton.addEventListener('click', () => {
    stopAutoScroll();
    moveToNext();
    startAutoScroll();
});

prevButton.addEventListener('click', () => {
    stopAutoScroll();
    moveToPrev();
    startAutoScroll();
});

// Initialize
startAutoScroll();
