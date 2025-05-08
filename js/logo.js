window.onload = play();
document.getElementById('tryAgain').addEventListener('click', () => { play() });

function play() {
    const logoTitleContainer = document.getElementById('logoTitle');
    const logoTitle = 'TECHKNUTTAR';
    const possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
    let logoRandom = '';

    // Helper function to generate random characters
    function generateRandomTitle(i, logoRandom) {
        setTimeout(function() {
            logoTitleContainer.textContent = logoRandom;
        }, i *70); // Faster timeout to make the animation smoother
    }

    for (let i = 0; i < logoTitle.length + 1; i++) {
        logoRandom = logoTitle.substr(0, i);
        for (let j = i; j < logoTitle.length; j++) {
            logoRandom += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        generateRandomTitle(i, logoRandom);
        logoRandom = '';
    }
}