// Navigation Authentication State Management

// Update navigation based on authentication state
function updateNavigationAuthState(user) {
    const loginLink = document.getElementById('loginLink');
    const registerLink = document.getElementById('registerLink');
    const dashboardLink = document.getElementById('dashboardLink');
    const profileLink = document.getElementById('profileLink');
    const logoutLink = document.getElementById('logoutLink');
    const adminLink = document.getElementById('adminLink');
    
    // Mobile navigation links
    const mobileLoginLink = document.getElementById('mobileLoginLink');
    const mobileRegisterLink = document.getElementById('mobileRegisterLink');
    const mobileDashboardLink = document.getElementById('mobileDashboardLink');
    const mobileProfileLink = document.getElementById('mobileProfileLink');
    const mobileLogoutLink = document.getElementById('mobileLogoutLink');
    const mobileAdminLink = document.getElementById('mobileAdminLink');

    if (user) {
        // User is authenticated
        if (loginLink) loginLink.style.display = 'none';
        if (registerLink) registerLink.style.display = 'none';
        if (dashboardLink) dashboardLink.style.display = 'block';
        if (profileLink) profileLink.style.display = 'block';
        if (logoutLink) logoutLink.style.display = 'block';
        
        // Mobile links
        if (mobileLoginLink) mobileLoginLink.style.display = 'none';
        if (mobileRegisterLink) mobileRegisterLink.style.display = 'none';
        if (mobileDashboardLink) mobileDashboardLink.style.display = 'block';
        if (mobileProfileLink) mobileProfileLink.style.display = 'block';
        if (mobileLogoutLink) mobileLogoutLink.style.display = 'block';

        // Check if user is admin
        checkAdminStatus(user).then(isAdmin => {
            if (adminLink) {
                adminLink.style.display = isAdmin ? 'block' : 'none';
            }
            if (mobileAdminLink) {
                mobileAdminLink.style.display = isAdmin ? 'block' : 'none';
            }
        });
    } else {
        // User is not authenticated
        if (loginLink) loginLink.style.display = 'block';
        if (registerLink) registerLink.style.display = 'block';
        if (dashboardLink) dashboardLink.style.display = 'none';
        if (profileLink) profileLink.style.display = 'none';
        if (logoutLink) logoutLink.style.display = 'none';
        if (adminLink) adminLink.style.display = 'none';
        
        // Mobile links
        if (mobileLoginLink) mobileLoginLink.style.display = 'block';
        if (mobileRegisterLink) mobileRegisterLink.style.display = 'block';
        if (mobileDashboardLink) mobileDashboardLink.style.display = 'none';
        if (mobileProfileLink) mobileProfileLink.style.display = 'none';
        if (mobileLogoutLink) mobileLogoutLink.style.display = 'none';
        if (mobileAdminLink) mobileAdminLink.style.display = 'none';
    }
}

// Check if user has admin role
async function checkAdminStatus(user) {
    try {
        const userDoc = await db.collection('users').doc(user.uid).get();
        const userData = userDoc.data();
        return userData && userData.role === 'admin';
    } catch (error) {
        console.error('Error checking admin status:', error);
        return false;
    }
}

// Initialize navigation auth state
function initializeNavigationAuth() {
    checkAuthState((user) => {
        updateNavigationAuthState(user);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait for Firebase to be initialized
    setTimeout(() => {
        if (window.firebase && window.firebase.auth) {
            initializeNavigationAuth();
        } else {
            console.log('Firebase not yet initialized, retrying...');
            setTimeout(initializeNavigationAuth, 1000);
        }
    }, 500);
});
