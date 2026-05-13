// Section navigation
function showSection(sectionId) {
    // Remove active class from all sections
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to selected section
    document.getElementById(sectionId).classList.add('active');

    // Add active class to clicked nav link
    event.target.classList.add('active');
}

// Set initial active state
document.querySelector('.nav-link').classList.add('active');

// Form submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! I will respond to your message soon.');
    e.target.reset();
});