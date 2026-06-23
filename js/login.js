// Admin Authentication with Firebase
function checkAuth() {
    // Check if user is authenticated
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            try {
                // Check if user has admin role
                const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
                const userData = userDoc.data();
                
                if (userData && userData.role === 'admin') {
                    // User is admin, redirect to admin panel
                    window.location.href = 'admin-enhanced.html';
                } else {
                    // User is not admin, show error
                    showError('You do not have admin privileges.');
                }
            } catch (error) {
                console.error('Error checking admin status:', error);
                showError('Authentication error. Please try again.');
            }
        }
        // If not authenticated, show login form
    });
}

// Admin login function
function login(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            
            // Check if user has admin role
            const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
            const userData = userDoc.data();
            
            if (userData && userData.role === 'admin') {
                // User is admin, redirect to admin panel
                window.location.href = 'admin-enhanced.html';
            } else {
                // User is not admin
                firebase.auth().signOut();
                showError('You do not have admin privileges.');
            }
        })
        .catch((error) => {
            console.error('Login error:', error);
            let errorMessage = 'Login failed. Please try again.';
            
            switch (error.code) {
                case 'auth/user-not-found':
                    errorMessage = 'No account found with this email.';
                    break;
                case 'auth/wrong-password':
                    errorMessage = 'Incorrect password.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'Invalid email address.';
                    break;
                default:
                    errorMessage = error.message;
            }
            
            showError(errorMessage);
        });
}

function showError(message) {
    const errorElement = document.getElementById('loginError');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Add Firebase SDK if not already present
    if (!window.firebase) {
        const script = document.createElement('script');
        script.src = 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js';
        document.head.appendChild(script);
        
        const authScript = document.createElement('script');
        authScript.src = 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js';
        document.head.appendChild(authScript);
        
        const firestoreScript = document.createElement('script');
        firestoreScript.src = 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js';
        document.head.appendChild(firestoreScript);
        
        const configScript = document.createElement('script');
        configScript.src = 'js/firebase-config.js';
        document.head.appendChild(configScript);
        
        // Wait for scripts to load
        setTimeout(() => {
            checkAuth();
            if (document.getElementById('loginForm')) {
                document.getElementById('loginForm').addEventListener('submit', login);
            }
        }, 1000);
    } else {
        checkAuth();
        if (document.getElementById('loginForm')) {
            document.getElementById('loginForm').addEventListener('submit', login);
        }
    }
});
