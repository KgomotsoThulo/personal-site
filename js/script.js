
function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = Math.random() * 100 + 'vw';
    raindrop.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.querySelector('.rain').appendChild(raindrop);

    // Remove raindrop after it falls
    setTimeout(() => {
        raindrop.remove();
    }, 5000);
}

// Generate multiple raindrops
setInterval(createRaindrop, 100);
