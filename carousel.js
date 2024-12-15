const track = document.getElementById('carouselTrack');
const prevButton = document.querySelector('.carousel-button.left');
const nextButton = document.querySelector('.carousel-button.right');
const images = document.querySelectorAll('.carousel img');
const imageCount = images.length;
const displayTime = 10000; // 10 seconds per image
const transitionTime = 500; // 500ms for CSS transition
let index = 0; // Current index of the carousel
let autoScroll; // To store the auto-scroll interval

// Prevent overlapping animations
let isAnimating = false;

// Function to update the carousel position
function updateCarousel() {
    const translateX = -index * 100; // Calculate the new position in %
    track.style.transform = `translateX(${translateX}%)`; // Apply the transform
}

// Function to move to the next slide
function moveToNext() {
    if (isAnimating) return; // Prevent overlapping animations
    isAnimating = true;

    index = (index + 1) % imageCount; // Loop back to the first image after the last
    updateCarousel();

    setTimeout(() => (isAnimating = false), transitionTime); // Unlock animations after transition
}

// Function to move to the previous slide
function moveToPrev() {
    if (isAnimating) return; // Prevent overlapping animations
    isAnimating = true;

    index = (index - 1 + imageCount) % imageCount; // Loop back to the last image from the first
    updateCarousel();

    setTimeout(() => (isAnimating = false), transitionTime); // Unlock animations after transition
}

// Function to start auto-scroll
function startAutoScroll() {
    autoScroll = setInterval(moveToNext, displayTime); // Automatically move to next image every 10 seconds
}

// Function to stop auto-scroll
function stopAutoScroll() {
    clearInterval(autoScroll); // Stop the auto-scroll interval
}

// Event listeners for navigation buttons
nextButton.addEventListener('click', () => {
    stopAutoScroll(); // Pause auto-scroll
    moveToNext(); // Move to the next image
    startAutoScroll(); // Restart auto-scroll
});

prevButton.addEventListener('click', () => {
    stopAutoScroll(); // Pause auto-scroll
    moveToPrev(); // Move to the previous image
    startAutoScroll(); // Restart auto-scroll
});

// Set the width of the carousel dynamically
function setCarouselWidth() {
    const trackWidth = imageCount * 100;
    track.style.width = `${trackWidth}%`;
}

// Initialize carousel width and auto-scroll
setCarouselWidth();
window.addEventListener('resize', setCarouselWidth); // Adjust width on window resize
startAutoScroll(); // Start auto-scroll on page load
