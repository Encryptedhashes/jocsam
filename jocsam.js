document.addEventListener('DOMContentLoaded', function() {
    const navToggleBtn = document.querySelector('.toggle-nav-menu');
    const navMenu = document.querySelector('.nav-menu');

    // Initially hide the nav menu
    navMenu.classList.add('slide-out-menu');

    // Toggle navigation menu on click
    navToggleBtn.addEventListener('click', function() {
        // Check if the menu is currently open
        if (navMenu.classList.contains('slide-in-menu')) {
            // If it is open, close it
            navMenu.classList.remove('slide-in-menu');
            navMenu.classList.add('slide-out-menu');
            navToggleBtn.classList.remove('close');
            navToggleBtn.classList.add('open');
        } else {
            // If it is closed, open it
            navMenu.classList.remove('slide-out-menu');
            navMenu.classList.add('slide-in-menu');
            navToggleBtn.classList.remove('open');
            navToggleBtn.classList.add('close');
        }
    });
});