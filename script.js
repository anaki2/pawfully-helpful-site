// Toggle heart like functionality
function toggleHeart(button) {
    if (button.classList.contains('liked')) {
        button.classList.remove('liked');
        button.textContent = '🤍';
    } else {
        button.classList.add('liked');
        button.textContent = '💖';
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add sparkle effect on button hover
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 30px rgba(236, 72, 153, 0.6)';
    });
    button.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});
// Test
// Test