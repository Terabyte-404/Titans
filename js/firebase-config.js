// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1HEIq1_seAm8WHiae13uNl1X_Zl5gBDU",
    authDomain: "vert-83318.firebaseapp.com",
    projectId: "vert-83318",
    storageBucket: "vert-83318.firebasestorage.app",
    messagingSenderId: "505877086867",
    appId: "1:505877086867:web:0b3e7524a79dd6a1bec366"
};

// Initialize Firebase
try {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        console.log('Firebase initialized successfully');
    } else {
        console.log('Firebase already initialized');
    }
} catch (error) {
    console.error('Firebase initialization error:', error);
}

// Initialize Firebase Authentication
const auth = firebase.auth();
const db = firebase.firestore();

// Enable persistence for offline support
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
        console.log('Firebase auth persistence enabled');
    })
    .catch((error) => {
        console.error('Error enabling auth persistence:', error);
    });
