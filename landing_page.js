document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#004080';
        } else {
            navbar.style.backgroundColor = '#0056a1';
        }
    });
});
