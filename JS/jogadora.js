function renderStars(containerId, rating) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    const maxStars = 5;
    for (let i = 1; i <= maxStars; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.innerHTML = '&#9733;';

        if (i <= rating) {
            star.classList.add('selected');
        } else {
            star.classList.add('empty');
        }
        container.appendChild(star);
    }
}

const playerCurrentRating = 4.5;

document.addEventListener('DOMContentLoaded', () => {
    renderStars('playerRating', playerCurrentRating);
});