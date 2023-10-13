/*!
 * Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function() {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function(responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//navbar icon change
// Function to invert the image colors
function invertImageColors() {
    var logo = document.querySelector('.navbar-logo');
    if (window.innerWidth < 992) {
        logo.classList.add('inverted');
    } else if (window.pageYOffset > 0) {
        logo.classList.add('inverted');
    } else {
        logo.classList.remove('inverted');
    }
}

// Event listeners for scroll and resize events
window.addEventListener('scroll', invertImageColors);
window.addEventListener('resize', invertImageColors);

// Initial call to invertImageColors() to set the initial state
invertImageColors();

// Hide the loading overlay once the page content has finished loading
window.addEventListener('load', function() {
    var loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.opacity = '0';
    setTimeout(function() {
        loadingOverlay.style.display = 'none';
    }, 1000); // Delay the removal of the loading overlay to allow a fade-out effect
});

$(document).ready(function() {
    var sliderWidth = $(".slider").width();
    var containerWidth = $(".slider-container").width();

    if (containerWidth > sliderWidth) {
        $(".slider-container").css("animation", "none");
        $(".slider-container").css("transform", "translateX(0)");
    }
});

