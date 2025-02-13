document.addEventListener('DOMContentLoaded', function() {


    let toShopOptions = document.getElementById('ind_products');
        toShopOptions.addEventListener('change', () => {
            toShopOptions = toShopOptions.value
            if (toShopOptions) {
                document.getElementById(toShopOptions).scrollIntoView({behavior: "smooth"})
            }
        })



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

    // Close the nav menu when a link is clicked
    navMenu.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            navMenu.classList.remove('slide-in-menu');
            navMenu.classList.add('slide-out-menu');
            navToggleBtn.classList.remove('close');
            navToggleBtn.classList.add('open');
        }
    });

    // Close the nav menu when the window is resized
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('slide-in-menu');
            navMenu.classList.add('slide-out-menu');
            navToggleBtn.classList.remove('close');
            navToggleBtn.classList.add('open');
        }
    });

    // Close the nav menu when the user clicks outside of it
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !navToggleBtn.contains(event.target)) {
            navMenu.classList.remove('slide-in-menu');
            navMenu.classList.add('slide-out-menu');
            navToggleBtn.classList.remove('close');
            navToggleBtn.classList.add('open');
        }
    });
});