// Authentication Functions for TITANSPORTS

// Show error message
function showError(message) {
    const errorElement = document.getElementById('errorMessage');
    const successElement = document.getElementById('successMessage');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    if (successElement) {
        successElement.style.display = 'none';
    }
}

// Show success message
function showSuccess(message) {
    const errorElement = document.getElementById('errorMessage');
    const successElement = document.getElementById('successMessage');
    if (successElement) {
        successElement.textContent = message;
        successElement.style.display = 'block';
    }
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

// Clear messages
function clearMessages() {
    const errorElement = document.getElementById('errorMessage');
    const successElement = document.getElementById('successMessage');
    if (errorElement) errorElement.style.display = 'none';
    if (successElement) successElement.style.display = 'none';
}

// Set button loading state
function setButtonLoading(buttonId, textId, isLoading, defaultText) {
    const button = document.getElementById(buttonId);
    const textSpan = document.getElementById(textId);
    if (button && textSpan) {
        button.disabled = isLoading;
        if (isLoading) {
            textSpan.innerHTML = '<span class="loading-spinner"></span>Processing...';
        } else {
            textSpan.textContent = defaultText;
        }
    }
}

// Toggle password visibility
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    if (input) {
        input.type = input.type === 'password' ? 'text' : 'password';
    }
}

// Create user profile in Firestore
async function createUserProfile(user, additionalData = {}) {
    try {
        const userRef = db.collection('users').doc(user.uid);
        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || additionalData.fullName || '',
            photoURL: user.photoURL || '',
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            lastLoginAt: firebase.firestore.FieldValue.serverTimestamp(),
            ...additionalData
        };

        await userRef.set(userData, { merge: true });
        console.log('User profile created successfully');
        return userData;
    } catch (error) {
        console.error('Error creating user profile:', error);
        throw error;
    }
}

// Email/Password Registration
async function registerWithEmail(email, password, fullName) {
    try {
        clearMessages();
        setButtonLoading('registerButton', 'registerButtonText', true, 'Create Account');

        // Validate passwords match
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (password !== confirmPassword) {
            showError('Passwords do not match');
            setButtonLoading('registerButton', 'registerButtonText', false, 'Create Account');
            return;
        }

        // Validate password length
        if (password.length < 6) {
            showError('Password must be at least 6 characters');
            setButtonLoading('registerButton', 'registerButtonText', false, 'Create Account');
            return;
        }

        // Create user with Firebase Auth
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // Update user display name
        await user.updateProfile({ displayName: fullName });

        // Create user profile in Firestore
        await createUserProfile(user, { fullName });

        // Send email verification
        await user.sendEmailVerification();
        showSuccess('Account created successfully! Please check your email to verify your account.');

        // Redirect to login after 2 seconds
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);

    } catch (error) {
        console.error('Registration error:', error);
        let errorMessage = 'Registration failed. Please try again.';
        
        switch (error.code) {
            case 'auth/email-already-in-use':
                errorMessage = 'An account with this email already exists.';
                break;
            case 'auth/invalid-email':
                errorMessage = 'Invalid email address.';
                break;
            case 'auth/weak-password':
                errorMessage = 'Password is too weak. Please use a stronger password.';
                break;
            default:
                errorMessage = error.message;
        }
        
        showError(errorMessage);
        setButtonLoading('registerButton', 'registerButtonText', false, 'Create Account');
    }
}

// Email/Password Login
async function loginWithEmail(email, password) {
    try {
        clearMessages();
        setButtonLoading('loginButton', 'loginButtonText', true, 'Sign In');

        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // Update last login in Firestore
        await db.collection('users').doc(user.uid).update({
            lastLoginAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        // Check if email is verified
        if (!user.emailVerified) {
            showSuccess('Please verify your email address. A verification link has been sent to your email.');
            await user.sendEmailVerification();
            setButtonLoading('loginButton', 'loginButtonText', false, 'Sign In');
            return;
        }

        // Check if user is admin
        const userDoc = await db.collection('users').doc(user.uid).get();
        const userData = userDoc.data();
        const isAdminUser = userData && userData.role === 'admin';

        if (isAdminUser) {
            showSuccess('Welcome back, Admin! Redirecting to admin panel...');
            setTimeout(() => {
                window.location.href = 'admin-enhanced.html';
            }, 1000);
        } else {
            showSuccess('Login successful! Redirecting...');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        }

    } catch (error) {
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
            case 'auth/invalid-credential':
                errorMessage = 'Invalid credentials. Please check your email and password.';
                break;
            default:
                errorMessage = error.message;
        }
        
        showError(errorMessage);
        setButtonLoading('loginButton', 'loginButtonText', false, 'Sign In');
    }
}

// Google Sign In
async function signInWithGoogle() {
    try {
        clearMessages();
        const provider = new firebase.auth.GoogleAuthProvider();
        
        const result = await auth.signInWithPopup(provider);
        const user = result.user;

        // Create or update user profile in Firestore
        await createUserProfile(user, {
            fullName: user.displayName,
            photoURL: user.photoURL
        });

        showSuccess('Google sign in successful! Redirecting...');

        // Redirect to home
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);

    } catch (error) {
        console.error('Google sign in error:', error);
        let errorMessage = 'Google sign in failed. Please try again.';
        
        if (error.code === 'auth/popup-closed-by-user') {
            errorMessage = 'Sign in popup was closed. Please try again.';
        } else if (error.code === 'auth/account-exists-with-different-credential') {
            errorMessage = 'An account already exists with the same email address but different sign-in credentials.';
        } else {
            errorMessage = error.message;
        }
        
        showError(errorMessage);
    }
}

// Password Reset
async function resetPassword(email) {
    try {
        clearMessages();
        setButtonLoading('resetButton', 'resetButtonText', true, 'Send Reset Link');

        await auth.sendPasswordResetEmail(email);
        showSuccess('Password reset email sent! Please check your inbox.');
        setButtonLoading('resetButton', 'resetButtonText', false, 'Send Reset Link');

    } catch (error) {
        console.error('Password reset error:', error);
        let errorMessage = 'Failed to send password reset email.';
        
        switch (error.code) {
            case 'auth/invalid-email':
                errorMessage = 'Invalid email address.';
                break;
            case 'auth/user-not-found':
                errorMessage = 'No account found with this email.';
                break;
            default:
                errorMessage = error.message;
        }
        
        showError(errorMessage);
        setButtonLoading('resetButton', 'resetButtonText', false, 'Send Reset Link');
    }
}

// Logout
async function logout() {
    try {
        await auth.signOut();
        showSuccess('Logged out successfully');
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Logout error:', error);
        showError('Logout failed. Please try again.');
    }
}

// Check authentication state
function checkAuthState(callback) {
    auth.onAuthStateChanged((user) => {
        if (callback) {
            callback(user);
        }
    });
}

// Protect routes - redirect if not authenticated
function requireAuth() {
    checkAuthState((user) => {
        if (!user) {
            window.location.href = 'login.html';
        }
    });
}

// Protect admin routes - redirect if not admin
function requireAdmin() {
    checkAuthState(async (user) => {
        if (!user) {
            window.location.href = 'login.html';
            return;
        }

        try {
            const userDoc = await db.collection('users').doc(user.uid).get();
            const userData = userDoc.data();
            
            if (!userData || userData.role !== 'admin') {
                window.location.href = 'index.html';
            }
        } catch (error) {
            console.error('Error checking admin status:', error);
            window.location.href = 'index.html';
        }
    });
}

// Check if current user is admin
async function isAdmin() {
    const user = auth.currentUser;
    if (!user) return false;
    
    try {
        const userDoc = await db.collection('users').doc(user.uid).get();
        if (userDoc.exists) {
            const userData = userDoc.data();
            return userData.role === 'admin';
        }
        return false;
    } catch (error) {
        console.error('Error checking admin status:', error);
        return false;
    }
}

// Promote user to admin (use with caution - for initial setup)
async function promoteToAdmin(userId) {
    try {
        await db.collection('users').doc(userId).update({
            role: 'admin'
        });
        console.log('User promoted to admin successfully');
        return true;
    } catch (error) {
        console.error('Error promoting user to admin:', error);
        return false;
    }
}

// Demote user from admin
async function demoteFromAdmin(userId) {
    try {
        await db.collection('users').doc(userId).update({
            role: 'standard'
        });
        console.log('User demoted from admin successfully');
        return true;
    } catch (error) {
        console.error('Error demoting user from admin:', error);
        return false;
    }
}

// Promote current logged-in user to admin (for initial setup)
async function promoteSelfToAdmin() {
    const user = auth.currentUser;
    if (!user) {
        console.error('No user logged in');
        return false;
    }
    
    return await promoteToAdmin(user.uid);
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            loginWithEmail(email, password);
        });
    }

    // Register form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            registerWithEmail(email, password, fullName);
        });
    }

    // Google sign in buttons
    const googleButtons = document.querySelectorAll('#googleButton');
    googleButtons.forEach(button => {
        button.addEventListener('click', signInWithGoogle);
    });

    // Check if user is already logged in
    checkAuthState((user) => {
        if (user && (window.location.pathname.includes('login.html') || window.location.pathname.includes('register.html'))) {
            // User is already logged in, redirect to home
            window.location.href = 'index.html';
        }
    });
});
