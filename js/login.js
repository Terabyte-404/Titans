// Authentication disabled - auto-redirect to admin panel
function checkAuth() {
    // Auto-redirect to admin panel without authentication
    window.location.href = 'admin-enhanced.html';
}

// Login function (disabled)
function login(event) {
    event.preventDefault();
    // Auto-login without credentials
    window.location.href = 'admin-enhanced.html';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    document.getElementById('loginForm').addEventListener('submit', login);
});
