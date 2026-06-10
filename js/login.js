// Admin credentials (in a real app, this should be server-side)
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};

// Check if user is already logged in
function checkAuth() {
    const isAuthenticated = localStorage.getItem('kitHubAdminAuth');
    if (isAuthenticated === 'true') {
        window.location.href = 'admin.html';
    }
}

// Login function
function login(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        localStorage.setItem('kitHubAdminAuth', 'true');
        alert('Login successful!');
        window.location.href = 'admin.html';
    } else {
        alert('Invalid username or password!');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    document.getElementById('loginForm').addEventListener('submit', login);
});
