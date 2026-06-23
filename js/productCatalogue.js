// Comprehensive Product Catalogue Data Structure
// This file contains the new accurate and detailed product catalogue

// Product Categories Structure
const productCategories = {
    sports: {
        football: {
            subcategories: ['national-team', 'club-jerseys', 'retro', 'plain-uniforms'],
            leagues: ['National Team', 'Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1', 'MLS', 'Eredivisie', 'Primeira Liga', 'Brasileirão', 'Liga MX']
        },
        basketball: {
            subcategories: ['nba-jerseys', 'retro', 'plain-uniforms'],
            leagues: ['NBA', 'WNBA', 'EuroLeague']
        },
        nfl: {
            subcategories: ['nfl-jerseys', 'retro'],
            leagues: ['NFL']
        },
        mlb: {
            subcategories: ['mlb-jerseys', 'retro'],
            leagues: ['MLB']
        },
        nhl: {
            subcategories: ['nhl-jerseys', 'retro'],
            leagues: ['NHL']
        },
        cricket: {
            subcategories: ['cricket-jerseys', 'equipment'],
            leagues: ['International', 'IPL', 'Big Bash', 'County Cricket']
        },
        rugby: {
            subcategories: ['rugby-jerseys', 'equipment'],
            leagues: ['International', 'Super Rugby', 'Six Nations', 'Rugby Championship']
        }
    },
    equipment: {
        categories: ['balls', 'gear', 'accessories', 'apparel', 'tools'],
        subcategories: {
            balls: ['football', 'basketball', 'american-football', 'baseball', 'hockey-puck', 'cricket-ball', 'rugby-ball', 'tennis-ball', 'golf-ball'],
            gear: ['helmets', 'pads', 'gloves', 'cleats', 'shin-guards', 'shoulder-pads', 'mouthguards', 'protective-gear', 'training-equipment'],
            accessories: ['water-bottles', 'sports-bags', 'socks', 'headbands', 'wristbands', 'sunglasses', 'watches', 'fitness-trackers', 'jump-ropes'],
            apparel: ['training-shorts', 'compression-wear', 'sports-bras', 'jackets', 'warm-up-gear', 'athletic-shoes', 'running-shoes', 'training-shoes'],
            tools: ['training-cones', 'resistance-bands', 'yoga-mats', 'golf-clubs', 'basketball-hoops', 'cycling-helmets', 'weightlifting-gloves']
        }
    }
};

// Comprehensive Product Schema
const comprehensiveProductSchema = {
    // Basic Information
    id: "unique_product_id",
    sku: "TIT-001",
    name: "Product Name",
    slug: "product-name-for-url",
    
    // Description
    shortDescription: "Brief product description (150 chars)",
    longDescription: "Detailed product description with features, benefits, and specifications",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    specifications: {
        material: "100% Polyester",
        care: "Machine wash cold",
        origin: "Made in [Country]"
    },
    
    // Categorization
    category: "jerseys", // jerseys, equipment, accessories
    subcategory: "national-team", // national-team, club-jerseys, retro, etc.
    sport: "football", // football, basketball, nfl, mlb, nhl, cricket, rugby, equipment
    league: "National Team", // League name
    team: "Brazil", // Team name if applicable
    
    // Pricing
    price: 18500,
    currency: "KSH",
    compareAtPrice: 20000, // Original price if on sale
    discountPercentage: 7.5,
    taxIncluded: true,
    
    // Images
    images: [
        {
            url: "https://example.com/image1.jpg",
            alt: "Product front view",
            isPrimary: true
        },
        {
            url: "https://example.com/image2.jpg", 
            alt: "Product back view",
            isPrimary: false
        },
        {
            url: "https://example.com/image3.jpg",
            alt: "Product detail view",
            isPrimary: false
        }
    ],
    
    // Variants
    variants: [
        {
            id: "variant_1",
            size: "S",
            color: "Home",
            colorCode: "#FFD700",
            stock: 15,
            price: 18500,
            sku: "TIT-001-S-HOME"
        },
        {
            id: "variant_2", 
            size: "M",
            color: "Home",
            colorCode: "#FFD700",
            stock: 20,
            price: 18500,
            sku: "TIT-001-M-HOME"
        },
        {
            id: "variant_3",
            size: "L", 
            color: "Home",
            colorCode: "#FFD700",
            stock: 18,
            price: 18500,
            sku: "TIT-001-L-HOME"
        },
        {
            id: "variant_4",
            size: "XL",
            color: "Home", 
            colorCode: "#FFD700",
            stock: 12,
            price: 18500,
            sku: "TIT-001-XL-HOME"
        },
        {
            id: "variant_5",
            size: "XXL",
            color: "Home",
            colorCode: "#FFD700", 
            stock: 8,
            price: 18500,
            sku: "TIT-001-XXL-HOME"
        }
    ],
    
    // Inventory
    totalStock: 73,
    lowStockThreshold: 10,
    inStock: true,
    allowBackorder: false,
    stockStatus: "in-stock", // in-stock, low-stock, out-of-stock, pre-order
    
    // Target Audience
    gender: "unisex", // men, women, unisex, kids
    ageGroup: "adults", // adults, kids, toddlers
    recommendedAge: "12+",
    
    // Product Details
    brand: "TITANSPORTS",
    year: 2024,
    season: "2024-2025",
    printStatus: "printed", // printed, unprinted, custom
    jerseyType: "home", // home, away, third, goalkeeper
    playerNumber: null, // null or specific number
    playerName: null, // null or specific player name
    
    // Quality & Authenticity
    authenticity: "official", // official, replica, custom
    quality: "premium", // premium, standard, economy
    licensed: true,
    
    // Shipping & Dimensions
    weight: 0.3, // in kg
    dimensions: {
        length: 70,
        width: 50,
        height: 5,
        unit: "cm"
    },
    shippingClass: "standard",
    freeShipping: false,
    freeShippingThreshold: 50000,
    
    // SEO & Marketing
    metaTitle: "Product Name - TITANSPORTS",
    metaDescription: "Product description for SEO",
    keywords: ["football", "jersey", "brazil", "2024"],
    tags: ["featured", "new-arrival", "bestseller"],
    
    // Display & Visibility
    featured: false,
    new: true,
    bestseller: false,
    sale: false,
    visible: true,
    sortOrder: 1,
    
    // Reviews & Ratings
    averageRating: 4.5,
    totalReviews: 128,
    reviews: [
        {
            id: "review_1",
            user: "John Doe",
            rating: 5,
            comment: "Great quality jersey!",
            date: "2024-01-15",
            verified: true
        }
    ],
    
    // Related Products
    relatedProducts: ["product_id_2", "product_id_3"],
    crossSellProducts: ["product_id_4", "product_id_5"],
    upSellProducts: ["product_id_6"],
    
    // Timestamps
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
    publishedAt: "2024-01-01T00:00:00Z"
};

// Sample Products with Comprehensive Data
const comprehensiveProducts = [
    {
        id: "TIT-001",
        sku: "TIT-001",
        name: "Brazil Home Jersey 2024-2025",
        slug: "brazil-home-jersey-2024-2025",
        
        shortDescription: "Official Brazil national team home jersey for 2024-2025 season",
        longDescription: "Show your support for the Brazilian national team with this official home jersey. Features authentic team colors, premium breathable fabric, and official team badge. Perfect for match days or casual wear.",
        features: [
            "Official Brazil team crest",
            "Nike Dri-FIT technology for moisture management",
            "100% recycled polyester",
            "Machine washable",
            "Authentic fit"
        ],
        specifications: {
            material: "100% Recycled Polyester",
            care: "Machine wash cold, tumble dry low",
            origin: "Made in Indonesia",
            technology: "Nike Dri-FIT"
        },
        
        category: "jerseys",
        subcategory: "national-team",
        sport: "football",
        league: "National Team",
        team: "Brazil",
        
        price: 18500,
        currency: "KSH",
        compareAtPrice: 20000,
        discountPercentage: 7.5,
        taxIncluded: true,
        
        images: [
            {
                url: "https://i.pinimg.com/1200x/42/13/c8/4213c8d3c435b09a6d0a00b00b92160a.jpg",
                alt: "Brazil Home Jersey 2024-2025 Front View",
                isPrimary: true
            },
            {
                url: "https://i.pinimg.com/1200x/98/c1/5c/98c15c5687d66a9940ac89953fdf7901.jpg",
                alt: "Brazil Home Jersey 2024-2025 Back View",
                isPrimary: false
            }
        ],
        
        variants: [
            { id: "TIT-001-S-HOME", size: "S", color: "Home", colorCode: "#FFD700", stock: 15, price: 18500, sku: "TIT-001-S-HOME" },
            { id: "TIT-001-M-HOME", size: "M", color: "Home", colorCode: "#FFD700", stock: 20, price: 18500, sku: "TIT-001-M-HOME" },
            { id: "TIT-001-L-HOME", size: "L", color: "Home", colorCode: "#FFD700", stock: 18, price: 18500, sku: "TIT-001-L-HOME" },
            { id: "TIT-001-XL-HOME", size: "XL", color: "Home", colorCode: "#FFD700", stock: 12, price: 18500, sku: "TIT-001-XL-HOME" },
            { id: "TIT-001-XXL-HOME", size: "XXL", color: "Home", colorCode: "#FFD700", stock: 8, price: 18500, sku: "TIT-001-XXL-HOME" }
        ],
        
        totalStock: 73,
        lowStockThreshold: 10,
        inStock: true,
        allowBackorder: false,
        stockStatus: "in-stock",
        
        gender: "unisex",
        ageGroup: "adults",
        recommendedAge: "12+",
        
        brand: "Nike",
        year: 2024,
        season: "2024-2025",
        printStatus: "printed",
        jerseyType: "home",
        playerNumber: null,
        playerName: null,
        
        authenticity: "official",
        quality: "premium",
        licensed: true,
        
        weight: 0.3,
        dimensions: { length: 70, width: 50, height: 5, unit: "cm" },
        shippingClass: "standard",
        freeShipping: false,
        freeShippingThreshold: 50000,
        
        metaTitle: "Brazil Home Jersey 2024-2025 - Official TITANSPORTS",
        metaDescription: "Buy official Brazil national team home jersey 2024-2025. Premium quality, authentic design with Nike Dri-FIT technology.",
        keywords: ["brazil", "jersey", "national team", "football", "2024", "nike"],
        tags: ["featured", "new-arrival"],
        
        featured: true,
        new: true,
        bestseller: false,
        sale: true,
        visible: true,
        sortOrder: 1,
        
        averageRating: 4.8,
        totalReviews: 156,
        reviews: [
            { id: "REV-001", user: "John K.", rating: 5, comment: "Excellent quality, exactly as described!", date: "2024-01-15", verified: true },
            { id: "REV-002", user: "Maria S.", rating: 4, comment: "Great jersey, shipping was fast", date: "2024-01-10", verified: true }
        ],
        
        relatedProducts: ["TIT-002", "TIT-003"],
        crossSellProducts: ["TIT-050", "TIT-051"],
        upSellProducts: ["TIT-100"],
        
        createdAt: "2024-01-01T00:00:00Z",
        updatedAt: "2024-01-15T00:00:00Z",
        publishedAt: "2024-01-01T00:00:00Z"
    },
    {
        id: "TIT-002",
        sku: "TIT-002",
        name: "Argentina Home Jersey 2024-2025",
        slug: "argentina-home-jersey-2024-2025",
        
        shortDescription: "Official Argentina national team home jersey for 2024-2025 season",
        longDescription: "Support the World Cup champions with this official Argentina home jersey. Features the iconic light blue and white stripes, premium fabric, and official team badge. A must-have for every Argentina fan.",
        features: [
            "Official Argentina team crest",
            "Adidas AEROREADY technology",
            "100% recycled polyester",
            "Classic vertical stripes design",
            "Authentic fit"
        ],
        specifications: {
            material: "100% Recycled Polyester",
            care: "Machine wash cold, tumble dry low",
            origin: "Made in Thailand",
            technology: "Adidas AEROREADY"
        },
        
        category: "jerseys",
        subcategory: "national-team",
        sport: "football",
        league: "National Team",
        team: "Argentina",
        
        price: 18900,
        currency: "KSH",
        compareAtPrice: 21000,
        discountPercentage: 10,
        taxIncluded: true,
        
        images: [
            {
                url: "https://i.pinimg.com/1200x/98/c1/5c/98c15c5687d66a9940ac89953fdf7901.jpg",
                alt: "Argentina Home Jersey 2024-2025 Front View",
                isPrimary: true
            }
        ],
        
        variants: [
            { id: "TIT-002-S-HOME", size: "S", color: "Home", colorCode: "#75B2DD", stock: 12, price: 18900, sku: "TIT-002-S-HOME" },
            { id: "TIT-002-M-HOME", size: "M", color: "Home", colorCode: "#75B2DD", stock: 25, price: 18900, sku: "TIT-002-M-HOME" },
            { id: "TIT-002-L-HOME", size: "L", color: "Home", colorCode: "#75B2DD", stock: 20, price: 18900, sku: "TIT-002-L-HOME" },
            { id: "TIT-002-XL-HOME", size: "XL", color: "Home", colorCode: "#75B2DD", stock: 15, price: 18900, sku: "TIT-002-XL-HOME" },
            { id: "TIT-002-XXL-HOME", size: "XXL", color: "Home", colorCode: "#75B2DD", stock: 10, price: 18900, sku: "TIT-002-XXL-HOME" }
        ],
        
        totalStock: 82,
        lowStockThreshold: 10,
        inStock: true,
        allowBackorder: false,
        stockStatus: "in-stock",
        
        gender: "unisex",
        ageGroup: "adults",
        recommendedAge: "12+",
        
        brand: "Adidas",
        year: 2024,
        season: "2024-2025",
        printStatus: "printed",
        jerseyType: "home",
        playerNumber: null,
        playerName: null,
        
        authenticity: "official",
        quality: "premium",
        licensed: true,
        
        weight: 0.3,
        dimensions: { length: 70, width: 50, height: 5, unit: "cm" },
        shippingClass: "standard",
        freeShipping: false,
        freeShippingThreshold: 50000,
        
        metaTitle: "Argentina Home Jersey 2024-2025 - Official TITANSPORTS",
        metaDescription: "Buy official Argentina national team home jersey 2024-2025. World Cup champions edition with Adidas AEROREADY technology.",
        keywords: ["argentina", "jersey", "national team", "football", "2024", "adidas", "world cup"],
        tags: ["featured", "bestseller", "new-arrival"],
        
        featured: true,
        new: true,
        bestseller: true,
        sale: true,
        visible: true,
        sortOrder: 2,
        
        averageRating: 4.9,
        totalReviews: 234,
        reviews: [
            { id: "REV-003", user: "Carlos M.", rating: 5, comment: "World champions! Amazing quality!", date: "2024-01-20", verified: true }
        ],
        
        relatedProducts: ["TIT-001", "TIT-003"],
        crossSellProducts: ["TIT-052", "TIT-053"],
        upSellProducts: ["TIT-101"],
        
        createdAt: "2024-01-01T00:00:00Z",
        updatedAt: "2024-01-20T00:00:00Z",
        publishedAt: "2024-01-01T00:00:00Z"
    },
    {
        id: "TIT-003",
        sku: "TIT-003",
        name: "Manchester City Home Jersey 2024-2025",
        slug: "manchester-city-home-jersey-2024-2025",
        
        shortDescription: "Official Manchester City home jersey for 2024-2025 Premier League season",
        longDescription: "Show your Manchester City pride with this official home jersey. Features the iconic sky blue design, Etihad Airways sponsorship, and premium Puma fabric technology.",
        features: [
            "Official Manchester City crest",
            "Puma dryCELL technology",
            "100% recycled polyester",
            "Etihad Airways sponsorship",
            "Premier League badges"
        ],
        specifications: {
            material: "100% Recycled Polyester",
            care: "Machine wash cold, tumble dry low",
            origin: "Made in Vietnam",
            technology: "Puma dryCELL"
        },
        
        category: "jerseys",
        subcategory: "club-jerseys",
        sport: "football",
        league: "Premier League",
        team: "Manchester City",
        
        price: 16900,
        currency: "KSH",
        compareAtPrice: 18000,
        discountPercentage: 6.1,
        taxIncluded: true,
        
        images: [
            {
                url: "https://i.pinimg.com/1200x/6a/ae/bb/6aaebb61188af24a2336554fd21f981d.jpg",
                alt: "Manchester City Home Jersey 2024-2025 Front View",
                isPrimary: true
            }
        ],
        
        variants: [
            { id: "TIT-003-S-HOME", size: "S", color: "Home", colorCode: "#6CABDD", stock: 10, price: 16900, sku: "TIT-003-S-HOME" },
            { id: "TIT-003-M-HOME", size: "M", color: "Home", colorCode: "#6CABDD", stock: 22, price: 16900, sku: "TIT-003-M-HOME" },
            { id: "TIT-003-L-HOME", size: "L", color: "Home", colorCode: "#6CABDD", stock: 18, price: 16900, sku: "TIT-003-L-HOME" },
            { id: "TIT-003-XL-HOME", size: "XL", color: "Home", colorCode: "#6CABDD", stock: 14, price: 16900, sku: "TIT-003-XL-HOME" },
            { id: "TIT-003-XXL-HOME", size: "XXL", color: "Home", colorCode: "#6CABDD", stock: 6, price: 16900, sku: "TIT-003-XXL-HOME" }
        ],
        
        totalStock: 70,
        lowStockThreshold: 10,
        inStock: true,
        allowBackorder: false,
        stockStatus: "in-stock",
        
        gender: "unisex",
        ageGroup: "adults",
        recommendedAge: "12+",
        
        brand: "Puma",
        year: 2024,
        season: "2024-2025",
        printStatus: "printed",
        jerseyType: "home",
        playerNumber: null,
        playerName: null,
        
        authenticity: "official",
        quality: "premium",
        licensed: true,
        
        weight: 0.3,
        dimensions: { length: 70, width: 50, height: 5, unit: "cm" },
        shippingClass: "standard",
        freeShipping: false,
        freeShippingThreshold: 50000,
        
        metaTitle: "Manchester City Home Jersey 2024-2025 - Official TITANSPORTS",
        metaDescription: "Buy official Manchester City home jersey 2024-2025. Premier League champions edition with Puma dryCELL technology.",
        keywords: ["manchester city", "jersey", "premier league", "football", "2024", "puma"],
        tags: ["featured", "new-arrival"],
        
        featured: true,
        new: true,
        bestseller: false,
        sale: true,
        visible: true,
        sortOrder: 3,
        
        averageRating: 4.7,
        totalReviews: 89,
        reviews: [],
        
        relatedProducts: ["TIT-004", "TIT-005"],
        crossSellProducts: ["TIT-054", "TIT-055"],
        upSellProducts: ["TIT-102"],
        
        createdAt: "2024-01-01T00:00:00Z",
        updatedAt: "2024-01-15T00:00:00Z",
        publishedAt: "2024-01-01T00:00:00Z"
    },
    {
        id: "TIT-050",
        sku: "TIT-050",
        name: "Professional Football Ball",
        slug: "professional-football-ball",
        
        shortDescription: "FIFA-approved professional match football",
        longDescription: "High-quality professional football approved by FIFA for official matches. Features advanced aerodynamics, excellent grip, and durable construction for optimal performance.",
        features: [
            "FIFA Quality Pro certified",
            "Thermal-bonded seamless surface",
            "Butyl bladder for air retention",
            "High-contrast graphics for visibility",
            "All-weather performance"
        ],
        specifications: {
            material: "PU Leather",
            size: "Size 5",
            weight: "420-450 grams",
            care: "Wipe clean with damp cloth",
            origin: "Made in Pakistan"
        },
        
        category: "equipment",
        subcategory: "balls",
        sport: "equipment",
        league: null,
        team: null,
        
        price: 4500,
        currency: "KSH",
        compareAtPrice: 5000,
        discountPercentage: 10,
        taxIncluded: true,
        
        images: [
            {
                url: "https://i.pinimg.com/736x/12/34/56/12345678901234567890123456789012.jpg",
                alt: "Professional Football Ball",
                isPrimary: true
            }
        ],
        
        variants: [
            { id: "TIT-050-SIZE5", size: "Size 5", color: "White/Black", colorCode: "#FFFFFF", stock: 25, price: 4500, sku: "TIT-050-SIZE5" },
            { id: "TIT-050-SIZE4", size: "Size 4", color: "White/Black", colorCode: "#FFFFFF", stock: 20, price: 4200, sku: "TIT-050-SIZE4" }
        ],
        
        totalStock: 45,
        lowStockThreshold: 10,
        inStock: true,
        allowBackorder: false,
        stockStatus: "in-stock",
        
        gender: "unisex",
        ageGroup: "all",
        recommendedAge: "12+",
        
        brand: "Adidas",
        year: 2024,
        season: "all-season",
        printStatus: null,
        jerseyType: null,
        playerNumber: null,
        playerName: null,
        
        authenticity: "official",
        quality: "premium",
        licensed: true,
        
        weight: 0.45,
        dimensions: { length: 22, width: 22, height: 22, unit: "cm" },
        shippingClass: "standard",
        freeShipping: false,
        freeShippingThreshold: 50000,
        
        metaTitle: "Professional Football Ball - FIFA Quality Pro - TITANSPORTS",
        metaDescription: "Buy FIFA Quality Pro certified professional football ball. Thermal-bonded seamless surface for optimal performance.",
        keywords: ["football", "ball", "professional", "fifa", "match ball"],
        tags: ["equipment", "bestseller"],
        
        featured: false,
        new: false,
        bestseller: true,
        sale: true,
        visible: true,
        sortOrder: 50,
        
        averageRating: 4.6,
        totalReviews: 67,
        reviews: [],
        
        relatedProducts: ["TIT-051", "TIT-052"],
        crossSellProducts: ["TIT-001", "TIT-002"],
        upSellProducts: [],
        
        createdAt: "2024-01-01T00:00:00Z",
        updatedAt: "2024-01-10T00:00:00Z",
        publishedAt: "2024-01-01T00:00:00Z"
    }
];

// Export functions for catalogue management
function getComprehensiveProducts() {
    return comprehensiveProducts;
}

function getProductById(id) {
    return comprehensiveProducts.find(p => p.id === id);
}

function getProductsByCategory(category) {
    return comprehensiveProducts.filter(p => p.category === category);
}

function getProductsBySport(sport) {
    return comprehensiveProducts.filter(p => p.sport === sport);
}

function getProductsByTeam(team) {
    return comprehensiveProducts.filter(p => p.team === team);
}

function getProductsByLeague(league) {
    return comprehensiveProducts.filter(p => p.league === league);
}

function searchProducts(query) {
    const lowerQuery = query.toLowerCase();
    return comprehensiveProducts.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) ||
        p.shortDescription.toLowerCase().includes(lowerQuery) ||
        p.team?.toLowerCase().includes(lowerQuery) ||
        p.league?.toLowerCase().includes(lowerQuery) ||
        p.keywords.some(k => k.toLowerCase().includes(lowerQuery))
    );
}

function filterProducts(filters) {
    let filtered = [...comprehensiveProducts];
    
    if (filters.category) {
        filtered = filtered.filter(p => p.category === filters.category);
    }
    if (filters.sport) {
        filtered = filtered.filter(p => p.sport === filters.sport);
    }
    if (filters.league) {
        filtered = filtered.filter(p => p.league === filters.league);
    }
    if (filters.team) {
        filtered = filtered.filter(p => p.team === filters.team);
    }
    if (filters.gender) {
        filtered = filtered.filter(p => p.gender === filters.gender || p.gender === 'unisex');
    }
    if (filters.ageGroup) {
        filtered = filtered.filter(p => p.ageGroup === filters.ageGroup || p.ageGroup === 'all');
    }
    if (filters.priceMin) {
        filtered = filtered.filter(p => p.price >= filters.priceMin);
    }
    if (filters.priceMax) {
        filtered = filtered.filter(p => p.price <= filters.priceMax);
    }
    if (filters.inStockOnly) {
        filtered = filtered.filter(p => p.inStock);
    }
    if (filters.onSale) {
        filtered = filtered.filter(p => p.sale);
    }
    
    return filtered;
}

function sortProducts(products, sortBy) {
    const sorted = [...products];
    
    switch(sortBy) {
        case 'price-asc':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sorted.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'newest':
            sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            break;
        case 'bestselling':
            sorted.sort((a, b) => b.totalReviews - a.totalReviews);
            break;
        case 'rating':
            sorted.sort((a, b) => b.averageRating - a.averageRating);
            break;
        default:
            break;
    }
    
    return sorted;
}

function getFeaturedProducts() {
    return comprehensiveProducts.filter(p => p.featured);
}

function getNewProducts() {
    return comprehensiveProducts.filter(p => p.new);
}

function getBestsellerProducts() {
    return comprehensiveProducts.filter(p => p.bestseller);
}

function getSaleProducts() {
    return comprehensiveProducts.filter(p => p.sale);
}

function getLowStockProducts() {
    return comprehensiveProducts.filter(p => p.stockStatus === 'low-stock');
}

function getOutOfStockProducts() {
    return comprehensiveProducts.filter(p => p.stockStatus === 'out-of-stock');
}

// Initialize catalogue in localStorage
function initializeComprehensiveCatalogue() {
    if (!localStorage.getItem('comprehensiveProducts')) {
        localStorage.setItem('comprehensiveProducts', JSON.stringify(comprehensiveProducts));
    }
}

// Get catalogue from localStorage
function getStoredComprehensiveCatalogue() {
    const stored = localStorage.getItem('comprehensiveProducts');
    if (stored) {
        return JSON.parse(stored);
    }
    return comprehensiveProducts;
}

// Save catalogue to localStorage
function saveComprehensiveCatalogue(products) {
    localStorage.setItem('comprehensiveProducts', JSON.stringify(products));
}

// Add new product to catalogue
function addProductToCatalogue(product) {
    const products = getStoredComprehensiveCatalogue();
    products.push(product);
    saveComprehensiveCatalogue(products);
}

// Update product in catalogue
function updateProductInCatalogue(productId, updatedProduct) {
    const products = getStoredComprehensiveCatalogue();
    const index = products.findIndex(p => p.id === productId);
    if (index !== -1) {
        products[index] = { ...products[index], ...updatedProduct, updatedAt: new Date().toISOString() };
        saveComprehensiveCatalogue(products);
    }
}

// Delete product from catalogue
function deleteProductFromCatalogue(productId) {
    const products = getStoredComprehensiveCatalogue();
    const filtered = products.filter(p => p.id !== productId);
    saveComprehensiveCatalogue(filtered);
}

// Initialize on load
initializeComprehensiveCatalogue();
