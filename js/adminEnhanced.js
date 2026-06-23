// Enhanced Admin Panel JavaScript
// Handles product management, analytics, progress tracking, and validation

let uploadedFile = null;
let currentProducts = [];
let activityLog = [];
let uploadProgress = {
    validation: 0,
    imageProcessing: 0,
    dataUpload: 0
};
let localImageFile = null;
let singleLocalImageFile = null;
let uploadSettings = {
    autoResize: true,
    autoCompress: true,
    generateThumbnails: true,
    addWatermark: false
};
let uploadStats = {
    totalUploads: 0,
    successfulUploads: 0,
    totalUploadTime: 0
};

// Check admin authentication
function checkAdminAuth() {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (!user) {
                // Not authenticated, redirect to admin login
                window.location.href = 'admin-login.html';
                reject(new Error('Not authenticated'));
                return;
            }

            try {
                // Check if user has admin role
                const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
                const userData = userDoc.data();
                
                if (userData && userData.role === 'admin') {
                    // User is admin, proceed
                    resolve(user);
                } else {
                    // User is not admin, redirect to admin login
                    alert('You do not have admin privileges.');
                    window.location.href = 'admin-login.html';
                    reject(new Error('Not admin'));
                }
            } catch (error) {
                console.error('Error checking admin status:', error);
                window.location.href = 'admin-login.html';
                reject(error);
            }
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check admin authentication first
    checkAdminAuth()
        .then(() => {
            initializeAdminPanel();
        })
        .catch((error) => {
            console.error('Authentication failed:', error);
        });
});

function initializeAdminPanel() {
    // Load products from storage
    currentProducts = getStoredProducts();
    
    // Load activity log
    activityLog = JSON.parse(localStorage.getItem('adminActivityLog') || '[]');
    
    // Setup event listeners
    setupEventListeners();
    
    // Load dashboard data
    loadDashboardData();
    
    // Load products table
    loadProductsTable();
    
    // Setup drag and drop
    setupDragAndDrop();
    
    // Setup local image upload
    setupLocalImageUpload();
    
    // Setup single product image handling
    setupSingleProductImageHandling();
    
    // Setup upload details settings
    setupUploadDetailsSettings();
    
    // Load upload statistics
    loadUploadStatistics();
}

function getStoredProducts() {
    // Try to load from various storage keys
    const stored = localStorage.getItem('products') || 
                   localStorage.getItem('titanSportsProducts') || 
                   localStorage.getItem('kitHubProducts');
    
    if (stored) {
        return JSON.parse(stored);
    }
    
    // Return empty array if no products found
    return [];
}

function setupEventListeners() {
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.textContent.toLowerCase().replace(' ', '');
            switchTab(tabName);
        });
    });
    
    // File upload
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
        fileInput.addEventListener('change', handleFileSelect);
    }
    
    // Single product form
    const singleProductForm = document.getElementById('singleProductForm');
    if (singleProductForm) {
        singleProductForm.addEventListener('submit', handleSingleProductSubmit);
    }
    
    // Search and filter for products
    const manageSearch = document.getElementById('manageSearch');
    if (manageSearch) {
        manageSearch.addEventListener('input', filterProductsTable);
    }
    
    const manageFilter = document.getElementById('manageFilter');
    if (manageFilter) {
        manageFilter.addEventListener('change', filterProductsTable);
    }
    
    // Search and filter for orders
    const orderSearch = document.getElementById('orderSearch');
    if (orderSearch) {
        orderSearch.addEventListener('input', filterOrdersTable);
    }
    
    const orderStatusFilter = document.getElementById('orderStatusFilter');
    if (orderStatusFilter) {
        orderStatusFilter.addEventListener('change', filterOrdersTable);
    }
    
    const paymentStatusFilter = document.getElementById('paymentStatusFilter');
    if (paymentStatusFilter) {
        paymentStatusFilter.addEventListener('change', filterOrdersTable);
    }
}

// Load Dashboard Data
function loadDashboardData() {
    // Update statistics with error handling
    const totalProductsEl = document.getElementById('totalProducts');
    if (totalProductsEl) totalProductsEl.textContent = currentProducts.length;
    
    // Calculate total inventory (sum of all product quantities if available)
    const totalInventory = currentProducts.reduce((sum, product) => {
        return sum + (product.quantity || product.stock || 1);
    }, 0);
    const totalInventoryEl = document.getElementById('totalInventory');
    if (totalInventoryEl) totalInventoryEl.textContent = totalInventory;
    
    // Count unique categories
    const categories = new Set(currentProducts.map(p => p.category || p.sport || 'uncategorized'));
    const totalCategoriesEl = document.getElementById('totalCategories');
    if (totalCategoriesEl) totalCategoriesEl.textContent = categories.size;
    
    // Update upload progress display
    const overallProgress = Math.round(
        (uploadProgress.validation + uploadProgress.imageProcessing + uploadProgress.dataUpload) / 3
    );
    const uploadProgressEl = document.getElementById('uploadProgress');
    if (uploadProgressEl) uploadProgressEl.textContent = overallProgress + '%';
    
    // Update progress bars with error handling
    const validationProgressEl = document.getElementById('validationProgress');
    const validationBarEl = document.getElementById('validationBar');
    if (validationProgressEl) validationProgressEl.textContent = uploadProgress.validation + '%';
    if (validationBarEl) validationBarEl.style.width = uploadProgress.validation + '%';
    
    const imageProgressEl = document.getElementById('imageProgress');
    const imageBarEl = document.getElementById('imageBar');
    if (imageProgressEl) imageProgressEl.textContent = uploadProgress.imageProcessing + '%';
    if (imageBarEl) imageBarEl.style.width = uploadProgress.imageProcessing + '%';
    
    const dataProgressEl = document.getElementById('dataProgress');
    const dataBarEl = document.getElementById('dataBar');
    if (dataProgressEl) dataProgressEl.textContent = uploadProgress.dataUpload + '%';
    if (dataBarEl) dataBarEl.style.width = uploadProgress.dataUpload + '%';
    
    // Load recent activity
    loadRecentActivity();
}

// Load Recent Activity
function loadRecentActivity() {
    const activityContainer = document.getElementById('recentActivity');
    
    if (activityLog.length === 0) {
        activityContainer.innerHTML = '<p style="color: #718096; font-style: italic;">No recent activity</p>';
        return;
    }
    
    // Show last 5 activities
    const recentActivities = activityLog.slice(-5).reverse();
    
    activityContainer.innerHTML = recentActivities.map(activity => `
        <div style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">
            <div style="font-weight: 500; color: #2d3748;">${activity.action}</div>
            <div style="font-size: 0.85rem; color: #718096;">${activity.timestamp}</div>
        </div>
    `).join('');
}

// Log Activity
function logActivity(action) {
    const activity = {
        action: action,
        timestamp: new Date().toLocaleString()
    };
    
    activityLog.push(activity);
    
    // Keep only last 50 activities
    if (activityLog.length > 50) {
        activityLog = activityLog.slice(-50);
    }
    
    localStorage.setItem('adminActivityLog', JSON.stringify(activityLog));
    
    // Update dashboard if visible
    loadRecentActivity();
}

// Setup Drag and Drop
function setupDragAndDrop() {
    const dropZone = document.getElementById('dropZone');
    
    if (!dropZone) return;
    
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
    });
    
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => {
            dropZone.classList.add('dragover');
        }, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => {
            dropZone.classList.remove('dragover');
        }, false);
    });
    
    dropZone.addEventListener('drop', handleDrop, false);
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    
    if (files.length > 0) {
        handleFileSelect({ target: { files: files } });
    }
}

// Setup Local Image Upload
function setupLocalImageUpload() {
    const localImageInput = document.getElementById('localImageInput');
    const localImageDropZone = document.getElementById('localImageDropZone');
    
    if (!localImageInput || !localImageDropZone) return;
    
    // File input change
    localImageInput.addEventListener('change', handleLocalImageSelect);
    
    // Drag and drop for local image
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        localImageDropZone.addEventListener(eventName, preventDefaults, false);
    });
    
    ['dragenter', 'dragover'].forEach(eventName => {
        localImageDropZone.addEventListener(eventName, () => {
            localImageDropZone.classList.add('dragover');
        }, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        localImageDropZone.addEventListener(eventName, () => {
            localImageDropZone.classList.remove('dragover');
        }, false);
    });
    
    localImageDropZone.addEventListener('drop', handleLocalImageDrop, false);
}

function handleLocalImageSelect(event) {
    const file = event.target.files[0];
    if (file) {
        localImageFile = file;
        document.getElementById('localImageFileName').textContent = `Selected: ${file.name}`;
        previewLocalImage(file);
    }
}

function handleLocalImageDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    
    if (files.length > 0) {
        localImageFile = files[0];
        document.getElementById('localImageFileName').textContent = `Selected: ${files[0].name}`;
        previewLocalImage(files[0]);
    }
}

function previewLocalImage(file) {
    const previewContainer = document.getElementById('localImagePreview');
    
    if (previewContainer && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewContainer.innerHTML = `
                <img src="${e.target.result}" alt="Preview" style="max-width: 200px; max-height: 200px; border-radius: 8px; border: 1px solid #e2e8f0;">
            `;
        };
        reader.readAsDataURL(file);
    }
}

// Setup Single Product Image Handling
function setupSingleProductImageHandling() {
    const singleImageSource = document.getElementById('singleImageSource');
    const singleImageInput = document.getElementById('singleImage');
    const singlePinterestInput = document.getElementById('singlePinterestImage');
    const singleLocalInput = document.getElementById('singleLocalImageInput');
    const singleLocalDropZone = document.getElementById('singleLocalDropZone');
    
    if (!singleImageSource) return;
    
    // Image URL preview
    if (singleImageInput) {
        singleImageInput.addEventListener('input', function() {
            const previewContainer = document.getElementById('singleImagePreview');
            if (this.value && previewContainer) {
                previewContainer.innerHTML = `
                    <img src="${this.value}" alt="Preview" style="max-width: 200px; max-height: 200px; border-radius: 8px; border: 1px solid #e2e8f0;" onerror="this.style.display='none';">
                `;
            } else if (previewContainer) {
                previewContainer.innerHTML = '';
            }
        });
    }
    
    // Pinterest URL preview
    if (singlePinterestInput) {
        singlePinterestInput.addEventListener('input', function() {
            const previewContainer = document.getElementById('singlePinterestPreview');
            if (this.value && previewContainer) {
                previewContainer.innerHTML = `
                    <img src="${this.value}" alt="Preview" style="max-width: 200px; max-height: 200px; border-radius: 8px; border: 1px solid #e2e8f0;" onerror="this.style.display='none';">
                `;
            } else if (previewContainer) {
                previewContainer.innerHTML = '';
            }
        });
    }
    
    // Local image upload
    if (singleLocalInput && singleLocalDropZone) {
        singleLocalInput.addEventListener('change', handleSingleLocalImageSelect);
        
        // Drag and drop
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            singleLocalDropZone.addEventListener(eventName, preventDefaults, false);
        });
        
        ['dragenter', 'dragover'].forEach(eventName => {
            singleLocalDropZone.addEventListener(eventName, () => {
                singleLocalDropZone.classList.add('dragover');
            }, false);
        });
        
        ['dragleave', 'drop'].forEach(eventName => {
            singleLocalDropZone.addEventListener(eventName, () => {
                singleLocalDropZone.classList.remove('dragover');
            }, false);
        });
        
        singleLocalDropZone.addEventListener('drop', handleSingleLocalImageDrop, false);
    }
}

function handleSingleLocalImageSelect(event) {
    const file = event.target.files[0];
    if (file) {
        singleLocalImageFile = file;
        document.getElementById('singleLocalFileName').textContent = `Selected: ${file.name}`;
        previewSingleLocalImage(file);
    }
}

function handleSingleLocalImageDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    
    if (files.length > 0) {
        singleLocalImageFile = files[0];
        document.getElementById('singleLocalFileName').textContent = `Selected: ${files[0].name}`;
        previewSingleLocalImage(files[0]);
    }
}

function previewSingleLocalImage(file) {
    const previewContainer = document.getElementById('singleLocalPreview');
    
    if (previewContainer && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewContainer.innerHTML = `
                <img src="${e.target.result}" alt="Preview" style="max-width: 200px; max-height: 200px; border-radius: 8px; border: 1px solid #e2e8f0;">
            `;
        };
        reader.readAsDataURL(file);
    }
}

// Toggle Single Product Image Source
function toggleSingleImageSource() {
    const source = document.getElementById('singleImageSource').value;
    const urlSection = document.getElementById('singleImageUrlSection');
    const pinterestSection = document.getElementById('singlePinterestSection');
    const localSection = document.getElementById('singleLocalSection');
    
    // Hide all sections
    urlSection.style.display = 'none';
    pinterestSection.style.display = 'none';
    localSection.style.display = 'none';
    
    // Show selected section
    if (source === 'url') {
        urlSection.style.display = 'block';
    } else if (source === 'pinterest') {
        pinterestSection.style.display = 'block';
    } else if (source === 'local') {
        localSection.style.display = 'block';
    }
}

// Setup Upload Details Settings
function setupUploadDetailsSettings() {
    const autoResize = document.getElementById('autoResize');
    const autoCompress = document.getElementById('autoCompress');
    const generateThumbnails = document.getElementById('generateThumbnails');
    const addWatermark = document.getElementById('addWatermark');
    
    if (autoResize) {
        autoResize.addEventListener('change', function() {
            uploadSettings.autoResize = this.checked;
            saveUploadSettings();
        });
    }
    
    if (autoCompress) {
        autoCompress.addEventListener('change', function() {
            uploadSettings.autoCompress = this.checked;
            saveUploadSettings();
        });
    }
    
    if (generateThumbnails) {
        generateThumbnails.addEventListener('change', function() {
            uploadSettings.generateThumbnails = this.checked;
            saveUploadSettings();
        });
    }
    
    if (addWatermark) {
        addWatermark.addEventListener('change', function() {
            uploadSettings.addWatermark = this.checked;
            saveUploadSettings();
        });
    }
    
    // Load saved settings
    loadUploadSettings();
}

// Load Upload Settings
function loadUploadSettings() {
    const savedSettings = localStorage.getItem('uploadSettings');
    if (savedSettings) {
        uploadSettings = JSON.parse(savedSettings);
        
        // Update checkboxes
        const autoResize = document.getElementById('autoResize');
        const autoCompress = document.getElementById('autoCompress');
        const generateThumbnails = document.getElementById('generateThumbnails');
        const addWatermark = document.getElementById('addWatermark');
        
        if (autoResize) autoResize.checked = uploadSettings.autoResize;
        if (autoCompress) autoCompress.checked = uploadSettings.autoCompress;
        if (generateThumbnails) generateThumbnails.checked = uploadSettings.generateThumbnails;
        if (addWatermark) addWatermark.checked = uploadSettings.addWatermark;
    }
}

// Save Upload Settings
function saveUploadSettings() {
    localStorage.setItem('uploadSettings', JSON.stringify(uploadSettings));
}

// Load Upload Statistics
function loadUploadStatistics() {
    const savedStats = localStorage.getItem('uploadStats');
    if (savedStats) {
        uploadStats = JSON.parse(savedStats);
    }
    updateUploadStatisticsDisplay();
}

// Update Upload Statistics Display
function updateUploadStatisticsDisplay() {
    const totalUploads = document.getElementById('totalUploads');
    const successRate = document.getElementById('successRate');
    const avgUploadTime = document.getElementById('avgUploadTime');
    
    if (totalUploads) totalUploads.textContent = uploadStats.totalUploads;
    
    if (successRate) {
        const rate = uploadStats.totalUploads > 0 
            ? Math.round((uploadStats.successfulUploads / uploadStats.totalUploads) * 100) 
            : 100;
        successRate.textContent = rate + '%';
    }
    
    if (avgUploadTime) {
        const avgTime = uploadStats.totalUploads > 0 
            ? Math.round(uploadStats.totalUploadTime / uploadStats.totalUploads) 
            : 0;
        avgUploadTime.textContent = avgTime + 's';
    }
}

// Update Upload Statistics
function updateUploadStatistics(success, uploadTime) {
    uploadStats.totalUploads++;
    if (success) {
        uploadStats.successfulUploads++;
    }
    uploadStats.totalUploadTime += uploadTime;
    
    localStorage.setItem('uploadStats', JSON.stringify(uploadStats));
    updateUploadStatisticsDisplay();
}

// Category and Subcategory Data
const categorySubCategories = {
    national: ['Brazil', 'Argentina', 'Germany', 'France', 'Spain', 'Italy', 'Netherlands', 'Portugal', 'Belgium', 'Croatia', 'Uruguay', 'Mexico', 'England', 'Japan', 'South Korea', 'Australia'],
    club: ['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1', 'MLS', 'Eredivisie', 'Primeira Liga', 'Brasileirão', 'Liga MX'],
    basketball: ['NBA', 'WNBA', 'EuroLeague'],
    nfl: ['NFL'],
    mlb: ['MLB'],
    nhl: ['NHL'],
    cricket: ['International', 'IPL', 'Big Bash', 'County Cricket'],
    rugby: ['International', 'Super Rugby', 'Six Nations', 'Rugby Championship'],
    retro: ['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1', 'NBA', 'NFL', 'MLB', 'NHL'],
    plain: ['Men', 'Women', 'Kids', 'Unisex'],
    equipment: ['Balls', 'Gear', 'Accessories', 'Apparel', 'Tools']
};

// Update subcategories based on category selection
function updateSubCategories(prefix) {
    const categorySelect = document.getElementById(prefix + 'ProductCategory') || document.getElementById(prefix + 'Category');
    const subCategoryGroup = document.getElementById(prefix + 'SubCategoryGroup');
    const subCategorySelect = document.getElementById(prefix + 'SubCategory');
    
    if (!categorySelect || !subCategoryGroup || !subCategorySelect) return;
    
    const selectedCategory = categorySelect.value;
    
    // Show/hide subcategory group based on category
    if (selectedCategory && categorySubCategories[selectedCategory]) {
        subCategoryGroup.style.display = 'block';
        
        // Clear existing options
        subCategorySelect.innerHTML = '<option value="">Select Team/League</option>';
        
        // Add new options based on category
        categorySubCategories[selectedCategory].forEach(sub => {
            const option = document.createElement('option');
            option.value = sub;
            option.textContent = sub;
            subCategorySelect.appendChild(option);
        });
        
        // Make subcategory required for categories that have teams
        if (['national', 'club', 'basketball', 'nfl', 'mlb', 'nhl', 'cricket', 'rugby', 'retro'].includes(selectedCategory)) {
            subCategorySelect.setAttribute('required', 'required');
        } else {
            subCategorySelect.removeAttribute('required');
        }
    } else {
        subCategoryGroup.style.display = 'none';
        subCategorySelect.innerHTML = '<option value="">Select Team/League</option>';
        subCategorySelect.removeAttribute('required');
    }
}

// Toggle gender field based on age group selection
function toggleGenderField(prefix) {
    const ageGroupSelect = document.getElementById(prefix + 'AgeGroup') || document.getElementById('singleAgeGroup');
    const genderGroup = document.getElementById(prefix + 'GenderGroup') || document.getElementById('singleGenderGroup');
    const genderSelect = document.getElementById(prefix + 'Gender') || document.getElementById('singleGender');
    
    if (!ageGroupSelect || !genderGroup || !genderSelect) return;
    
    const selectedAgeGroup = ageGroupSelect.value;
    
    // Show gender field only for adult products
    if (selectedAgeGroup === 'adult') {
        genderGroup.style.display = 'block';
        genderSelect.setAttribute('required', 'required');
    } else {
        genderGroup.style.display = 'none';
        genderSelect.removeAttribute('required');
        genderSelect.value = '';
    }
}

// Tab switching
function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabName + '-tab').classList.add('active');
    
    // Load orders when orders tab is opened
    if (tabName === 'orders') {
        loadOrdersTable();
    }
}

// Toggle upload method
function toggleUploadMethod() {
    const method = document.getElementById('uploadMethod').value;
    const fileSection = document.getElementById('fileUploadSection');
    const urlSection = document.getElementById('urlUploadSection');
    const pinterestSection = document.getElementById('pinterestUploadSection');
    const localSection = document.getElementById('localUploadSection');
    
    // Hide all sections first
    fileSection.style.display = 'none';
    urlSection.style.display = 'none';
    pinterestSection.style.display = 'none';
    localSection.style.display = 'none';
    
    // Show selected section
    if (method === 'file') {
        fileSection.style.display = 'block';
    } else if (method === 'url') {
        urlSection.style.display = 'block';
    } else if (method === 'pinterest') {
        pinterestSection.style.display = 'block';
    } else if (method === 'local') {
        localSection.style.display = 'block';
    }
}

// File handling
function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        uploadedFile = file;
        document.getElementById('selectedFileName').textContent = `Selected: ${file.name}`;
        
        // Validate file immediately
        validateFile(file);
    }
}

// Validate File
function validateFile(file) {
    const validationResults = document.getElementById('validationResults');
    const issues = [];
    const warnings = [];
    
    // Check file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
        issues.push(`File size (${(file.size / 1024 / 1024).toFixed(2)}MB) exceeds maximum 10MB`);
    }
    
    // Check file extension
    const validExtensions = ['.csv', '.json'];
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    if (!validExtensions.includes(fileExtension)) {
        issues.push(`Invalid file format. Only CSV and JSON files are supported`);
    }
    
    // Display validation results
    if (issues.length > 0 || warnings.length > 0) {
        let html = '';
        
        issues.forEach(issue => {
            html += `<div class="validation-status invalid">⚠️ ${issue}</div>`;
        });
        
        warnings.forEach(warning => {
            html += `<div class="validation-status warning">⚡ ${warning}</div>`;
        });
        
        validationResults.innerHTML = html;
    } else {
        validationResults.innerHTML = `<div class="validation-status valid">✓ File is valid and ready for upload</div>`;
    }
    
    return issues.length === 0;
}

// Process upload
async function processUpload() {
    const uploadMethod = document.getElementById('uploadMethod').value;
    const uploadMode = document.getElementById('uploadMode').value;
    const startTime = Date.now();
    
    try {
        let products = [];
        
        // Show progress container
        document.getElementById('uploadProgressContainer').style.display = 'block';
        
        // Reset progress
        uploadProgress = { validation: 0, imageProcessing: 0, dataUpload: 0 };
        updateUploadProgress(0, 'Validating file...');
        
        if (uploadMethod === 'file') {
            // File upload
            if (!uploadedFile) {
                showError('uploadError', 'Please select a file to upload');
                document.getElementById('uploadProgressContainer').style.display = 'none';
                return;
            }
            
            // Validate file again before processing
            if (!validateFile(uploadedFile)) {
                showError('uploadError', 'File validation failed. Please fix the issues and try again.');
                document.getElementById('uploadProgressContainer').style.display = 'none';
                return;
            }
            
            // Update validation progress
            uploadProgress.validation = 100;
            updateUploadProgress(33, 'Parsing file...');
            loadDashboardData();
            
            const fileExtension = uploadedFile.name.split('.').pop().toLowerCase();
            
            if (fileExtension === 'csv') {
                products = await parseCSV(uploadedFile);
            } else if (fileExtension === 'json') {
                products = await parseJSON(uploadedFile);
            } else {
                showError('uploadError', 'Unsupported file format. Please use CSV or JSON.');
                document.getElementById('uploadProgressContainer').style.display = 'none';
                return;
            }
            
            // Update image processing progress
            uploadProgress.imageProcessing = 100;
            updateUploadProgress(66, 'Processing images...');
            loadDashboardData();
            
            // Simulate image processing delay
            await new Promise(resolve => setTimeout(resolve, 500));
        } else if (uploadMethod === 'url') {
            // URL upload
            const productUrl = document.getElementById('productUrl').value;
            const urlProductCategory = document.getElementById('urlProductCategory').value;
            const urlSubCategory = document.getElementById('urlSubCategory').value;
            const urlProductName = document.getElementById('urlProductName').value;
            const urlProductDescription = document.getElementById('urlProductDescription').value;
            const urlProductPrice = document.getElementById('urlProductPrice').value;
            const urlProductPrintStatus = document.getElementById('urlProductPrintStatus').value;
            const urlProductImage = document.getElementById('urlProductImage').value;
            const urlAgeGroup = document.getElementById('urlAgeGroup').value;
            const urlGender = document.getElementById('urlGender').value;
            
            // Validate required fields
            const requiresSubCategory = ['national', 'club', 'basketball', 'nfl', 'mlb', 'nhl', 'cricket', 'rugby', 'retro'].includes(urlProductCategory);
            const requiresGender = urlAgeGroup === 'adult';
            if (!productUrl || !urlProductCategory || !urlProductName || !urlProductPrice || !urlProductPrintStatus || !urlProductImage || !urlAgeGroup || (requiresSubCategory && !urlSubCategory) || (requiresGender && !urlGender)) {
                showError('uploadError', 'Please fill in all required fields');
                document.getElementById('uploadProgressContainer').style.display = 'none';
                return;
            }
            
            uploadProgress.validation = 100;
            uploadProgress.imageProcessing = 100;
            updateUploadProgress(66, 'Processing data...');
            loadDashboardData();
            
            products = [{
                id: Date.now() + Math.random(),
                name: urlProductName,
                category: urlProductCategory,
                league: urlSubCategory || '',
                description: urlProductDescription,
                price: parseFloat(urlProductPrice),
                printStatus: urlProductPrintStatus,
                image: urlProductImage,
                url: productUrl,
                ageGroup: urlAgeGroup,
                gender: urlGender
            }];
        } else if (uploadMethod === 'pinterest') {
            // Pinterest URL upload
            const pinterestImageUrl = document.getElementById('pinterestImageUrl').value;
            const pinterestProductCategory = document.getElementById('pinterestProductCategory').value;
            const pinterestSubCategory = document.getElementById('pinterestSubCategory').value;
            const pinterestProductName = document.getElementById('pinterestProductName').value;
            const pinterestProductDescription = document.getElementById('pinterestProductDescription').value;
            const pinterestProductPrice = document.getElementById('pinterestProductPrice').value;
            const pinterestProductPrintStatus = document.getElementById('pinterestProductPrintStatus').value;
            const pinterestAgeGroup = document.getElementById('pinterestAgeGroup').value;
            const pinterestGender = document.getElementById('pinterestGender').value;
            
            // Validate required fields
            const requiresSubCategory = ['national', 'club', 'basketball', 'nfl', 'mlb', 'nhl', 'cricket', 'rugby', 'retro'].includes(pinterestProductCategory);
            const requiresGender = pinterestAgeGroup === 'adult';
            if (!pinterestImageUrl || !pinterestProductCategory || !pinterestProductName || !pinterestProductPrice || !pinterestProductPrintStatus || !pinterestAgeGroup || (requiresSubCategory && !pinterestSubCategory) || (requiresGender && !pinterestGender)) {
                showError('uploadError', 'Please fill in all required fields');
                document.getElementById('uploadProgressContainer').style.display = 'none';
                return;
            }
            
            uploadProgress.validation = 100;
            uploadProgress.imageProcessing = 100;
            updateUploadProgress(66, 'Processing Pinterest data...');
            loadDashboardData();
            
            products = [{
                id: Date.now() + Math.random(),
                name: pinterestProductName,
                category: pinterestProductCategory,
                league: pinterestSubCategory || '',
                description: pinterestProductDescription,
                price: parseFloat(pinterestProductPrice),
                printStatus: pinterestProductPrintStatus,
                image: pinterestImageUrl,
                ageGroup: pinterestAgeGroup,
                gender: pinterestGender
            }];
        } else if (uploadMethod === 'local') {
            // Local image upload
            if (!localImageFile) {
                showError('uploadError', 'Please select an image to upload');
                document.getElementById('uploadProgressContainer').style.display = 'none';
                return;
            }
            
            const localProductCategory = document.getElementById('localProductCategory').value;
            const localSubCategory = document.getElementById('localSubCategory').value;
            const localProductName = document.getElementById('localProductName').value;
            const localProductDescription = document.getElementById('localProductDescription').value;
            const localProductPrice = document.getElementById('localProductPrice').value;
            const localProductPrintStatus = document.getElementById('localProductPrintStatus').value;
            const localAgeGroup = document.getElementById('localAgeGroup').value;
            const localGender = document.getElementById('localGender').value;
            
            // Validate required fields
            const requiresSubCategory = ['national', 'club', 'basketball', 'nfl', 'mlb', 'nhl', 'cricket', 'rugby', 'retro'].includes(localProductCategory);
            const requiresGender = localAgeGroup === 'adult';
            if (!localProductCategory || !localProductName || !localProductPrice || !localProductPrintStatus || !localAgeGroup || (requiresSubCategory && !localSubCategory) || (requiresGender && !localGender)) {
                showError('uploadError', 'Please fill in all required fields');
                document.getElementById('uploadProgressContainer').style.display = 'none';
                return;
            }
            
            uploadProgress.validation = 100;
            updateUploadProgress(33, 'Processing image...');
            loadDashboardData();
            
            // Convert image to base64
            const imageData = await convertImageToBase64(localImageFile);
            
            uploadProgress.imageProcessing = 100;
            updateUploadProgress(66, 'Processing data...');
            loadDashboardData();
            
            products = [{
                id: Date.now() + Math.random(),
                name: localProductName,
                category: localProductCategory,
                league: localSubCategory || '',
                description: localProductDescription,
                price: parseFloat(localProductPrice),
                printStatus: localProductPrintStatus,
                image: imageData,
                ageGroup: localAgeGroup,
                gender: localGender
            }];
        }
        
        // Update data upload progress
        updateUploadProgress(90, 'Saving to storage...');
        
        // Display real-time upload data
        displayRealtimeUploadData(products);
        
        // Process based on upload mode
        if (uploadMode === 'replace') {
            currentProducts = products;
        } else {
            currentProducts = [...currentProducts, ...products];
        }
        
        // Save to storage
        saveProducts(currentProducts);
        
        // Complete progress
        uploadProgress.dataUpload = 100;
        updateUploadProgress(100, 'Upload complete!');
        loadDashboardData();
        
        // Log activity
        logActivity(`Uploaded ${products.length} products via ${uploadMethod}`);
        
        // Show success message
        showSuccess('uploadSuccess', `Successfully uploaded ${products.length} products!`);
        
        // Reset upload form
        resetUploadForm();
        
        // Hide progress after delay
        setTimeout(() => {
            document.getElementById('uploadProgressContainer').style.display = 'none';
        }, 2000);
        
        // Update products table and dashboard
        loadProductsTable();
        loadDashboardData();
        
        // Calculate upload time and update statistics
        const uploadTime = (Date.now() - startTime) / 1000;
        updateUploadStatistics(true, uploadTime);
        
    } catch (error) {
        showError('uploadError', `Upload failed: ${error.message}`);
        document.getElementById('uploadProgressContainer').style.display = 'none';
        
        // Update statistics for failed upload
        const uploadTime = (Date.now() - startTime) / 1000;
        updateUploadStatistics(false, uploadTime);
    }
}

// Update Upload Progress
function updateUploadProgress(percentage, status) {
    const progressBar = document.getElementById('uploadProgressBar');
    const uploadStatus = document.getElementById('uploadStatus');
    const uploadPercentage = document.getElementById('uploadPercentage');
    
    if (progressBar) progressBar.style.width = percentage + '%';
    if (uploadStatus) uploadStatus.textContent = status;
    if (uploadPercentage) uploadPercentage.textContent = percentage + '%';
}

// Convert image to base64
function convertImageToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Display real-time upload data
function displayRealtimeUploadData(products) {
    const realtimeContainer = document.getElementById('realtimeUploadData');
    const dataList = document.getElementById('uploadDataList');
    
    if (!realtimeContainer || !dataList) return;
    
    realtimeContainer.style.display = 'block';
    
    let html = '';
    products.forEach((product, index) => {
        html += `
            <div style="padding: 10px; margin-bottom: 8px; background: white; border-radius: 6px; border: 1px solid #e2e8f0;">
                <div style="font-weight: 600; color: #2d3748;">${index + 1}. ${product.name}</div>
                <div style="font-size: 0.9rem; color: #718096;">Price: KSH ${product.price}</div>
                <div style="font-size: 0.85rem; color: #a0aec0;">Category: ${product.category || product.sport || 'N/A'}</div>
                ${product.image ? `<div style="margin-top: 5px;"><img src="${product.image}" style="max-width: 50px; max-height: 50px; border-radius: 4px;"></div>` : ''}
            </div>
        `;
    });
    
    dataList.innerHTML = html;
}

// File parsing functions
async function parseCSV(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const text = e.target.result;
                const lines = text.split('\n');
                const headers = lines[0].split(',').map(h => h.trim());
                
                const products = [];
                for (let i = 1; i < lines.length; i++) {
                    if (lines[i].trim()) {
                        const values = lines[i].split(',').map(v => v.trim());
                        const product = {};
                        headers.forEach((header, index) => {
                            product[header] = values[index];
                        });
                        products.push(convertToSimpleFormat(product));
                    }
                }
                resolve(products);
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = reject;
        reader.readAsText(file);
    });
}

async function parseJSON(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                const products = Array.isArray(data) ? data : [data];
                resolve(products.map(p => convertToSimpleFormat(p)));
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = reject;
        reader.readAsText(file);
    });
}

// Convert to simple format
function convertToSimpleFormat(product) {
    return {
        id: product.id || Date.now() + Math.random(),
        name: product.name || 'Unnamed Product',
        price: parseFloat(product.price) || 0,
        sport: product.sport || 'equipment',
        league: product.league || '',
        image: product.image || product.images?.[0]?.url || 'https://via.placeholder.com/300',
        printStatus: product.printStatus || 'unprinted'
    };
}

// Save products to storage
function saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('titanSportsProducts', JSON.stringify(products));
    localStorage.setItem('kitHubProducts', JSON.stringify(products));
}

// Reset upload form
function resetUploadForm() {
    uploadedFile = null;
    document.getElementById('fileInput').value = '';
    document.getElementById('selectedFileName').textContent = '';
    document.getElementById('productUrl').value = '';
    document.getElementById('urlProductName').value = '';
    document.getElementById('urlProductPrice').value = '';
    document.getElementById('urlProductSport').value = '';
    document.getElementById('urlProductImage').value = '';
}

// Single product form handling
async function handleSingleProductSubmit(event) {
    event.preventDefault();
    
    try {
        const imageSource = document.getElementById('singleImageSource').value;
        let imageData = '';
        
        // Handle different image sources
        if (imageSource === 'url') {
            imageData = document.getElementById('singleImage').value;
            if (!imageData) {
                showError('singleError', 'Please provide an image URL');
                return;
            }
        } else if (imageSource === 'pinterest') {
            imageData = document.getElementById('singlePinterestImage').value;
            if (!imageData) {
                showError('singleError', 'Please provide a Pinterest image URL');
                return;
            }
        } else if (imageSource === 'local') {
            if (!singleLocalImageFile) {
                showError('singleError', 'Please select a local image to upload');
                return;
            }
            imageData = await convertImageToBase64(singleLocalImageFile);
        }
        
        // Validate required fields
        const name = document.getElementById('singleName').value;
        const price = document.getElementById('singlePrice').value;
        const category = document.getElementById('singleCategory').value;
        const subCategory = document.getElementById('singleSubCategory').value;
        const description = document.getElementById('singleDescription').value;
        const printStatus = document.getElementById('singlePrintStatus').value;
        const ageGroup = document.getElementById('singleAgeGroup').value;
        const gender = document.getElementById('singleGender').value;
        
        // Validate required fields including subcategory for sports categories
        const requiresSubCategory = ['national', 'club', 'basketball', 'nfl', 'mlb', 'nhl', 'cricket', 'rugby', 'retro'].includes(category);
        const requiresGender = ageGroup === 'adult';
        if (!name || !price || !category || !printStatus || !ageGroup || (requiresSubCategory && !subCategory) || (requiresGender && !gender)) {
            showError('singleError', 'Please fill in all required fields');
            return;
        }
        
        const product = {
            id: Date.now() + Math.random(),
            name: name,
            price: parseFloat(price),
            category: category,
            league: subCategory || '',
            description: description,
            printStatus: printStatus,
            quantity: parseInt(document.getElementById('singleQuantity').value) || 1,
            image: imageData,
            imageSource: imageSource,
            ageGroup: ageGroup,
            gender: gender
        };
        
        // Add to products
        currentProducts.push(product);
        saveProducts(currentProducts);
        
        // Log activity
        logActivity(`Added product: ${product.name} (${imageSource} image)`);
        
        // Show success message
        showSuccess('singleSuccess', 'Product added successfully!');
        
        // Reset form and clear previews
        document.getElementById('singleProductForm').reset();
        document.getElementById('singleImagePreview').innerHTML = '';
        document.getElementById('singlePinterestPreview').innerHTML = '';
        document.getElementById('singleLocalPreview').innerHTML = '';
        document.getElementById('singleLocalFileName').textContent = '';
        singleLocalImageFile = null;
        
        // Reset image source to default
        toggleSingleImageSource();
        
        // Update products table and dashboard
        loadProductsTable();
        loadDashboardData();
        
    } catch (error) {
        showError('singleError', `Error adding product: ${error.message}`);
    }
}

// Load products table
function loadProductsTable() {
    const tbody = document.getElementById('productsTableBody');
    
    if (!tbody) {
        console.error('productsTableBody not found');
        return;
    }
    
    if (currentProducts.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 40px;">No products found. Add your first product!</td></tr>';
        return;
    }
    
    tbody.innerHTML = currentProducts.map(product => `
        <tr>
            <td><img src="${product.image}" alt="${product.name}" class="product-thumb"></td>
            <td>${product.name}</td>
            <td>${product.sport || product.category || 'N/A'}</td>
            <td>${product.ageGroup ? product.ageGroup.charAt(0).toUpperCase() + product.ageGroup.slice(1) : 'N/A'}</td>
            <td>${product.gender ? product.gender.charAt(0).toUpperCase() + product.gender.slice(1) : '-'}</td>
            <td>KSH ${product.price.toLocaleString()}</td>
            <td>
                <button onclick="deleteProduct(${product.id})" class="btn btn-danger" style="padding: 5px 10px;">Delete</button>
            </td>
        </tr>
    `).join('');
}

// Filter products table
function filterProductsTable() {
    const searchTerm = document.getElementById('manageSearch').value.toLowerCase();
    const filter = document.getElementById('manageFilter').value;
    
    let filtered = currentProducts;
    
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.league?.toLowerCase().includes(searchTerm)
        );
    }
    
    if (filter) {
        filtered = filtered.filter(p => p.sport === filter);
    }
    
    const tbody = document.getElementById('productsTableBody');
    
    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; padding: 40px;">No products found matching your criteria.</td></tr>';
        return;
    }
    
    tbody.innerHTML = filtered.map(product => `
        <tr>
            <td><img src="${product.image}" alt="${product.name}" class="product-thumb"></td>
            <td>${product.name}</td>
            <td>${product.sport}</td>
            <td>KSH ${product.price.toLocaleString()}</td>
            <td>
                <button onclick="deleteProduct(${product.id})" class="btn btn-danger" style="padding: 5px 10px;">Delete</button>
            </td>
        </tr>
    `).join('');
}

// Delete product
function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        const product = currentProducts.find(p => p.id === productId);
        currentProducts = currentProducts.filter(p => p.id !== productId);
        saveProducts(currentProducts);
        
        // Log activity
        logActivity(`Deleted product: ${product ? product.name : 'Unknown'}`);
        
        loadProductsTable();
        loadDashboardData();
        showSuccess('uploadSuccess', 'Product deleted successfully!');
    }
}

// Export catalogue
function exportCatalogue() {
    if (currentProducts.length === 0) {
        alert('No products to export. Please add products first.');
        return;
    }
    
    try {
        const jsonData = JSON.stringify(currentProducts, null, 2);
        downloadFile(jsonData, 'titansports_catalogue.json', 'application/json');
        
        // Log activity
        logActivity(`Exported ${currentProducts.length} products to catalogue`);
        
        // Show success message
        showSuccess('uploadSuccess', `Catalogue exported successfully! ${currentProducts.length} products saved.`);
    } catch (error) {
        alert('Export failed: ' + error.message);
    }
}

// Download file
function downloadFile(content, filename, type) {
    const blob = new Blob([content], { type: type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Order Management Functions

// Load orders table
async function loadOrdersTable() {
    const tbody = document.getElementById('ordersTableBody');
    
    if (!tbody) return;
    
    try {
        // Try to fetch from backend server first
        const response = await fetch('http://localhost:3000/api/orders');
        
        if (response.ok) {
            const orders = await response.json();
            renderOrdersTable(orders);
        } else {
            // Fallback to localStorage
            const orders = JSON.parse(localStorage.getItem('orders') || '[]');
            renderOrdersTable(orders);
        }
    } catch (error) {
        console.error('Error fetching orders:', error);
        // Fallback to localStorage
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        renderOrdersTable(orders);
    }
}

// Render orders table
function renderOrdersTable(orders) {
    const tbody = document.getElementById('ordersTableBody');
    
    if (!tbody) return;
    
    if (orders.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 40px;">No orders found.</td></tr>';
        return;
    }
    
    tbody.innerHTML = orders.map(order => `
        <tr>
            <td>${order.order_id || order.id}</td>
            <td>${new Date(order.date || order.created_at).toLocaleDateString()}</td>
            <td>${order.customer_name || order.customer_phone || 'N/A'}</td>
            <td>KSH ${order.total?.toLocaleString() || '0'}</td>
            <td>
                <span class="status-badge status-${order.payment_status || 'pending'}">
                    ${order.payment_status || 'pending'}
                </span>
            </td>
            <td>
                <span class="status-badge status-${order.order_status || 'pending'}">
                    ${order.order_status || 'pending'}
                </span>
            </td>
            <td>
                <button onclick="viewOrderDetails('${order.order_id || order.id}')" class="btn btn-secondary" style="padding: 5px 10px;">View</button>
                <button onclick="updateOrderStatus('${order.order_id || order.id}')" class="btn btn-primary" style="padding: 5px 10px;">Update</button>
            </td>
        </tr>
    `).join('');
}

// Filter orders table
function filterOrdersTable() {
    const searchTerm = document.getElementById('orderSearch').value.toLowerCase();
    const statusFilter = document.getElementById('orderStatusFilter').value;
    const paymentFilter = document.getElementById('paymentStatusFilter').value;
    
    // Get all orders
    let orders = JSON.parse(localStorage.getItem('orders') || '[]');
    
    // Apply filters
    if (searchTerm) {
        orders = orders.filter(order => 
            (order.order_id || order.id).toLowerCase().includes(searchTerm) ||
            (order.customer_name || '').toLowerCase().includes(searchTerm) ||
            (order.customer_phone || '').toLowerCase().includes(searchTerm)
        );
    }
    
    if (statusFilter) {
        orders = orders.filter(order => (order.order_status || 'pending') === statusFilter);
    }
    
    if (paymentFilter) {
        orders = orders.filter(order => (order.payment_status || 'pending') === paymentFilter);
    }
    
    renderOrdersTable(orders);
}

// View order details
function viewOrderDetails(orderId) {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const order = orders.find(o => (o.order_id || o.id) === orderId);
    
    if (order) {
        const items = order.items || [];
        const itemsList = items.map(item => 
            `${item.name || item.product_name} - KSH ${item.price?.toLocaleString() || '0'} x ${item.quantity || 1}`
        ).join('\n');
        
        alert(`Order Details:\n\nOrder ID: ${order.order_id || order.id}\nDate: ${new Date(order.date || order.created_at).toLocaleString()}\nCustomer: ${order.customer_name || 'N/A'}\nPhone: ${order.customer_phone || 'N/A'}\nEmail: ${order.customer_email || 'N/A'}\nAddress: ${order.customer_address || 'N/A'}\n\nItems:\n${itemsList}\n\nSubtotal: KSH ${order.subtotal?.toLocaleString() || '0'}\nShipping: KSH ${order.shipping?.toLocaleString() || '0'}\nTax: KSH ${order.tax?.toLocaleString() || '0'}\nTotal: KSH ${order.total?.toLocaleString() || '0'}\n\nPayment Method: ${order.payment_method || 'N/A'}\nPayment Status: ${order.payment_status || 'pending'}\nOrder Status: ${order.order_status || 'pending'}\nTransaction ID: ${order.transaction_id || 'N/A'}`);
    }
}

// Update order status
function updateOrderStatus(orderId) {
    const newStatus = prompt('Enter new order status (pending, processing, shipped, delivered, cancelled):');
    
    if (newStatus && ['pending', 'processing', 'shipped', 'delivered', 'cancelled'].includes(newStatus.toLowerCase())) {
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        const orderIndex = orders.findIndex(o => (o.order_id || o.id) === orderId);
        
        if (orderIndex !== -1) {
            orders[orderIndex].order_status = newStatus.toLowerCase();
            localStorage.setItem('orders', JSON.stringify(orders));
            
            // Try to update on backend server
            fetch(`http://localhost:3000/api/orders/${orderId}/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status: newStatus.toLowerCase() })
            }).catch(error => console.error('Error updating order status on backend:', error));
            
            loadOrdersTable();
            logActivity(`Updated order status: ${orderId} to ${newStatus}`);
        }
    } else if (newStatus) {
        alert('Invalid status. Please use: pending, processing, shipped, delivered, or cancelled');
    }
}

// Utility functions
function showError(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.style.display = 'block';
    setTimeout(() => {
        element.style.display = 'none';
    }, 5000);
}

function showSuccess(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.style.display = 'block';
    setTimeout(() => {
        element.style.display = 'none';
    }, 3000);
}
