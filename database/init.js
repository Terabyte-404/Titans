const Database = require('better-sqlite3');
const path = require('path');

// Initialize database
const dbPath = path.join(__dirname, '../data/titansports.db');
const db = new Database(dbPath);

// Enable foreign keys
db.pragma('foreign_keys = ON');

// Create tables
function initializeDatabase() {
    // Create users table
    db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            name TEXT,
            phone TEXT,
            address TEXT,
            city TEXT,
            country TEXT DEFAULT 'Kenya',
            role TEXT DEFAULT 'customer',
            is_verified BOOLEAN DEFAULT 0,
            verification_token TEXT,
            reset_password_token TEXT,
            reset_password_expires DATETIME,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Create orders table
    db.exec(`
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            order_id TEXT UNIQUE NOT NULL,
            user_id TEXT,
            customer_name TEXT,
            customer_phone TEXT,
            customer_email TEXT,
            customer_address TEXT,
            items TEXT NOT NULL,
            subtotal REAL NOT NULL,
            shipping REAL NOT NULL,
            tax REAL NOT NULL,
            discount REAL DEFAULT 0,
            total REAL NOT NULL,
            payment_method TEXT NOT NULL,
            payment_status TEXT NOT NULL DEFAULT 'pending',
            transaction_id TEXT,
            order_status TEXT NOT NULL DEFAULT 'pending',
            shipping_method TEXT,
            shipping_address TEXT,
            tracking_number TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE SET NULL
        )
    `);

    // Create transactions table
    db.exec(`
        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            transaction_id TEXT UNIQUE NOT NULL,
            checkout_request_id TEXT UNIQUE NOT NULL,
            merchant_request_id TEXT,
            phone_number TEXT NOT NULL,
            amount REAL NOT NULL,
            status TEXT NOT NULL,
            result_code TEXT,
            result_desc TEXT,
            mpesa_receipt_number TEXT,
            callback_metadata TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Create activity log table
    db.exec(`
        CREATE TABLE IF NOT EXISTS activity_log (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            action TEXT NOT NULL,
            details TEXT,
            user_id TEXT,
            ip_address TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Create product reviews table
    db.exec(`
        CREATE TABLE IF NOT EXISTS product_reviews (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            review_id TEXT UNIQUE NOT NULL,
            product_id TEXT NOT NULL,
            user_id TEXT,
            rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
            title TEXT,
            comment TEXT,
            is_verified_purchase BOOLEAN DEFAULT 0,
            is_approved BOOLEAN DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE SET NULL
        )
    `);

    // Create wishlist table
    db.exec(`
        CREATE TABLE IF NOT EXISTS wishlist (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT NOT NULL,
            product_id TEXT NOT NULL,
            added_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(user_id, product_id),
            FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
        )
    `);

    // Create discount codes table
    db.exec(`
        CREATE TABLE IF NOT EXISTS discount_codes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            code TEXT UNIQUE NOT NULL,
            description TEXT,
            discount_type TEXT NOT NULL CHECK (discount_type IN ('percentage', 'fixed')),
            discount_value REAL NOT NULL,
            minimum_order_value REAL DEFAULT 0,
            max_uses INTEGER,
            used_count INTEGER DEFAULT 0,
            valid_from DATETIME,
            valid_until DATETIME,
            is_active BOOLEAN DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Create shipping options table
    db.exec(`
        CREATE TABLE IF NOT EXISTS shipping_options (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            cost REAL NOT NULL,
            estimated_days INTEGER,
            is_active BOOLEAN DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Create inventory table
    db.exec(`
        CREATE TABLE IF NOT EXISTS inventory (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            product_id TEXT UNIQUE NOT NULL,
            quantity INTEGER NOT NULL DEFAULT 0,
            low_stock_threshold INTEGER DEFAULT 10,
            last_restocked DATETIME,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Create indexes for better performance
    db.exec(`
        CREATE INDEX IF NOT EXISTS idx_users_user_id ON users(user_id);
        CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
        CREATE INDEX IF NOT EXISTS idx_orders_order_id ON orders(order_id);
        CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
        CREATE INDEX IF NOT EXISTS idx_orders_payment_status ON orders(payment_status);
        CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at);
        CREATE INDEX IF NOT EXISTS idx_transactions_transaction_id ON transactions(transaction_id);
        CREATE INDEX IF NOT EXISTS idx_transactions_checkout_request_id ON transactions(checkout_request_id);
        CREATE INDEX IF NOT EXISTS idx_transactions_phone_number ON transactions(phone_number);
        CREATE INDEX IF NOT EXISTS idx_activity_log_created_at ON activity_log(created_at);
        CREATE INDEX IF NOT EXISTS idx_product_reviews_product_id ON product_reviews(product_id);
        CREATE INDEX IF NOT EXISTS idx_product_reviews_user_id ON product_reviews(user_id);
        CREATE INDEX IF NOT EXISTS idx_wishlist_user_id ON wishlist(user_id);
        CREATE INDEX IF NOT EXISTS idx_discount_codes_code ON discount_codes(code);
        CREATE INDEX IF NOT EXISTS idx_inventory_product_id ON inventory(product_id);
    `);

    // Insert default shipping options
    const shippingCount = db.prepare('SELECT COUNT(*) as count FROM shipping_options').get();
    if (shippingCount.count === 0) {
        db.exec(`
            INSERT INTO shipping_options (name, description, cost, estimated_days) VALUES
            ('Standard Delivery', 'Standard delivery within Kenya', 1500, 3-5),
            ('Express Delivery', 'Express delivery within Kenya', 2500, 1-2),
            ('Pickup at Store', 'Pick up your order at our store', 0, 0)
        `);
    }

    console.log('Database initialized successfully');
    console.log('Database path:', dbPath);
}

// Run initialization
initializeDatabase();

// Export database instance
module.exports = db;
