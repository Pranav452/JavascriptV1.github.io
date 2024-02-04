document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.querySelector('.button--yes');
    const noButton = document.querySelector('.button--no');

    // Set initial positions
    yesButton.style.position = 'relative';
    noButton.style.position = 'relative';
    noButton.style.left = '10px'; // Adjust the initial left position as needed

    // Hover event for the "No" button
    noButton.addEventListener('mouseover', moveOnHover);

    function moveOnHover() {
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        // Adjust the maximum values for a bit more wandering
        const i = Math.max(Math.min(Math.floor(Math.random() * 300), window.innerWidth - buttonWidth - 10), 10);
        const j = Math.max(Math.min(Math.floor(Math.random() * 300), window.innerHeight - buttonHeight - 10), 10);

        noButton.style.left = i + 'px';
        noButton.style.top = j + 'px';
    }
});
