// Add smooth scrolling to "Scroll Down" button
document.querySelector('.scroll-down').addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('#about').offsetTop,
        behavior: 'smooth',
    });
});
