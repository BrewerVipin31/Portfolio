const designerSide = document.getElementById('designerSide');
const divider = document.getElementById('divider');
const cursor = document.getElementById('cursor');
let mouseX = window.innerWidth / 2;
let currentX = 50;
let isTouching = false;

// ── MOUSE: custom cursor + split ─────────────────────────────────────────────
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    mouseX = e.clientX;
});

// ── TOUCH: drag finger to move the divider ───────────────────────────────────
document.addEventListener('touchstart', (e) => {
    isTouching = true;
    mouseX = e.touches[0].clientX;
}, { passive: true });

document.addEventListener('touchmove', (e) => {
    mouseX = e.touches[0].clientX;
    // Prevent page scroll while swiping the split
    e.preventDefault();
}, { passive: false });

document.addEventListener('touchend', (e) => {
    isTouching = false;
    // Navigate on tap/release — same logic as click
    if (currentX > 45 && currentX < 55) return;
    if (currentX < 50) {
        window.location.href = 'designer.html';
    } else {
        window.location.href = 'developer.html';
    }
});

// ── SMOOTH ANIMATION LOOP ────────────────────────────────────────────────────
function updateSplit() {
    const windowWidth = window.innerWidth;
    const targetX = (mouseX / windowWidth) * 100;

    // Slightly faster interpolation on touch so it feels responsive
    const speed = isTouching ? 0.2 : 0.1;
    currentX += (targetX - currentX) * speed;

    designerSide.style.clipPath =
        `polygon(${currentX}% 0, 100% 0, 100% 100%, ${currentX}% 100%)`;
    divider.style.left = `${currentX}%`;

    requestAnimationFrame(updateSplit);
}

updateSplit();

// ── CLICK (desktop) ──────────────────────────────────────────────────────────
document.addEventListener('click', () => {
    if (currentX > 45 && currentX < 55) return;
    if (currentX < 50) {
        window.location.href = 'designer.html';
    } else {
        window.location.href = 'developer.html';
    }
});

// ── HINT TEXT (safe — only runs if element exists) ───────────────────────────
setTimeout(() => {
    const hint = document.querySelector('.hint');
    if (hint) {
        hint.style.transition = 'opacity 1s ease';
        hint.style.opacity = '0';
    }
}, 4000);