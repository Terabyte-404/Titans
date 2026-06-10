// Check authentication
function checkAuth() {
    const isAuthenticated = localStorage.getItem('kitHubAdminAuth');
    if (isAuthenticated !== 'true') {
        window.location.href = 'login.html';
    }
}

// Logout function
function logout() {
    localStorage.removeItem('kitHubAdminAuth');
    window.location.href = 'login.html';
}

// Initialize products from localStorage or use default products
const defaultProducts = [
    // Football - Premier League
    {
        id: 1,
        name: "Manchester City Home 2026",
        sport: "football",
        league: "Premier League",
        price: 16900,
        image: "https://i.pinimg.com/1200x/6a/ae/bb/6aaebb61188af24a2336554fd21f981d.jpg"
    },
    {
        id: 2,
        name: "Arsenal Home 2026",
        sport: "football",
        league: "Premier League",
        price: 15500,
        image: "https://i.pinimg.com/736x/35/8a/c6/358ac683f7992ce5211279f57ecff85d.jpg"
    },
    {
        id: 3,
        name: "Chelsea Home 2026",
        sport: "football",
        league: "Premier League",
        price: 15500,
        image: "https://i.pinimg.com/1200x/f6/51/09/f651094f603b7277a4eeb824edb793af.jpg"
    },
    {
        id: 4,
        name: "Liverpool Home 2026",
        sport: "football",
        league: "Premier League",
        price: 16200,
        image: "https://i.pinimg.com/1200x/c9/df/e6/c9dfe67a46c408a3edbd2d7bfb659f59.jpg"
    },
    {
        id: 5,
        name: "Manchester United Home 2026",
        sport: "football",
        league: "Premier League",
        price: 16800,
        image: "https://i.pinimg.com/736x/87/65/43/87654321098765432109876543210987.jpg"
    },
    // Football - La Liga
    {
        id: 6,
        name: "Real Madrid Home 2026",
        sport: "football",
        league: "La Liga",
        price: 18200,
        image: "https://i.pinimg.com/736x/bf/c5/89/bfc589c46649a1c6978872470d1a8850.jpg"
    },
    {
        id: 7,
        name: "Barcelona Home 2026",
        sport: "football",
        league: "La Liga",
        price: 17500,
        image: "https://i.pinimg.com/736x/08/c0/9e/08c09e8fad4ccabab2bcb76cfc595ff7.jpg"
    },
    {
        id: 8,
        name: "Atletico Madrid Home 2026",
        sport: "football",
        league: "La Liga",
        price: 15800,
        image: "https://i.pinimg.com/736x/21/09/87/21098765432109876543210987654321.jpg"
    },
    // Football - National Teams
    {
        id: 9,
        name: "Brazil National Home",
        sport: "football",
        league: "National Team",
        price: 19500,
        image: "https://i.pinimg.com/736x/64/9b/73/649b735a438ce46f54cfbd3a41996be5.jpg"
    },
    {
        id: 10,
        name: "Argentina National Home",
        sport: "football",
        league: "National Team",
        price: 18800,
        image: "https://i.pinimg.com/736x/c9/88/55/c988558e3c9f723c3374680463ea2722.jpg"
    },
    {
        id: 11,
        name: "Germany National Home",
        sport: "football",
        league: "National Team",
        price: 17200,
        image: "https://i.pinimg.com/736x/98/76/54/98765432109876543210987654321098.jpg"
    },
    {
        id: 12,
        name: "France National Home",
        sport: "football",
        league: "National Team",
        price: 17800,
        image: "https://i.pinimg.com/736x/54/32/10/54321098765432109876543210123456.jpg"
    },
    // Basketball - NBA
    {
        id: 13,
        name: "Los Angeles Lakers Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 22000,
        image: "https://i.pinimg.com/736x/5f/8e/4b/5f8e4b12345678901234567890123456.jpg"
    },
    {
        id: 14,
        name: "Chicago Bulls Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 21000,
        image: "https://i.pinimg.com/736x/ab/cd/ef/abcdef12345678901234567890123456.jpg"
    },
    {
        id: 15,
        name: "Golden State Warriors Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 21500,
        image: "https://i.pinimg.com/736x/12/34/56/12345678901234567890123456789012.jpg"
    },
    {
        id: 16,
        name: "Boston Celtics Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 21800,
        image: "https://i.pinimg.com/736x/76/54/32/76543210987654321098765432109876.jpg"
    },
    {
        id: 17,
        name: "Miami Heat Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 20500,
        image: "https://i.pinimg.com/736x/32/10/98/32109876543210987654321098765432.jpg"
    },
    {
        id: 18,
        name: "Brooklyn Nets Home 2026",
        sport: "basketball",
        league: "NBA",
        price: 21200,
        image: "https://i.pinimg.com/736x/10/98/76/10987654321098765432109876543210.jpg"
    },
    // NFL
    {
        id: 19,
        name: "Kansas City Chiefs Home 2026",
        sport: "nfl",
        league: "NFL",
        price: 24500,
        image: "https://i.pinimg.com/736x/fe/dc/ba/fedcba98765432109876543210987654.jpg"
    },
    {
        id: 20,
        name: "Dallas Cowboys Home 2026",
        sport: "nfl",
        league: "NFL",
        price: 23500,
        image: "https://i.pinimg.com/736x/98/76/54/98765432109876543210987654321098.jpg"
    },
    {
        id: 21,
        name: "New England Patriots Home 2026",
        sport: "nfl",
        league: "NFL",
        price: 23800,
        image: "https://i.pinimg.com/736x/65/43/21/65432109876543210987654321098765.jpg"
    },
    {
        id: 22,
        name: "Green Bay Packers Home 2026",
        sport: "nfl",
        league: "NFL",
        price: 24200,
        image: "https://i.pinimg.com/736x/43/21/09/43210987654321098765432109876543.jpg"
    },
    {
        id: 23,
        name: "San Francisco 49ers Home 2026",
        sport: "nfl",
        league: "NFL",
        price: 24000,
        image: "https://i.pinimg.com/736x/21/09/87/21098765432109876543210987654321.jpg"
    },
    {
        id: 24,
        name: "Philadelphia Eagles Home 2026",
        sport: "nfl",
        league: "NFL",
        price: 23600,
        image: "https://i.pinimg.com/736x/87/65/43/87654321098765432109876543210987.jpg"
    },
    // MLB
    {
        id: 25,
        name: "New York Yankees Home 2026",
        sport: "mlb",
        league: "MLB",
        price: 19500,
        image: "https://i.pinimg.com/736x/54/32/10/54321098765432109876543210123456.jpg"
    },
    {
        id: 26,
        name: "Boston Red Sox Home 2026",
        sport: "mlb",
        league: "MLB",
        price: 18500,
        image: "https://i.pinimg.com/736x/10/98/76/10987654321098765432109876543210.jpg"
    },
    {
        id: 27,
        name: "Los Angeles Dodgers Home 2026",
        sport: "mlb",
        league: "MLB",
        price: 19200,
        image: "https://i.pinimg.com/736x/76/54/32/76543210987654321098765432109876.jpg"
    },
    {
        id: 28,
        name: "Chicago Cubs Home 2026",
        sport: "mlb",
        league: "MLB",
        price: 17800,
        image: "https://i.pinimg.com/736x/32/10/98/32109876543210987654321098765432.jpg"
    },
    {
        id: 29,
        name: "San Francisco Giants Home 2026",
        sport: "mlb",
        league: "MLB",
        price: 18800,
        image: "https://i.pinimg.com/736x/98/76/54/98765432109876543210987654321098.jpg"
    },
    {
        id: 30,
        name: "Atlanta Braves Home 2026",
        sport: "mlb",
        league: "MLB",
        price: 18200,
        image: "https://i.pinimg.com/736x/65/43/21/65432109876543210987654321098765.jpg"
    },
    // NHL
    {
        id: 31,
        name: "Toronto Maple Leafs Home 2026",
        sport: "nhl",
        league: "NHL",
        price: 20500,
        image: "https://i.pinimg.com/736x/43/21/09/43210987654321098765432109876543.jpg"
    },
    {
        id: 32,
        name: "Boston Bruins Home 2026",
        sport: "nhl",
        league: "NHL",
        price: 19800,
        image: "https://i.pinimg.com/736x/21/09/87/21098765432109876543210987654321.jpg"
    },
    {
        id: 33,
        name: "Chicago Blackhawks Home 2026",
        sport: "nhl",
        league: "NHL",
        price: 19200,
        image: "https://i.pinimg.com/736x/87/65/43/87654321098765432109876543210987.jpg"
    },
    {
        id: 34,
        name: "Montreal Canadiens Home 2026",
        sport: "nhl",
        league: "NHL",
        price: 20000,
        image: "https://i.pinimg.com/736x/54/32/10/54321098765432109876543210123456.jpg"
    },
    {
        id: 35,
        name: "Vancouver Canucks Home 2026",
        sport: "nhl",
        league: "NHL",
        price: 19500,
        image: "https://i.pinimg.com/736x/10/98/76/10987654321098765432109876543210.jpg"
    },
    // Cricket
    {
        id: 36,
        name: "India National Cricket Jersey 2026",
        sport: "cricket",
        league: "International",
        price: 17500,
        image: "https://i.pinimg.com/736x/76/54/32/76543210987654321098765432109876.jpg"
    },
    {
        id: 37,
        name: "Australia National Cricket Jersey 2026",
        sport: "cricket",
        league: "International",
        price: 16800,
        image: "https://i.pinimg.com/736x/32/10/98/32109876543210987654321098765432.jpg"
    },
    {
        id: 38,
        name: "England National Cricket Jersey 2026",
        sport: "cricket",
        league: "International",
        price: 17200,
        image: "https://i.pinimg.com/736x/98/76/54/98765432109876543210987654321098.jpg"
    },
    {
        id: 39,
        name: "Pakistan National Cricket Jersey 2026",
        sport: "cricket",
        league: "International",
        price: 16500,
        image: "https://i.pinimg.com/736x/65/43/21/65432109876543210987654321098765.jpg"
    },
    {
        id: 40,
        name: "South Africa National Cricket Jersey 2026",
        sport: "cricket",
        league: "International",
        price: 17000,
        image: "https://i.pinimg.com/736x/43/21/09/43210987654321098765432109876543.jpg"
    },
    {
        id: 41,
        name: "New Zealand National Cricket Jersey 2026",
        sport: "cricket",
        league: "International",
        price: 16200,
        image: "https://i.pinimg.com/736x/21/09/87/21098765432109876543210987654321.jpg"
    },
    // Rugby
    {
        id: 42,
        name: "New Zealand All Blacks Home 2026",
        sport: "rugby",
        league: "International",
        price: 22500,
        image: "https://i.pinimg.com/736x/87/65/43/87654321098765432109876543210987.jpg"
    },
    {
        id: 43,
        name: "South Africa Springboks Home 2026",
        sport: "rugby",
        league: "International",
        price: 21500,
        image: "https://i.pinimg.com/736x/54/32/10/54321098765432109876543210123456.jpg"
    },
    {
        id: 44,
        name: "England Rugby Home 2026",
        sport: "rugby",
        league: "International",
        price: 20800,
        image: "https://i.pinimg.com/736x/10/98/76/10987654321098765432109876543210.jpg"
    },
    {
        id: 45,
        name: "Australia Wallabies Home 2026",
        sport: "rugby",
        league: "International",
        price: 20500,
        image: "https://i.pinimg.com/736x/76/54/32/76543210987654321098765432109876.jpg"
    },
    {
        id: 46,
        name: "France Rugby Home 2026",
        sport: "rugby",
        league: "International",
        price: 21200,
        image: "https://i.pinimg.com/736x/32/10/98/32109876543210987654321098765432.jpg"
    },
    {
        id: 47,
        name: "Ireland Rugby Home 2026",
        sport: "rugby",
        league: "International",
        price: 20000,
        image: "https://i.pinimg.com/736x/98/76/54/98765432109876543210987654321098.jpg"
    }
];

// Get products from localStorage or initialize with defaults
function getProducts() {
    const stored = localStorage.getItem('kitHubProducts');
    if (stored) {
        return JSON.parse(stored);
    }
    localStorage.setItem('kitHubProducts', JSON.stringify(defaultProducts));
    return defaultProducts;
}

// Save products to localStorage
function saveProducts(products) {
    localStorage.setItem('kitHubProducts', JSON.stringify(products));
}

// Render products list in admin panel
function renderProductsList() {
    const productsList = document.getElementById('productsList');
    const products = getProducts();
    
    if (products.length === 0) {
        productsList.innerHTML = '<div class="empty-state">No products yet. Add your first product above!</div>';
        return;
    }
    
    productsList.innerHTML = products.map(product => `
        <div class="product-item">
            <img src="${product.image}" alt="${product.name}" class="product-item-image">
            <div class="product-item-details">
                <div class="product-item-name">${product.name}</div>
                <div class="product-item-info">${product.sport.charAt(0).toUpperCase() + product.sport.slice(1)} - ${product.league}</div>
                <div class="product-item-price">KSH ${product.price.toLocaleString()}</div>
            </div>
            <div class="product-item-actions">
                <button class="delete-btn" onclick="deleteProduct(${product.id})">DELETE</button>
            </div>
        </div>
    `).join('');
}

// Add new product
function addProduct(event) {
    event.preventDefault();
    
    const name = document.getElementById('productName').value;
    const sport = document.getElementById('productSport').value;
    const league = document.getElementById('productLeague').value;
    const price = parseInt(document.getElementById('productPrice').value);
    const image = document.getElementById('productImage').value;
    
    const products = getProducts();
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    
    const newProduct = {
        id: newId,
        name: name,
        sport: sport,
        league: league,
        price: price,
        image: image
    };
    
    products.push(newProduct);
    saveProducts(products);
    
    // Reset form
    document.getElementById('productForm').reset();
    
    // Re-render list
    renderProductsList();
    
    alert('Product added successfully!');
}

// Delete product
function deleteProduct(productId) {
    if (!confirm('Are you sure you want to delete this product?')) {
        return;
    }
    
    const products = getProducts();
    const filtered = products.filter(p => p.id !== productId);
    saveProducts(filtered);
    renderProductsList();
    
    alert('Product deleted successfully!');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    renderProductsList();
    
    // Add form submit listener
    document.getElementById('productForm').addEventListener('submit', addProduct);
});
