// Profile Management Functions for TITANSPORTS

// Show error message
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    const successElement = elementId === 'errorMessage' ? document.getElementById('successMessage') : document.getElementById('passwordSuccessMessage');
    if (errorElement) {
        const span = errorElement.querySelector('span');
        if (span) span.textContent = message;
        else errorElement.textContent = message;
        errorElement.style.display = 'flex';
    }
    if (successElement) {
        successElement.style.display = 'none';
    }
}

// Show success message
function showSuccess(elementId, message) {
    const successElement = document.getElementById(elementId);
    const errorElement = elementId === 'successMessage' ? document.getElementById('errorMessage') : document.getElementById('passwordErrorMessage');
    if (successElement) {
        const span = successElement.querySelector('span');
        if (span) span.textContent = message;
        else successElement.textContent = message;
        successElement.style.display = 'flex';
    }
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

// Clear messages
function clearMessages() {
    const messages = ['errorMessage', 'successMessage', 'passwordErrorMessage', 'passwordSuccessMessage'];
    messages.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.style.display = 'none';
    });
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

// Format date for display
function formatDate(timestamp) {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Calculate account age in days
function calculateAccountAge(createdAt) {
    if (!createdAt) return 0;
    const createdDate = createdAt.toDate ? createdAt.toDate() : new Date(createdAt);
    const now = new Date();
    const diffTime = Math.abs(now - createdDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Load user profile data
async function loadUserProfile() {
    try {
        const user = auth.currentUser;
        if (!user) {
            window.location.href = 'login.html';
            return;
        }

        // Update UI with user info
        const displayName = user.displayName || 'User';
        const email = user.email;
        const initial = displayName.charAt(0).toUpperCase();

        document.getElementById('displayName').textContent = displayName;
        document.getElementById('userEmail').textContent = email;
        document.getElementById('avatarInitial').textContent = initial;

        // Update email verification status
        const emailStatus = document.getElementById('emailStatus');
        if (user.emailVerified) {
            emailStatus.textContent = 'Verified';
            emailStatus.classList.remove('unverified');
        } else {
            emailStatus.textContent = 'Not Verified';
            emailStatus.classList.add('unverified');
        }

        // Load additional profile data from Firestore
        const userDoc = await db.collection('users').doc(user.uid).get();
        if (userDoc.exists) {
            const userData = userDoc.data();
            
            // Update form fields
            if (userData.fullName) {
                document.getElementById('fullName').value = userData.fullName;
            }
            if (userData.phone) {
                document.getElementById('phone').value = userData.phone;
            }
            if (userData.address) {
                document.getElementById('address').value = userData.address;
            }

            // Update profile info
            if (userData.createdAt) {
                document.getElementById('createdAt').textContent = formatDate(userData.createdAt);
                document.getElementById('accountAge').textContent = calculateAccountAge(userData.createdAt);
            }
            if (userData.lastLoginAt) {
                document.getElementById('lastLogin').textContent = formatDate(userData.lastLoginAt);
            }

            // Update login count
            if (userData.loginCount) {
                document.getElementById('loginCount').textContent = userData.loginCount;
            }

            // Update account type
            if (userData.role) {
                document.getElementById('accountType').textContent = userData.role === 'admin' ? 'Admin' : 'Standard';
            }

            // Update avatar if photo URL exists
            if (userData.photoURL) {
                const avatarImage = document.getElementById('avatarImage');
                avatarImage.innerHTML = `<img src="${userData.photoURL}" alt="${displayName}">`;
            }

            // Update last login timestamp
            await db.collection('users').doc(user.uid).update({
                lastLoginAt: firebase.firestore.FieldValue.serverTimestamp(),
                loginCount: firebase.firestore.FieldValue.increment(1)
            });
        } else {
            // Create user document if it doesn't exist
            await db.collection('users').doc(user.uid).set({
                uid: user.uid,
                email: user.email,
                fullName: displayName,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                lastLoginAt: firebase.firestore.FieldValue.serverTimestamp(),
                loginCount: 1,
                role: 'standard',
                emailVerified: user.emailVerified
            });

            // Reload to show the new data
            loadUserProfile();
        }

    } catch (error) {
        console.error('Error loading user profile:', error);
        showError('errorMessage', 'Failed to load profile data. Please refresh the page.');
    }
}

// Update user profile
async function updateProfile(fullName, phone, address) {
    try {
        clearMessages();
        setButtonLoading('saveButton', 'saveButtonText', true, 'Save Changes');

        const user = auth.currentUser;
        if (!user) {
            showError('errorMessage', 'You must be logged in to update your profile.');
            setButtonLoading('saveButton', 'saveButtonText', false, 'Save Changes');
            return;
        }

        // Validate inputs
        if (!fullName || fullName.trim().length < 2) {
            showError('errorMessage', 'Please enter a valid full name.');
            setButtonLoading('saveButton', 'saveButtonText', false, 'Save Changes');
            return;
        }

        // Update display name in Firebase Auth
        await user.updateProfile({ displayName: fullName });

        // Update profile data in Firestore
        await db.collection('users').doc(user.uid).update({
            fullName: fullName,
            phone: phone,
            address: address,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        showSuccess('successMessage', 'Profile updated successfully!');
        setButtonLoading('saveButton', 'saveButtonText', false, 'Save Changes');

        // Reload profile data
        setTimeout(() => {
            loadUserProfile();
        }, 1000);

    } catch (error) {
        console.error('Error updating profile:', error);
        showError('errorMessage', 'Failed to update profile. Please try again.');
        setButtonLoading('saveButton', 'saveButtonText', false, 'Save Changes');
    }
}

// Change password
async function changePassword(currentPassword, newPassword, confirmNewPassword) {
    try {
        clearMessages();
        setButtonLoading('passwordButton', 'passwordButtonText', true, 'Update Password');

        const user = auth.currentUser;
        if (!user) {
            showError('passwordErrorMessage', 'You must be logged in to change your password.');
            setButtonLoading('passwordButton', 'passwordButtonText', false, 'Update Password');
            return;
        }

        // Validate passwords
        if (!currentPassword) {
            showError('passwordErrorMessage', 'Please enter your current password.');
            setButtonLoading('passwordButton', 'passwordButtonText', false, 'Update Password');
            return;
        }

        if (newPassword !== confirmNewPassword) {
            showError('passwordErrorMessage', 'New passwords do not match.');
            setButtonLoading('passwordButton', 'passwordButtonText', false, 'Update Password');
            return;
        }

        if (newPassword.length < 6) {
            showError('passwordErrorMessage', 'Password must be at least 6 characters.');
            setButtonLoading('passwordButton', 'passwordButtonText', false, 'Update Password');
            return;
        }

        // Re-authenticate user with current password
        const credential = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
        await user.reauthenticateWithCredential(credential);

        // Update password
        await user.updatePassword(newPassword);

        showSuccess('passwordSuccessMessage', 'Password changed successfully!');
        setButtonLoading('passwordButton', 'passwordButtonText', false, 'Update Password');

        // Clear password fields
        document.getElementById('currentPassword').value = '';
        document.getElementById('newPassword').value = '';
        document.getElementById('confirmNewPassword').value = '';

    } catch (error) {
        console.error('Error changing password:', error);
        let errorMessage = 'Failed to change password. Please try again.';
        
        switch (error.code) {
            case 'auth/wrong-password':
                errorMessage = 'Current password is incorrect.';
                break;
            case 'auth/weak-password':
                errorMessage = 'New password is too weak. Please use a stronger password.';
                break;
            case 'auth/requires-recent-login':
                errorMessage = 'Please log in again before changing your password.';
                break;
            default:
                errorMessage = error.message;
        }
        
        showError('passwordErrorMessage', errorMessage);
        setButtonLoading('passwordButton', 'passwordButtonText', false, 'Update Password');
    }
}

// Send verification email
async function sendVerificationEmail() {
    try {
        const user = auth.currentUser;
        if (user) {
            await user.sendEmailVerification();
            alert('Verification email sent! Please check your inbox.');
        }
    } catch (error) {
        console.error('Error sending verification email:', error);
        alert('Failed to send verification email. Please try again.');
    }
}

// Initialize profile page
document.addEventListener('DOMContentLoaded', () => {
    // Check authentication
    checkAuthState((user) => {
        if (!user) {
            window.location.href = 'login.html';
            return;
        }
        
        // Load profile data
        loadUserProfile();
    });

    // Profile form
    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const fullName = document.getElementById('fullName').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            updateProfile(fullName, phone, address);
        });
    }

    // Password form
    const passwordForm = document.getElementById('passwordForm');
    if (passwordForm) {
        passwordForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const currentPassword = document.getElementById('currentPassword').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmNewPassword = document.getElementById('confirmNewPassword').value;
            changePassword(currentPassword, newPassword, confirmNewPassword);
        });
    }
});
