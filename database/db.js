const Database = require('better-sqlite3');
const path = require('path');
const bcrypt = require('bcrypt');

// Database connection
const dbPath = path.join(__dirname, '../data/titansports.db');
let db;

function getDatabase() {
    if (!db) {
        const fs = require('fs');
        const dir = path.dirname(dbPath);
        
        // Create data directory if it doesn't exist
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        
        db = new Database(dbPath);
        db.pragma('foreign_keys = ON');
    }
    return db;
}

// Order operations
const OrderOperations = {
    create: (orderData) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            INSERT INTO orders (
                order_id, customer_name, customer_phone, customer_email, customer_address,
                items, subtotal, shipping, tax, total, payment_method, payment_status,
                transaction_id, order_status
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);
        
        return stmt.run(
            orderData.order_id,
            orderData.customer_name || null,
            orderData.customer_phone || null,
            orderData.customer_email || null,
            orderData.customer_address || null,
            JSON.stringify(orderData.items),
            orderData.subtotal,
            orderData.shipping,
            orderData.tax,
            orderData.total,
            orderData.payment_method,
            orderData.payment_status || 'pending',
            orderData.transaction_id || null,
            orderData.order_status || 'pending'
        );
    },
    
    getById: (orderId) => {
        const database = getDatabase();
        const stmt = database.prepare('SELECT * FROM orders WHERE order_id = ?');
        const order = stmt.get(orderId);
        
        if (order) {
            order.items = JSON.parse(order.items);
        }
        
        return order;
    },
    
    getAll: (limit = 50, offset = 0) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            SELECT * FROM orders 
            ORDER BY created_at DESC 
            LIMIT ? OFFSET ?
        `);
        const orders = stmt.all(limit, offset);
        
        return orders.map(order => ({
            ...order,
            items: JSON.parse(order.items)
        }));
    },
    
    updateStatus: (orderId, status) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            UPDATE orders 
            SET order_status = ?, updated_at = CURRENT_TIMESTAMP 
            WHERE order_id = ?
        `);
        return stmt.run(status, orderId);
    },
    
    updatePaymentStatus: (orderId, paymentStatus, transactionId = null) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            UPDATE orders 
            SET payment_status = ?, transaction_id = ?, updated_at = CURRENT_TIMESTAMP 
            WHERE order_id = ?
        `);
        return stmt.run(paymentStatus, transactionId, orderId);
    }
};

// Transaction operations
const TransactionOperations = {
    create: (transactionData) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            INSERT INTO transactions (
                transaction_id, checkout_request_id, merchant_request_id,
                phone_number, amount, status, result_code, result_desc,
                mpesa_receipt_number, callback_metadata
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);
        
        return stmt.run(
            transactionData.transaction_id,
            transactionData.checkout_request_id,
            transactionData.merchant_request_id || null,
            transactionData.phone_number,
            transactionData.amount,
            transactionData.status,
            transactionData.result_code || null,
            transactionData.result_desc || null,
            transactionData.mpesa_receipt_number || null,
            transactionData.callback_metadata ? JSON.stringify(transactionData.callback_metadata) : null
        );
    },
    
    getById: (transactionId) => {
        const database = getDatabase();
        const stmt = database.prepare('SELECT * FROM transactions WHERE transaction_id = ?');
        const transaction = stmt.get(transactionId);
        
        if (transaction && transaction.callback_metadata) {
            transaction.callback_metadata = JSON.parse(transaction.callback_metadata);
        }
        
        return transaction;
    },
    
    getByCheckoutRequestId: (checkoutRequestId) => {
        const database = getDatabase();
        const stmt = database.prepare('SELECT * FROM transactions WHERE checkout_request_id = ?');
        const transaction = stmt.get(checkoutRequestId);
        
        if (transaction && transaction.callback_metadata) {
            transaction.callback_metadata = JSON.parse(transaction.callback_metadata);
        }
        
        return transaction;
    },
    
    updateStatus: (transactionId, status, resultCode = null, resultDesc = null, mpesaReceiptNumber = null) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            UPDATE transactions 
            SET status = ?, result_code = ?, result_desc = ?, 
                mpesa_receipt_number = ?, updated_at = CURRENT_TIMESTAMP 
            WHERE transaction_id = ?
        `);
        return stmt.run(status, resultCode, resultDesc, mpesaReceiptNumber, transactionId);
    },
    
    getByPhoneNumber: (phoneNumber, limit = 20) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            SELECT * FROM transactions 
            WHERE phone_number = ? 
            ORDER BY created_at DESC 
            LIMIT ?
        `);
        const transactions = stmt.all(phoneNumber, limit);
        
        return transactions.map(transaction => ({
            ...transaction,
            callback_metadata: transaction.callback_metadata ? JSON.parse(transaction.callback_metadata) : null
        }));
    }
};

// Activity log operations
const ActivityLogOperations = {
    create: (action, details = null, userId = null, ipAddress = null) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            INSERT INTO activity_log (action, details, user_id, ip_address)
            VALUES (?, ?, ?, ?)
        `);
        
        return stmt.run(
            action,
            details ? JSON.stringify(details) : null,
            userId,
            ipAddress
        );
    },
    
    getRecent: (limit = 50) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            SELECT * FROM activity_log 
            ORDER BY created_at DESC 
            LIMIT ?
        `);
        const logs = stmt.all(limit);
        
        return logs.map(log => ({
            ...log,
            details: log.details ? JSON.parse(log.details) : null
        }));
    }
};

module.exports = {
    getDatabase,
    OrderOperations,
    TransactionOperations,
    ActivityLogOperations
};

// User operations
const UserOperations = {
    create: async (userData) => {
        const database = getDatabase();
        const passwordHash = await bcrypt.hash(userData.password, 10);
        const stmt = database.prepare(`
            INSERT INTO users (user_id, email, password_hash, name, phone, address, city, country, role)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);
        return stmt.run(
            userData.user_id,
            userData.email,
            passwordHash,
            userData.name || null,
            userData.phone || null,
            userData.address || null,
            userData.city || null,
            userData.country || 'Kenya',
            userData.role || 'customer'
        );
    },
    
    getByEmail: (email) => {
        const database = getDatabase();
        const stmt = database.prepare('SELECT * FROM users WHERE email = ?');
        return stmt.get(email);
    },
    
    getByUserId: (userId) => {
        const database = getDatabase();
        const stmt = database.prepare('SELECT * FROM users WHERE user_id = ?');
        return stmt.get(userId);
    },
    
    update: (userId, userData) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            UPDATE users 
            SET name = ?, phone = ?, address = ?, city = ?, country = ?, updated_at = CURRENT_TIMESTAMP
            WHERE user_id = ?
        `);
        return stmt.run(
            userData.name,
            userData.phone,
            userData.address,
            userData.city,
            userData.country,
            userId
        );
    },
    
    updatePassword: async (userId, newPassword) => {
        const database = getDatabase();
        const passwordHash = await bcrypt.hash(newPassword, 10);
        const stmt = database.prepare(`
            UPDATE users 
            SET password_hash = ?, updated_at = CURRENT_TIMESTAMP
            WHERE user_id = ?
        `);
        return stmt.run(passwordHash, userId);
    },
    
    verifyPassword: async (password, hash) => {
        return await bcrypt.compare(password, hash);
    }
};

// Product review operations
const ReviewOperations = {
    create: (reviewData) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            INSERT INTO product_reviews (review_id, product_id, user_id, rating, title, comment, is_verified_purchase)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `);
        return stmt.run(
            reviewData.review_id,
            reviewData.product_id,
            reviewData.user_id || null,
            reviewData.rating,
            reviewData.title || null,
            reviewData.comment || null,
            reviewData.is_verified_purchase || 0
        );
    },
    
    getById: (reviewId) => {
        const database = getDatabase();
        const stmt = database.prepare('SELECT * FROM product_reviews WHERE review_id = ?');
        return stmt.get(reviewId);
    },
    
    getByProductId: (productId, limit = 20, offset = 0) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            SELECT * FROM product_reviews 
            WHERE product_id = ? AND is_approved = 1
            ORDER BY created_at DESC 
            LIMIT ? OFFSET ?
        `);
        return stmt.all(productId, limit, offset);
    },
    
    getByUserId: (userId, limit = 20) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            SELECT * FROM product_reviews 
            WHERE user_id = ?
            ORDER BY created_at DESC 
            LIMIT ?
        `);
        return stmt.all(userId, limit);
    },
    
    updateApproval: (reviewId, isApproved) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            UPDATE product_reviews 
            SET is_approved = ?, updated_at = CURRENT_TIMESTAMP
            WHERE review_id = ?
        `);
        return stmt.run(isApproved, reviewId);
    },
    
    getAverageRating: (productId) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            SELECT AVG(rating) as avg_rating, COUNT(*) as review_count
            FROM product_reviews 
            WHERE product_id = ? AND is_approved = 1
        `);
        return stmt.get(productId);
    }
};

// Wishlist operations
const WishlistOperations = {
    add: (userId, productId) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            INSERT INTO wishlist (user_id, product_id)
            VALUES (?, ?)
        `);
        return stmt.run(userId, productId);
    },
    
    remove: (userId, productId) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            DELETE FROM wishlist 
            WHERE user_id = ? AND product_id = ?
        `);
        return stmt.run(userId, productId);
    },
    
    getByUserId: (userId) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            SELECT * FROM wishlist 
            WHERE user_id = ?
            ORDER BY added_at DESC
        `);
        return stmt.all(userId);
    },
    
    isInWishlist: (userId, productId) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            SELECT COUNT(*) as count FROM wishlist 
            WHERE user_id = ? AND product_id = ?
        `);
        const result = stmt.get(userId, productId);
        return result.count > 0;
    }
};

// Discount code operations
const DiscountCodeOperations = {
    create: (codeData) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            INSERT INTO discount_codes (code, description, discount_type, discount_value, minimum_order_value, max_uses, valid_from, valid_until)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `);
        return stmt.run(
            codeData.code,
            codeData.description || null,
            codeData.discount_type,
            codeData.discount_value,
            codeData.minimum_order_value || 0,
            codeData.max_uses || null,
            codeData.valid_from || null,
            codeData.valid_until || null
        );
    },
    
    getByCode: (code) => {
        const database = getDatabase();
        const stmt = database.prepare('SELECT * FROM discount_codes WHERE code = ? AND is_active = 1');
        return stmt.get(code);
    },
    
    getAll: (limit = 50, offset = 0) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            SELECT * FROM discount_codes 
            ORDER BY created_at DESC 
            LIMIT ? OFFSET ?
        `);
        return stmt.all(limit, offset);
    },
    
    updateStatus: (code, isActive) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            UPDATE discount_codes 
            SET is_active = ?, updated_at = CURRENT_TIMESTAMP
            WHERE code = ?
        `);
        return stmt.run(isActive, code);
    },
    
    incrementUsage: (code) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            UPDATE discount_codes 
            SET used_count = used_count + 1, updated_at = CURRENT_TIMESTAMP
            WHERE code = ?
        `);
        return stmt.run(code);
    },
    
    isValid: (code, orderTotal) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            SELECT * FROM discount_codes 
            WHERE code = ? AND is_active = 1 
            AND (valid_from IS NULL OR valid_from <= CURRENT_TIMESTAMP)
            AND (valid_until IS NULL OR valid_until >= CURRENT_TIMESTAMP)
            AND (max_uses IS NULL OR used_count < max_uses)
            AND minimum_order_value <= ?
        `);
        const result = stmt.get(code, orderTotal);
        return !!result;
    }
};

// Shipping options operations
const ShippingOperations = {
    getAll: () => {
        const database = getDatabase();
        const stmt = database.prepare('SELECT * FROM shipping_options WHERE is_active = 1 ORDER BY cost ASC');
        return stmt.all();
    },
    
    getById: (id) => {
        const database = getDatabase();
        const stmt = database.prepare('SELECT * FROM shipping_options WHERE id = ?');
        return stmt.get(id);
    },
    
    create: (shippingData) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            INSERT INTO shipping_options (name, description, cost, estimated_days)
            VALUES (?, ?, ?, ?)
        `);
        return stmt.run(
            shippingData.name,
            shippingData.description || null,
            shippingData.cost,
            shippingData.estimated_days || null
        );
    },
    
    updateStatus: (id, isActive) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            UPDATE shipping_options 
            SET is_active = ?, updated_at = CURRENT_TIMESTAMP
            WHERE id = ?
        `);
        return stmt.run(isActive, id);
    }
};

// Inventory operations
const InventoryOperations = {
    create: (inventoryData) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            INSERT INTO inventory (product_id, quantity, low_stock_threshold)
            VALUES (?, ?, ?)
        `);
        return stmt.run(
            inventoryData.product_id,
            inventoryData.quantity || 0,
            inventoryData.low_stock_threshold || 10
        );
    },
    
    getByProductId: (productId) => {
        const database = getDatabase();
        const stmt = database.prepare('SELECT * FROM inventory WHERE product_id = ?');
        return stmt.get(productId);
    },
    
    updateQuantity: (productId, quantity) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            UPDATE inventory 
            SET quantity = ?, last_restocked = CURRENT_TIMESTAMP, updated_at = CURRENT_TIMESTAMP
            WHERE product_id = ?
        `);
        return stmt.run(quantity, productId);
    },
    
    decrementQuantity: (productId, amount = 1) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            UPDATE inventory 
            SET quantity = quantity - ?, updated_at = CURRENT_TIMESTAMP
            WHERE product_id = ? AND quantity >= ?
        `);
        return stmt.run(amount, productId, amount);
    },
    
    incrementQuantity: (productId, amount = 1) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            UPDATE inventory 
            SET quantity = quantity + ?, updated_at = CURRENT_TIMESTAMP
            WHERE product_id = ?
        `);
        return stmt.run(amount, productId);
    },
    
    getLowStockProducts: (limit = 50) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            SELECT * FROM inventory 
            WHERE quantity <= low_stock_threshold
            ORDER BY quantity ASC
            LIMIT ?
        `);
        return stmt.all(limit);
    },
    
    getAll: (limit = 100, offset = 0) => {
        const database = getDatabase();
        const stmt = database.prepare(`
            SELECT * FROM inventory 
            ORDER BY quantity ASC
            LIMIT ? OFFSET ?
        `);
        return stmt.all(limit, offset);
    }
};

// Update module exports
module.exports = {
    getDatabase,
    OrderOperations,
    TransactionOperations,
    ActivityLogOperations,
    UserOperations,
    ReviewOperations,
    WishlistOperations,
    DiscountCodeOperations,
    ShippingOperations,
    InventoryOperations
};
