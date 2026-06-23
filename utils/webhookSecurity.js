const crypto = require('crypto');

// M-Pesa doesn't provide webhook signature verification in their standard implementation,
// but we can implement basic security measures
class WebhookSecurity {
    constructor() {
        this.validIPRanges = [
            // M-Pesa Safaricom IP ranges (these should be updated with actual Safaricom IPs)
            '196.201.214.0/24',
            '196.201.216.0/24',
            '196.201.208.0/24'
        ];
    }
    
    // Validate IP address against allowed ranges
    validateIP(ip) {
        if (!ip) return false;
        
        // In development/sandbox, allow all IPs
        if (process.env.MPESA_ENVIRONMENT === 'sandbox' || process.env.NODE_ENV !== 'production') {
            return true;
        }
        
        // Check if IP is in allowed ranges
        for (const range of this.validIPRanges) {
            if (this.isIPInRange(ip, range)) {
                return true;
            }
        }
        
        return false;
    }
    
    // Check if IP is in CIDR range
    isIPInRange(ip, cidr) {
        const [range, bits] = cidr.split('/');
        const mask = parseInt(bits, 10);
        const ipInt = this.ipToInt(ip);
        const rangeInt = this.ipToInt(range);
        const maskInt = ~((1 << (32 - mask)) - 1);
        
        return (ipInt & maskInt) === (rangeInt & maskInt);
    }
    
    // Convert IP to integer
    ipToInt(ip) {
        return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;
    }
    
    // Generate signature for webhook validation (if needed)
    generateSignature(payload, secret) {
        const hmac = crypto.createHmac('sha256', secret);
        hmac.update(JSON.stringify(payload));
        return hmac.digest('hex');
    }
    
    // Verify signature (if M-Pesa implements this in future)
    verifySignature(payload, signature, secret) {
        const expectedSignature = this.generateSignature(payload, secret);
        return crypto.timingSafeEqual(
            Buffer.from(signature),
            Buffer.from(expectedSignature)
        );
    }
    
    // Validate webhook payload structure
    validatePayload(payload) {
        if (!payload || typeof payload !== 'object') {
            return false;
        }
        
        // Check for M-Pesa callback structure
        if (!payload.Body || !payload.Body.stkCallback) {
            return false;
        }
        
        const callback = payload.Body.stkCallback;
        
        // Validate required fields
        if (!callback.MerchantRequestID || !callback.CheckoutRequestID || !callback.ResultCode) {
            return false;
        }
        
        return true;
    }
    
    // Sanitize webhook data
    sanitizePayload(payload) {
        const sanitized = JSON.parse(JSON.stringify(payload));
        
        // Remove any potentially dangerous fields
        delete sanitized.__proto__;
        delete sanitized.constructor;
        
        return sanitized;
    }
}

module.exports = new WebhookSecurity();
