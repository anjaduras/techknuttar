document.addEventListener('DOMContentLoaded', play); // Trigger play immediately when the page content is loaded

document.getElementById('tryAgain').addEventListener('click', () => {
    play(); // Restart animation when the button is clicked
});

function play() {
    const logoTitleContainer = document.getElementById('logoTitle');
    const logoTitle = 'SåDANA'; // Final logo
    const possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}"; // Random characters for animation
    let logoRandom = '';

    // Helper function to generate random characters
    function generateRandomTitle(i, logoRandom) {
        setTimeout(function() {
            logoTitleContainer.textContent = logoRandom; // Update with random characters

            // Once we reach the final text length, apply the colored spans
            if (i === logoTitle.length) {
                logoTitleContainer.innerHTML = logoTitle
                    .split('')
                    .map(letter => `<span>${letter}</span>`)
                    .join('');
            }
        }, i * 80); // Increase the timeout for smoother animation
    }

    // Start with an empty container and fill it up with random characters
    for (let i = 0; i <= logoTitle.length; i++) {
        logoRandom = logoTitle.substr(0, i); // Add the correct number of letters
        for (let j = i; j < logoTitle.length; j++) {
            logoRandom += possible.charAt(Math.floor(Math.random() * possible.length)); // Add random chars
        }
        generateRandomTitle(i, logoRandom); // Call the function to update the logo text
    }
}
