// Dashboard Functions for TITANSPORTS

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

// Format relative time (e.g., "2 hours ago")
function formatRelativeTime(timestamp) {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    return formatDate(date);
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

// Load dashboard data
async function loadDashboard() {
    try {
        const user = auth.currentUser;
        if (!user) {
            window.location.href = 'login.html';
            return;
        }

        // Update user name in header
        const displayName = user.displayName || 'User';
        document.getElementById('userName').textContent = displayName;

        // Load user data from Firestore
        const userDoc = await db.collection('users').doc(user.uid).get();
        const userData = userDoc.exists ? userDoc.data() : {};

        // Load orders data from Firestore
        let ordersData = [];
        try {
            const ordersSnapshot = await db.collection('orders')
                .where('userId', '==', user.uid)
                .orderBy('createdAt', 'desc')
                .limit(5)
                .get();
            
            ordersData = ordersSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            console.log('No orders found or error loading orders:', error);
        }

        // Calculate statistics
        const totalOrders = ordersData.length;
        const totalSpent = ordersData.reduce((sum, order) => sum + (order.total || 0), 0);
        const accountAge = calculateAccountAge(userData.createdAt);
        const loginCount = userData.loginCount || 0;

        // Load dashboard content
        const dashboardContent = document.getElementById('dashboardContent');
        dashboardContent.innerHTML = generateDashboardHTML(userData, ordersData, {
            totalOrders,
            totalSpent,
            accountAge,
            loginCount
        });

    } catch (error) {
        console.error('Error loading dashboard:', error);
        document.getElementById('dashboardContent').innerHTML = `
            <div style="color: #ff6b6b; text-align: center; grid-column: 1 / -1; padding: 2rem;">
                Failed to load dashboard. Please refresh the page.
            </div>
        `;
    }
}

// Generate dashboard HTML
function generateDashboardHTML(userData, ordersData, stats) {
    const fullName = userData.fullName || 'User';
    const accountAge = stats.accountAge || 0;
    const loginCount = stats.loginCount || 0;
    const totalOrders = stats.totalOrders || 0;
    const totalSpent = stats.totalSpent || 0;

    return `
        <!-- Welcome Message -->
        <div class="welcome-message full-width">
            <h2>Welcome back, ${fullName}!</h2>
            <p>Here's an overview of your account and recent activity.</p>
        </div>

        <!-- Statistics -->
        <div class="dashboard-card">
            <h2>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                Account Overview
            </h2>
            <div class="stat-grid">
                <div class="stat-item">
                    <div class="value">${totalOrders}</div>
                    <div class="label">Total Orders</div>
                </div>
                <div class="stat-item">
                    <div class="value">KSH ${totalSpent.toLocaleString()}</div>
                    <div class="label">Total Spent</div>
                </div>
                <div class="stat-item">
                    <div class="value">${accountAge}</div>
                    <div class="label">Days Active</div>
                </div>
                <div class="stat-item">
                    <div class="value">${loginCount}</div>
                    <div class="label">Total Logins</div>
                </div>
            </div>
        </div>

        <!-- Recent Orders -->
        <div class="dashboard-card">
            <h2>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                Recent Orders
            </h2>
            <div class="recent-orders">
                ${ordersData.length > 0 ? ordersData.map(order => `
                    <div class="order-item">
                        <div class="order-info">
                            <h4>Order #${order.id.slice(-8).toUpperCase()}</h4>
                            <p>${order.items ? order.items.length : 0} items • KSH ${(order.total || 0).toLocaleString()}</p>
                        </div>
                        <span class="order-status ${order.status || 'pending'}">${order.status || 'Pending'}</span>
                    </div>
                `).join('') : `
                    <div style="color: rgba(255, 255, 255, 0.7); text-align: center; padding: 2rem;">
                        No orders yet. Start shopping to see your order history here.
                    </div>
                `}
            </div>
        </div>

        <!-- Recent Activity -->
        <div class="dashboard-card">
            <h2>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
                Recent Activity
            </h2>
            <div class="activity-list">
                <div class="activity-item">
                    <div class="activity-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div class="activity-content">
                        <h4>Account Created</h4>
                        <p>Welcome to TITANSPORTS</p>
                        <div class="activity-time">${formatDate(userData.createdAt)}</div>
                    </div>
                </div>
                ${userData.lastLoginAt ? `
                <div class="activity-item">
                    <div class="activity-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                            <polyline points="10 17 15 12 10 7"></polyline>
                            <line x1="15" y1="12" x2="3" y2="12"></line>
                        </svg>
                    </div>
                    <div class="activity-content">
                        <h4>Last Login</h4>
                        <p>You logged in to your account</p>
                        <div class="activity-time">${formatRelativeTime(userData.lastLoginAt)}</div>
                    </div>
                </div>
                ` : ''}
            </div>
        </div>

        <!-- Quick Actions -->
        <div class="dashboard-card">
            <h2>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                Quick Actions
            </h2>
            <div class="quick-actions">
                <a href="index.html#products" class="action-button">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    Start Shopping
                </a>
                <a href="profile.html" class="action-button">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Edit Profile
                </a>
                <a href="#" onclick="logout()" class="action-button">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    Logout
                </a>
            </div>
        </div>

        <!-- Account Settings -->
        <div class="dashboard-card">
            <h2>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                Account Settings
            </h2>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div style="color: rgba(255, 255, 255, 0.7); font-size: 0.9rem;">
                    <strong>Email:</strong> ${auth.currentUser.email}
                </div>
                <div style="color: rgba(255, 255, 255, 0.7); font-size: 0.9rem;">
                    <strong>Email Verified:</strong> ${auth.currentUser.emailVerified ? 'Yes' : 'No'}
                </div>
                <div style="color: rgba(255, 255, 255, 0.7); font-size: 0.9rem;">
                    <strong>Account Type:</strong> ${userData.role === 'admin' ? 'Admin' : 'Standard'}
                </div>
                ${!auth.currentUser.emailVerified ? `
                <a href="#" onclick="sendVerificationEmail()" class="action-button" style="margin-top: 0.5rem;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Verify Email
                </a>
                ` : ''}
            </div>
        </div>
    `;
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

// Initialize dashboard
document.addEventListener('DOMContentLoaded', () => {
    // Check authentication
    checkAuthState((user) => {
        if (!user) {
            window.location.href = 'login.html';
            return;
        }
        
        // Load dashboard data
        loadDashboard();
    });
});
