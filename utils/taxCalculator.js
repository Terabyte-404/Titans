// Tax Calculator Utility for Kenya

const TAX_RATES = {
    VAT: 0.16, // 16% VAT in Kenya
    EXEMPTED_CATEGORIES: ['books', 'education', 'medical'],
    SPECIAL_RATES: {
        'luxury': 0.20,
        'basic': 0.08
    }
};

class TaxCalculator {
    /**
     * Calculate VAT for an order
     * @param {number} subtotal - Order subtotal before tax
     * @param {string} category - Product category (optional)
     * @returns {object} Tax calculation details
     */
    static calculateVAT(subtotal, category = null) {
        if (!subtotal || subtotal <= 0) {
            return {
                taxRate: 0,
                taxAmount: 0,
                total: subtotal,
                isExempt: false
            };
        }

        let taxRate = TAX_RATES.VAT;

        // Check if category is exempted
        if (category && TAX_RATES.EXEMPTED_CATEGORIES.includes(category.toLowerCase())) {
            return {
                taxRate: 0,
                taxAmount: 0,
                total: subtotal,
                isExempt: true,
                exemptReason: 'Exempt category'
            };
        }

        // Apply special rates if applicable
        if (category) {
            const categoryLower = category.toLowerCase();
            if (categoryLower === 'luxury' || categoryLower.includes('premium')) {
                taxRate = TAX_RATES.SPECIAL_RATES.luxury;
            } else if (categoryLower === 'basic' || categoryLower.includes('essential')) {
                taxRate = TAX_RATES.SPECIAL_RATES.basic;
            }
        }

        const taxAmount = subtotal * taxRate;
        const total = subtotal + taxAmount;

        return {
            taxRate: taxRate * 100, // Return as percentage
            taxAmount: Math.round(taxAmount * 100) / 100, // Round to 2 decimal places
            total: Math.round(total * 100) / 100,
            isExempt: false
        };
    }

    /**
     * Calculate tax for multiple items
     * @param {Array} items - Array of items with price and category
     * @returns {object} Tax calculation details
     */
    static calculateItemsTax(items) {
        let subtotal = 0;
        let totalTax = 0;
        const itemBreakdown = [];

        items.forEach(item => {
            const price = item.price || 0;
            const quantity = item.quantity || 1;
            const category = item.category || item.sport || null;
            const itemTotal = price * quantity;

            const taxCalc = this.calculateVAT(itemTotal, category);
            
            subtotal += itemTotal;
            totalTax += taxCalc.taxAmount;

            itemBreakdown.push({
                name: item.name || 'Unknown',
                price: price,
                quantity: quantity,
                subtotal: itemTotal,
                taxRate: taxCalc.taxRate,
                taxAmount: taxCalc.taxAmount,
                total: taxCalc.total,
                isExempt: taxCalc.isExempt
            });
        });

        return {
            subtotal: Math.round(subtotal * 100) / 100,
            totalTax: Math.round(totalTax * 100) / 100,
            total: Math.round((subtotal + totalTax) * 100) / 100,
            itemBreakdown: itemBreakdown
        };
    }

    /**
     * Calculate total order amount including tax and shipping
     * @param {number} subtotal - Order subtotal
     * @param {number} shipping - Shipping cost
     * @param {number} discount - Discount amount
     * @param {string} category - Product category (optional)
     * @returns {object} Complete order calculation
     */
    static calculateOrderTotal(subtotal, shipping = 0, discount = 0, category = null) {
        const taxableAmount = Math.max(0, subtotal - discount);
        const taxCalc = this.calculateVAT(taxableAmount, category);
        
        const total = taxableAmount + taxCalc.taxAmount + shipping;

        return {
            subtotal: Math.round(subtotal * 100) / 100,
            discount: Math.round(discount * 100) / 100,
            taxableAmount: Math.round(taxableAmount * 100) / 100,
            taxRate: taxCalc.taxRate,
            taxAmount: taxCalc.taxAmount,
            shipping: Math.round(shipping * 100) / 100,
            total: Math.round(total * 100) / 100,
            isExempt: taxCalc.isExempt
        };
    }

    /**
     * Get tax rate for a category
     * @param {string} category - Product category
     * @returns {number} Tax rate as percentage
     */
    static getTaxRate(category) {
        if (!category) {
            return TAX_RATES.VAT * 100;
        }

        const categoryLower = category.toLowerCase();
        
        if (TAX_RATES.EXEMPTED_CATEGORIES.includes(categoryLower)) {
            return 0;
        }

        if (categoryLower === 'luxury' || categoryLower.includes('premium')) {
            return TAX_RATES.SPECIAL_RATES.luxury * 100;
        }

        if (categoryLower === 'basic' || categoryLower.includes('essential')) {
            return TAX_RATES.SPECIAL_RATES.basic * 100;
        }

        return TAX_RATES.VAT * 100;
    }

    /**
     * Check if category is tax-exempt
     * @param {string} category - Product category
     * @returns {boolean} True if exempt
     */
    static isExempt(category) {
        if (!category) {
            return false;
        }
        return TAX_RATES.EXEMPTED_CATEGORIES.includes(category.toLowerCase());
    }
}

module.exports = TaxCalculator;
