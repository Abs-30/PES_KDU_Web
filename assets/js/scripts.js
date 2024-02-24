/*!
 * Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
//
// Scripts
// 
document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.classList.remove('navbar-trans');
        navbar.classList.add('navbar-scrolled', 'sticky');
    } else {
        navbar.classList.add('navbar-trans');
    }

    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            navbar.classList.remove('navbar-trans');
            navbar.classList.add('navbar-scrolled', 'sticky');
        } else {
            navbar.classList.remove('navbar-scrolled', 'sticky');
            navbar.classList.add('navbar-trans');
        }
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
window.addEventListener('load', function () {
    var loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.opacity = '0';
    setTimeout(function () {
        loadingOverlay.style.display = 'none';
    }, 1000); // Delay the removal of the loading overlay to allow a fade-out effect
});

$(document).ready(function () {
    var sliderWidth = $(".slider").width();
    var containerWidth = $(".slider-container").width();

    if (containerWidth > sliderWidth) {
        $(".slider-container").css("animation", "none");
        $(".slider-container").css("transform", "translateX(0)");
    }
});

