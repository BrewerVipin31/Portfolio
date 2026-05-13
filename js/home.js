const designerSide = document.getElementById('designerSide');
const divider = document.getElementById('divider');
const cursor = document.getElementById('cursor');
let mouseX = window.innerWidth / 2;
let currentX = 50;

// Custom cursor tracking
document.addEventListener('mousemove', (e) => {
    // Update custom cursor position
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // Track mouse X position for split effect
    mouseX = e.clientX;
    updateSplit();
});


// Smooth animation loop
function updateSplit() {
    const windowWidth = window.innerWidth;
    const targetX = (mouseX / windowWidth) * 100;

    // Smooth interpolation for buttery smooth movement
    currentX += (targetX - currentX) * 0.1;

    // Update clip-path for designer side (reveals from right)
    // When cursor is at left (0%), designer side shows from 100% to 100% (hidden)
    // When cursor is at right (100%), designer side shows from 0% to 100% (full)
    designerSide.style.clipPath = `polygon(${currentX}% 0, 100% 0, 100% 100%, ${currentX}% 100%)`;

    // Update divider position
    divider.style.left = `${currentX}%`;

    requestAnimationFrame(updateSplit);
}

// Start the animation loop
updateSplit();

// // Cursor hover effects
// const interactiveElements = document.querySelectorAll('.skill-pill, a');
// interactiveElements.forEach(el => {
//     el.addEventListener('mouseenter', () => {
//         cursor.classList.add('active');
//     });
//     el.addEventListener('mouseleave', () => {
//         cursor.classList.remove('active');
//     });
// });

document.addEventListener("click", () => {

    const splitPoint = currentX; // already in %
    if (currentX > 45 && currentX < 55) return;
    if (splitPoint < 50) {
        // More developer side visible
        window.location.href = "designer.html";
    } else {
        // More designer side visible
        window.location.href = "developer.html";
    }

});


// Hide hint after a few seconds
setTimeout(() => {
    const hint = document.querySelector('.hint');
    hint.style.transition = 'opacity 1s ease';
    hint.style.opacity = '0';
}, 4000);
