function flipCard() {
    const card = document.querySelector('.card');
    card.classList.toggle('flipped');
}

function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

document.addEventListener('DOMContentLoaded', () => {
    const name = getParameterByName('name') || 'Friend';
    document.getElementById('name').textContent = name;
});
