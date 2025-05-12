document.addEventListener('DOMContentLoaded', play);
document.getElementById('tryAgain').addEventListener('click', () => {
    play();
});

function play() {
    const logoTitleContainer = document.getElementById('logoTitle');
    const logoTitle = 'SåDANA'; 
    const possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}"; 
    let logoRandom = '';

    function generateRandomTitle(i, logoRandom) {
        setTimeout(function () {
            logoTitleContainer.textContent = logoRandom; 
            // once the final text length is reached, apply colors
            if (i === logoTitle.length) {
                logoTitleContainer.innerHTML = logoTitle
                    .split('')
                    .map(letter => `<span>${letter}</span>`)
                    .join('');
            }
        }, i * 90); // animation spead
    }

    // starting with an empty container and filling it up with random characters
    for (let i = 0; i <= logoTitle.length; i++) {
        logoRandom = logoTitle.substr(0, i); // add the correct number of letters
        for (let j = i; j < logoTitle.length; j++) {
            logoRandom += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        generateRandomTitle(i, logoRandom); // call the function to update the logo text
    }
}
