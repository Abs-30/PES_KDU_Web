window.addEventListener('load', function() {
    var loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.opacity = '0';
    setTimeout(function() {
        loadingOverlay.style.display = 'none';
    }, 1000); // Delay the removal of the loading overlay to allow a fade-out effect
});


