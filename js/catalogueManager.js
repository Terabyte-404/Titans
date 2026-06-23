// Comprehensive Catalogue Manager
// This file handles all the functionality for the new comprehensive product catalogue

let currentProducts = [];
let currentDetailProduct = null;
let selectedVariant = null;

// Initialize catalogue on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeCatalogue();
});

function initializeCatalogue() {
    // Load products - prioritize admin panel data over comprehensive catalogue
    currentProducts = loadProductsFromStorage();
    
    // Render initial products
    renderComprehensiveProducts(currentProducts);
    
    // Initialize filters
    setupFilterListeners();
}

// Load products from storage - prioritizes admin panel data
function loadProductsFromStorage() {
    // First try to get admin panel uploaded data
    const adminProducts = localStorage.getItem('products') || 
                         localStorage.getItem('titanSportsProducts') || 
                         localStorage.getItem('kitHubProducts');
    
    if (adminProducts) {
        try {
            const parsedAdminProducts = JSON.parse(adminProducts);
            if (parsedAdminProducts && parsedAdminProducts.length > 0) {
                console.log('Using admin panel uploaded products:', parsedAdminProducts.length);
                return parsedAdminProducts;
            }
        } catch (error) {
            console.error('Error parsing admin products:', error);
        }
    }
    
    // Fall back to comprehensive catalogue if no admin data
    console.log('Using comprehensive catalogue products');
    return getStoredComprehensiveCatalogue();
}

// Render comprehensive products to grid
function renderComprehensiveProducts(products) {
    const grid = document.getElementById('productGrid');
    
    if (products.length === 0) {
        grid.innerHTML = '<div class="no-products">No products found matching your criteria.</div>';
        return;
    }
    
    grid.innerHTML = products.map(product => `
        <div class="product-card" onclick="openProductDetail('${product.id}')">
            <div class="product-card-image">
                <img src="${product.images[0].url}" alt="${product.images[0].alt}" class="product-image">
                <div class="product-badges">
                    ${renderProductBadges(product)}
                </div>
            </div>
            <div class="product-card-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${product.team || product.league || product.category}</p>
                <div class="product-rating">
                    ${renderStarRating(product.averageRating)}
                    <span class="review-count">(${product.totalReviews})</span>
                </div>
                <div class="product-price-section">
                    <span class="product-price">KSH ${product.price.toLocaleString()}</span>
                    ${product.compareAtPrice ? `<span class="product-compare-price">KSH ${product.compareAtPrice.toLocaleString()}</span>` : ''}
                    ${product.discountPercentage ? `<span class="product-discount">-${product.discountPercentage}%</span>` : ''}
                </div>
                <div class="product-stock-info">
                    ${renderStockStatus(product.stockStatus)}
                </div>
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); quickAddToCart('${product.id}')">ADD TO CART</button>
            </div>
        </div>
    `).join('');
}

// Render product badges
function renderProductBadges(product) {
    let badges = [];
    
    if (product.new) badges.push('<span class="badge new">NEW</span>');
    if (product.bestseller) badges.push('<span class="badge bestseller">BESTSELLER</span>');
    if (product.sale) badges.push('<span class="badge sale">SALE</span>');
    if (product.featured) badges.push('<span class="badge featured">FEATURED</span>');
    if (product.stockStatus === 'low-stock') badges.push('<span class="badge low-stock">LOW STOCK</span>');
    if (product.stockStatus === 'out-of-stock') badges.push('<span class="badge out-of-stock">SOLD OUT</span>');
    
    return badges.join('');
}

// Render star rating
function renderStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (hasHalfStar) {
        stars += '☆';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆';
    }
    
    return `<span class="stars">${stars}</span>`;
}

// Render stock status
function renderStockStatus(status) {
    const statusMap = {
        'in-stock': '<span class="stock-status in-stock">✓ In Stock</span>',
        'low-stock': '<span class="stock-status low-stock">⚠ Low Stock</span>',
        'out-of-stock': '<span class="stock-status out-of-stock">✗ Out of Stock</span>',
        'pre-order': '<span class="stock-status pre-order">⏳ Pre-Order</span>'
    };
    
    return statusMap[status] || '';
}

// Filter by category
function filterByCategory(category) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    let filtered = currentProducts;
    
    if (category !== 'all') {
        filtered = currentProducts.filter(p => p.category === category);
    }
    
    renderComprehensiveProducts(filtered);
}

// Apply advanced filters
function applyAdvancedFilters() {
    const sportFilter = document.getElementById('sportFilter').value;
    const leagueFilter = document.getElementById('leagueFilter').value;
    const genderFilter = document.getElementById('genderFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    const stockFilter = document.getElementById('stockFilter').value;
    const sortFilter = document.getElementById('sortFilter').value;
    
    let filtered = [...currentProducts];
    
    // Apply sport filter
    if (sportFilter) {
        filtered = filtered.filter(p => p.sport === sportFilter);
    }
    
    // Apply league filter
    if (leagueFilter) {
        filtered = filtered.filter(p => p.league === leagueFilter);
    }
    
    // Apply gender filter
    if (genderFilter) {
        if (genderFilter === 'unisex') {
            filtered = filtered.filter(p => p.gender === 'unisex' || p.gender === 'men' || p.gender === 'women');
        } else {
            filtered = filtered.filter(p => p.gender === genderFilter);
        }
    }
    
    // Apply price filter
    if (priceFilter) {
        const [min, max] = priceFilter.split('-').map(p => p.replace('+', ''));
        const minPrice = parseInt(min);
        const maxPrice = max ? parseInt(max) : Infinity;
        
        filtered = filtered.filter(p => p.price >= minPrice && p.price <= maxPrice);
    }
    
    // Apply stock filter
    if (stockFilter) {
        filtered = filtered.filter(p => p.stockStatus === stockFilter);
    }
    
    // Apply sorting
    filtered = sortProducts(filtered, sortFilter);
    
    renderComprehensiveProducts(filtered);
}

// Reset all filters
function resetFilters() {
    document.getElementById('sportFilter').value = '';
    document.getElementById('leagueFilter').value = '';
    document.getElementById('genderFilter').value = '';
    document.getElementById('priceFilter').value = '';
    document.getElementById('stockFilter').value = '';
    document.getElementById('sortFilter').value = 'featured';
    
    // Reset category buttons
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.filter-btn').classList.add('active');
    
    renderComprehensiveProducts(currentProducts);
}

// Setup filter listeners
function setupFilterListeners() {
    // Additional setup if needed
}

// Open product detail view
function openProductDetail(productId) {
    const product = currentProducts.find(p => p.id === productId);
    if (!product) return;
    
    currentDetailProduct = product;
    selectedVariant = product.variants[0]; // Default to first variant
    
    // Hide product grid, show detail section
    document.getElementById('productGrid').style.display = 'none';
    document.getElementById('productDetailSection').style.display = 'block';
    
    // Populate product detail
    populateProductDetail(product);
    
    // Scroll to top of detail section
    document.getElementById('productDetailSection').scrollIntoView({ behavior: 'smooth' });
}

// Close product detail view
function closeProductDetail() {
    document.getElementById('productDetailSection').style.display = 'none';
    document.getElementById('productGrid').style.display = 'grid';
    currentDetailProduct = null;
    selectedVariant = null;
}

// Populate product detail section
function populateProductDetail(product) {
    // Main image
    document.getElementById('detailMainImage').src = product.images[0].url;
    document.getElementById('detailMainImage').alt = product.images[0].alt;
    
    // Thumbnail gallery
    const thumbnailGallery = document.getElementById('detailThumbnailGallery');
    thumbnailGallery.innerHTML = product.images.map((img, index) => `
        <img src="${img.url}" alt="${img.alt}" 
             class="thumbnail ${index === 0 ? 'active' : ''}" 
             onclick="changeMainImage('${img.url}', '${img.alt}', this)">
    `).join('');
    
    // Badges
    document.getElementById('detailBadges').innerHTML = renderProductBadges(product);
    
    // Name
    document.getElementById('detailName').textContent = product.name;
    
    // Rating
    document.getElementById('detailRating').innerHTML = `
        ${renderStarRating(product.averageRating)}
        <span class="review-count">(${product.totalReviews} reviews)</span>
    `;
    
    // Short description
    document.getElementById('detailShortDescription').textContent = product.shortDescription;
    
    // Price
    document.getElementById('detailPrice').textContent = `KSH ${product.price.toLocaleString()}`;
    if (product.compareAtPrice) {
        document.getElementById('detailComparePrice').textContent = `KSH ${product.compareAtPrice.toLocaleString()}`;
        document.getElementById('detailComparePrice').style.display = 'inline';
    } else {
        document.getElementById('detailComparePrice').style.display = 'none';
    }
    
    if (product.discountPercentage) {
        document.getElementById('detailDiscount').textContent = `-${product.discountPercentage}%`;
        document.getElementById('detailDiscount').style.display = 'inline';
    } else {
        document.getElementById('detailDiscount').style.display = 'none';
    }
    
    // Size options
    const sizeOptions = document.getElementById('detailSizeOptions');
    const uniqueSizes = [...new Set(product.variants.map(v => v.size))];
    sizeOptions.innerHTML = uniqueSizes.map(size => `
        <button class="size-option ${size === selectedVariant.size ? 'active' : ''}" 
                onclick="selectSize('${size}')">${size}</button>
    `).join('');
    
    // Color options
    const colorOptions = document.getElementById('detailColorOptions');
    const uniqueColors = [...new Set(product.variants.map(v => v.color))];
    colorOptions.innerHTML = uniqueColors.map(color => `
        <button class="color-option ${color === selectedVariant.color ? 'active' : ''}" 
                style="background-color: ${product.variants.find(v => v.color === color).colorCode}"
                onclick="selectColor('${color}')" 
                title="${color}"></button>
    `).join('');
    
    // Stock info
    document.getElementById('detailStockInfo').innerHTML = renderStockStatus(product.stockStatus) + 
        `<span class="stock-count">${product.totalStock} items available</span>`;
    
    // Specifications
    const specsDiv = document.getElementById('detailSpecs');
    specsDiv.innerHTML = Object.entries(product.specifications).map(([key, value]) => `
        <div class="spec-item">
            <span class="spec-label">${key.charAt(0).toUpperCase() + key.slice(1)}:</span>
            <span class="spec-value">${value}</span>
        </div>
    `).join('');
    
    // Features
    const featuresList = document.getElementById('detailFeatures');
    featuresList.innerHTML = product.features.map(feature => `
        <li>${feature}</li>
    `).join('');
    
    // Long description
    document.getElementById('detailLongDescription').textContent = product.longDescription;
    
    // Reset quantity
    document.getElementById('detailQuantity').value = 1;
}

// Change main image in detail view
function changeMainImage(url, alt, thumbnailElement) {
    document.getElementById('detailMainImage').src = url;
    document.getElementById('detailMainImage').alt = alt;
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    thumbnailElement.classList.add('active');
}

// Select size variant
function selectSize(size) {
    // Update UI
    document.querySelectorAll('.size-option').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Find variant with selected size and current color
    const variant = currentDetailProduct.variants.find(v => 
        v.size === size && v.color === selectedVariant.color
    );
    
    if (variant) {
        selectedVariant = variant;
        updateVariantDisplay();
    }
}

// Select color variant
function selectColor(color) {
    // Update UI
    document.querySelectorAll('.color-option').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Find variant with selected color and current size
    const variant = currentDetailProduct.variants.find(v => 
        v.color === color && v.size === selectedVariant.size
    );
    
    if (variant) {
        selectedVariant = variant;
        updateVariantDisplay();
    }
}

// Update variant display
function updateVariantDisplay() {
    if (selectedVariant) {
        document.getElementById('detailPrice').textContent = `KSH ${selectedVariant.price.toLocaleString()}`;
        
        // Update stock info for this variant
        const stockInfo = selectedVariant.stock > 0 ? 
            `<span class="stock-status in-stock">✓ ${selectedVariant.stock} in stock</span>` :
            `<span class="stock-status out-of-stock">✗ Out of stock</span>`;
        
        document.getElementById('detailStockInfo').innerHTML = stockInfo;
    }
}

// Increment detail quantity
function incrementDetailQty() {
    const input = document.getElementById('detailQuantity');
    const currentQty = parseInt(input.value);
    const maxQty = selectedVariant ? selectedVariant.stock : 10;
    
    if (currentQty < maxQty) {
        input.value = currentQty + 1;
    }
}

// Decrement detail quantity
function decrementDetailQty() {
    const input = document.getElementById('detailQuantity');
    const currentQty = parseInt(input.value);
    
    if (currentQty > 1) {
        input.value = currentQty - 1;
    }
}

// Quick add to cart from product grid
function quickAddToCart(productId) {
    const product = currentProducts.find(p => p.id === productId);
    if (!product) return;
    
    // Use first available variant
    const variant = product.variants.find(v => v.stock > 0) || product.variants[0];
    
    const cartItem = {
        productId: product.id,
        productVariantId: variant.id,
        name: product.name,
        price: variant.price,
        quantity: 1,
        size: variant.size,
        color: variant.color,
        image: product.images[0].url,
        sku: variant.sku
    };
    
    addToCart(cartItem);
}

// Add to cart from detail view
function addToCartFromDetail() {
    if (!currentDetailProduct || !selectedVariant) return;
    
    const quantity = parseInt(document.getElementById('detailQuantity').value);
    
    const cartItem = {
        productId: currentDetailProduct.id,
        productVariantId: selectedVariant.id,
        name: currentDetailProduct.name,
        price: selectedVariant.price,
        quantity: quantity,
        size: selectedVariant.size,
        color: selectedVariant.color,
        image: currentDetailProduct.images[0].url,
        sku: selectedVariant.sku
    };
    
    addToCart(cartItem);
}

// Add to cart (integrate with existing cart system)
function addToCart(cartItem) {
    // Get existing cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if item already exists
    const existingItemIndex = cart.findIndex(item => 
        item.productVariantId === cartItem.productVariantId
    );
    
    if (existingItemIndex !== -1) {
        // Update quantity
        cart[existingItemIndex].quantity += cartItem.quantity;
    } else {
        // Add new item
        cart.push(cartItem);
    }
    
    // Save cart
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show notification
    showNotification('Added to cart!');
}

// Update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

// Add to wishlist
function addToWishlist() {
    if (!currentDetailProduct) return;
    
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    if (!wishlist.includes(currentDetailProduct.id)) {
        wishlist.push(currentDetailProduct.id);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        showNotification('Added to wishlist!');
    } else {
        showNotification('Already in wishlist!');
    }
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 12px 24px;
        border-radius: 4px;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Search functionality
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    
    if (!query) {
        renderComprehensiveProducts(currentProducts);
        return;
    }
    
    const searchResults = searchProducts(query);
    renderComprehensiveProducts(searchResults);
    
    // Show search section
    document.getElementById('searchSection').style.display = 'block';
    document.getElementById('searchInfo').textContent = `Found ${searchResults.length} results for "${query}"`;
}

// Clear search
function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('searchSection').style.display = 'none';
    renderComprehensiveProducts(currentProducts);
}

// Sort search results
function sortSearchResults(sortBy) {
    // Update active button
    document.querySelectorAll('.search-filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const searchResults = searchProducts(document.getElementById('searchInput').value);
    const sortedResults = sortProducts(searchResults, sortBy);
    
    renderComprehensiveProducts(sortedResults);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize cart count on load
updateCartCount();
