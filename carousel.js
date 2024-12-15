const track = document.getElementById('carouselTrack');
const prevButton = document.querySelector('.carousel-button.left');
const nextButton = document.querySelector('.carousel-button.right');
const images = document.querySelectorAll('.carousel img');
let index = 0; // Current index of the carousel
const imageCount = images.length;
const displayTime = 15000; // 15 seconds per image
const transitionTime = 500; // 500ms for CSS transition
let autoScroll; // To hold the setInterval instance

// Prevent multiple clicks during transition
let isAnimating = false;

// Function to set carousel width dynamically
function setCarouselWidth() {
    const trackWidth = images.length * 100;
    track.style.width = `${trackWidth}%`;
}

// Function to move to the next slide
function moveToNext() {
    if (isAnimating) return; // Prevent rapid interactions
    isAnimating = true;

    index = (index + 1) % imageCount; // Increment index, loop back to 0 if at the end
    updateCarousel();

    setTimeout(() => (isAnimating = false), transitionTime); // Reset animation flag after transition
}

// Function to move to the previous slide
function moveToPrev() {
    if (isAnimating) return; // Prevent rapid interactions
    isAnimating = true;

    index = (index - 1 + imageCount) % imageCount; // Decrement index, loop back to last if at the start
    updateCarousel();

    setTimeout(() => (isAnimating = false), transitionTime); // Reset animation flag after transition
}

// Function to update the carousel position
function updateCarousel() {
    const translateX = -index * 100; // Calculate the new position
    track.style.transform = `translateX(${translateX}%)`; // Move the track
}

// Function to start the auto-scroll
function startAutoScroll() {
    autoScroll = setInterval(moveToNext, displayTime); // Auto-scroll every displayTime milliseconds
}

// Function to stop the auto-scroll (when manually interacting)
function stopAutoScroll() {
    clearInterval(autoScroll); // Stop the interval
}

// Event listeners for manual navigation
nextButton.addEventListener('click', () => {
    stopAutoScroll(); // Pause auto-scroll
    moveToNext();
    startAutoScroll(); // Restart auto-scroll
});

prevButton.addEventListener('click', () => {
    stopAutoScroll(); // Pause auto-scroll
    moveToPrev();
    startAutoScroll(); // Restart auto-scroll
});

// Initial setup
setCarouselWidth();
window.addEventListener('resize', setCarouselWidth); // Recalculate width on window resize

// Start auto-scroll
startAutoScroll();
