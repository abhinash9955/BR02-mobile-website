/**
 * BR02 Website Custom Script
 * Handles responsiveness, dynamic data, carousel, search, wishlist & formatting.
 */

// Format price into Indian Rupees
const formatToINR = (price) => {
    return '₹' + price.toLocaleString('en-IN');
};

/* =========================================
   1. SAMPLE PRODUCT DATA (24 items)
   ========================================= */
const productsData = [
    { id: 1,  brand: 'Samsung',  name: 'Xr Convert 17Pro',  price: 20000, ram: '12GB', storage: '128GB', condition: 'Like New',   battery: '95%', youtubeLink: 'https://youtube.com/shorts/uVBkLY_-9qM?si=IajYx_B9X3dxBc1o', image: 'assets/images/product_img/product1.jpg',},
    { id: 2,  brand: 'Apple',    name: 'iPhone 13 Pro',     price: 72000, ram: '6GB',  storage: '128GB', condition: 'Excellent',  battery: '89%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=600&auto=format&fit=crop' },
    { id: 3,  brand: 'Redmi',    name: 'Note 12 Pro',       price: 21000, ram: '8GB',  storage: '256GB', condition: 'Good',       battery: '92%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1598327105654-36eefaca32ea?q=80&w=600&auto=format&fit=crop' },
    { id: 4,  brand: 'Realme',   name: 'Narzo 50',          price: 15000, ram: '4GB',  storage: '64GB',  condition: 'Fair',       battery: '85%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbc0?q=80&w=600&auto=format&fit=crop' },
    { id: 5,  brand: 'OnePlus',  name: '11R 5G',            price: 45000, ram: '8GB',  storage: '128GB', condition: 'Excellent',  battery: '98%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=600&auto=format&fit=crop' },
    { id: 6,  brand: 'Samsung',  name: 'Galaxy M31',        price: 12000, ram: '6GB',  storage: '128GB', condition: 'Good',       battery: '82%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600&auto=format&fit=crop' },
    { id: 7,  brand: 'Apple',    name: 'iPhone 11',         price: 28000, ram: '4GB',  storage: '64GB',  condition: 'Good',       battery: '84%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?q=80&w=600&auto=format&fit=crop' },
    { id: 8,  brand: 'Google',   name: 'Pixel 7',           price: 40000, ram: '8GB',  storage: '128GB', condition: 'Excellent',  battery: '94%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1598327105654-36eefaca32ea?q=80&w=600&auto=format&fit=crop' },
    { id: 9,  brand: 'Nothing',  name: 'Phone (1)',         price: 32000, ram: '8GB',  storage: '256GB', condition: 'Like New',   battery: '96%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbc0?q=80&w=600&auto=format&fit=crop' },
    { id: 10, brand: 'Vivo',     name: 'V27 Pro',           price: 34000, ram: '8GB',  storage: '128GB', condition: 'Good',       battery: '90%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=600&auto=format&fit=crop' },
    { id: 11, brand: 'Oppo',     name: 'Reno 8T',           price: 29000, ram: '8GB',  storage: '128GB', condition: 'Excellent',  battery: '95%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=600&auto=format&fit=crop' },
    { id: 12, brand: 'Samsung',  name: 'Galaxy A54',        price: 31000, ram: '8GB',  storage: '256GB', condition: 'Like New',   battery: '98%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600&auto=format&fit=crop' },
    { id: 13, brand: 'Apple',    name: 'iPhone 12 Mini',    price: 35000, ram: '4GB',  storage: '64GB',  condition: 'Good',       battery: '86%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?q=80&w=600&auto=format&fit=crop' },
    { id: 14, brand: 'Xiaomi',   name: 'Mi 11X',            price: 22000, ram: '6GB',  storage: '128GB', condition: 'Fair',       battery: '81%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1598327105654-36eefaca32ea?q=80&w=600&auto=format&fit=crop' },
    { id: 15, brand: 'Motorola', name: 'Edge 40',           price: 32000, ram: '8GB',  storage: '256GB', condition: 'Excellent',  battery: '93%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbc0?q=80&w=600&auto=format&fit=crop' },
    { id: 16, brand: 'Realme',   name: 'GT Neo 3',          price: 28000, ram: '8GB',  storage: '128GB', condition: 'Good',       battery: '88%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=600&auto=format&fit=crop' },
    { id: 17, brand: 'Samsung',  name: 'Galaxy F23',        price: 14000, ram: '6GB',  storage: '128GB', condition: 'Fair',       battery: '80%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=600&auto=format&fit=crop' },
    { id: 18, brand: 'Apple',    name: 'iPhone SE 2020',    price: 18000, ram: '3GB',  storage: '64GB',  condition: 'Good',       battery: '82%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=600&auto=format&fit=crop' },
    { id: 19, brand: 'Poco',     name: 'X5 Pro',            price: 24000, ram: '8GB',  storage: '256GB', condition: 'Like New',   battery: '97%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1598327105654-36eefaca32ea?q=80&w=600&auto=format&fit=crop' },
    { id: 20, brand: 'OnePlus',  name: 'Nord CE 2',         price: 20000, ram: '6GB',  storage: '128GB', condition: 'Good',       battery: '85%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbc0?q=80&w=600&auto=format&fit=crop' },
    { id: 21, brand: 'Vivo',     name: 'T2x 5G',            price: 16000, ram: '6GB',  storage: '128GB', condition: 'Excellent',  battery: '92%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600&auto=format&fit=crop' },
    { id: 22, brand: 'Samsung',  name: 'Galaxy S21 FE',     price: 38000, ram: '8GB',  storage: '128GB', condition: 'Very Good',  battery: '88%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=600&auto=format&fit=crop' },
    { id: 23, brand: 'Apple',    name: 'iPhone 13',         price: 58000, ram: '4GB',  storage: '128GB', condition: 'Good',       battery: '84%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?q=80&w=600&auto=format&fit=crop' },
    { id: 24, brand: 'Xiaomi',   name: 'Redmi Note 12',     price: 18000, ram: '6GB',  storage: '128GB', condition: 'Like New',   battery: '96%', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=600&auto=format&fit=crop' }
];

const waNumber = '918544616321'; 
let wishlist = JSON.parse(localStorage.getItem('br02_wishlist')) || [];
let filteredData = [...productsData];
let currentBrandFilter = 'All';

document.addEventListener('DOMContentLoaded', () => {
    // --- Logo Rotation ---
    const logoImageView = document.getElementById('logo-image-view');
    const logoTextView  = document.getElementById('logo-text-view');
    if (logoImageView && logoTextView) {
        // Start with image visible, text hidden
        logoTextView.classList.add('logo-hidden');
        let showingImage = true;
        setInterval(() => {
            showingImage = !showingImage;
            logoImageView.classList.toggle('logo-hidden', !showingImage);
            logoTextView.classList.toggle('logo-hidden',  showingImage);
        }, 3000);
    }

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    if(mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenu.querySelector('i');
            if(navLinks.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
    }

    // Current Year in Footer
    const yearSpan = document.getElementById('current-year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Wishlist UI Hooks globally
    updateWishlistCount();
    
    document.getElementById('wishlist-btn')?.addEventListener('click', openWishlist);
    document.getElementById('mobile-wishlist-trigger')?.addEventListener('click', (e) => { e.preventDefault(); openWishlist(); });
    document.getElementById('close-wishlist')?.addEventListener('click', closeWishlist);
    document.getElementById('wishlist-modal')?.addEventListener('click', (e) => {
        if(e.target.id === 'wishlist-modal') closeWishlist();
    });

    // Identify current page
    const isHomePage = document.getElementById('product-grid') !== null;
    const isProductPage = document.getElementById('product-detail-view') !== null;

    if (isHomePage) initHomePage();
    if (isProductPage) initProductPage();

    // Global Search behavior
    const searchInputs = document.querySelectorAll('#search-input');
    searchInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            if(!isHomePage) {
                window.location.href = `index.html?search=${encodeURIComponent(e.target.value)}`;
                return;
            }
            applyFilters();
        });
    });

    // Pick search text from URL if returning to index
    if(isHomePage) {
        const urlParams = new URLSearchParams(window.location.search);
        const searchQ = urlParams.get('search');
        if(searchQ) {
            const si = document.getElementById('search-input');
            if(si) si.value = searchQ;
            applyFilters();
        }
    }
});

/* =========================================
   WISHLIST LOGIC
   ========================================= */
function updateWishlistCount() {
    const counts = document.querySelectorAll('#wishlist-count');
    counts.forEach(c => c.textContent = wishlist.length);
}

function toggleWishlist(e, productId) {
    e.stopPropagation(); // Prevent product card click
    e.preventDefault();
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        e.target.classList.replace('fas', 'far'); // Outline heart
        e.target.parentElement.classList.remove('active');
    } else {
        wishlist.push(productId);
        e.target.classList.replace('far', 'fas'); // Solid heart
        e.target.parentElement.classList.add('active');
    }
    localStorage.setItem('br02_wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    populateWishlistModal();
}

function openWishlist() {
    populateWishlistModal();
    document.getElementById('wishlist-modal').classList.add('active');
}

function closeWishlist() {
    document.getElementById('wishlist-modal').classList.remove('active');
}

function populateWishlistModal() {
    const body = document.getElementById('wishlist-body');
    if(!body) return;
    
    if(wishlist.length === 0) {
        body.innerHTML = '<p style="text-align:center; color: var(--text-light); padding: 20px;">Your wishlist is empty.</p>';
        return;
    }

    body.innerHTML = '';
    wishlist.forEach(id => {
        const product = productsData.find(p => p.id === id);
        if(!product) return;
        
        const item = document.createElement('div');
        item.className = 'wishlist-item fade-in';
        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="wishlist-item-info">
                <div class="wishlist-item-title">${product.brand} ${product.name}</div>
                <div class="wishlist-item-price">${formatToINR(product.price)}</div>
            </div>
            <i class="fas fa-trash wishlist-item-remove" title="Remove" onclick="removeFromWishlistModal(${product.id})"></i>
        `;
        body.appendChild(item);
    });
}

window.removeFromWishlistModal = (id) => {
    const index = wishlist.indexOf(id);
    if(index > -1) wishlist.splice(index, 1);
    localStorage.setItem('br02_wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    populateWishlistModal();
    
    // Update grid icons if on home page
    const gridBtn = document.querySelector(`.wishlist-btn[data-id="${id}"] i`);
    if(gridBtn) {
        gridBtn.classList.replace('fas', 'far');
        gridBtn.parentElement.classList.remove('active');
    }
};

/* =========================================
   HOME PAGE LOGIC
   ========================================= */
let currentItemCount = 20;

function applyFilters() {
    const q = document.getElementById('search-input')?.value.toLowerCase() || '';
    filteredData = productsData.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q);
        const matchesBrand = currentBrandFilter === 'All' || p.brand === currentBrandFilter;
        return matchesSearch && matchesBrand;
    });
    currentItemCount = 20; // reset counter on search/filter
    renderProducts(currentItemCount);
}

function initHomePage() {
    // --- Carousel Logic ---
    const carouselTrack = document.getElementById('carousel-track');
    const carouselDotsContainer = document.getElementById('carousel-dots');
    
    const bannerData = [
        { title: 'Best Deals on Used Mobiles', subtitle: 'Premium quality phones tested by experts', bg: 'assets/images/banner1.jpg' },
        { title: 'Up to 40% Discount', subtitle: 'On selected Apple and Samsung models', bg: 'assets/images/banner2.jpg' },
        { title: 'Limited Time Offer', subtitle: 'Free shipping on orders above $300', bg: 'assets/images/banner3.jpg' }
    ];

    bannerData.forEach((banner, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        // Applying black overlay on image
        slide.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${banner.bg}')`;
        
        slide.innerHTML = `
            <div class="slide-content">
                <h2>${banner.title}</h2>
                <p>${banner.subtitle}</p>
                <a href="#products-section" class="btn-primary">Shop Now</a>
            </div>
        `;
        carouselTrack.appendChild(slide);

        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        carouselDotsContainer.appendChild(dot);
    });

    let currentSlide = 0;
    const maxSlide = bannerData.length;

    function goToSlide(index) {
        currentSlide = index;
        carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === currentSlide));
    }

    // Auto sliding every 3 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % maxSlide;
        goToSlide(currentSlide);
    }, 3000);

    // --- Brand Filter & Slider Logic ---
    const brandItems = document.querySelectorAll('.brand-item');
    brandItems.forEach(item => {
        item.addEventListener('click', (e) => {
            brandItems.forEach(b => b.classList.remove('active'));
            const target = e.currentTarget;
            target.classList.add('active');
            
            currentBrandFilter = target.getAttribute('data-filter');
            applyFilters();
        });
    });

    const scrollLeftBtn = document.getElementById('brand-scroll-left');
    const scrollRightBtn = document.getElementById('brand-scroll-right');
    const brandList = document.getElementById('brand-list');
    
    if(scrollLeftBtn && scrollRightBtn && brandList) {
        scrollLeftBtn.addEventListener('click', () => {
            brandList.scrollBy({ left: -200, behavior: 'smooth' });
        });
        scrollRightBtn.addEventListener('click', () => {
            brandList.scrollBy({ left: 200, behavior: 'smooth' });
        });
    }

    // Initial render
    renderProducts(currentItemCount);

    // Load More functionality
    document.getElementById('load-more-btn').addEventListener('click', () => {
        currentItemCount += 8;
        renderProducts(currentItemCount, true);
    });
}

function renderProducts(limit, isAppending = false) {
    const productGrid = document.getElementById('product-grid');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const noResults = document.getElementById('no-results');
    
    if(!isAppending) productGrid.innerHTML = '';
    
    if(filteredData.length === 0) {
        productGrid.style.display = 'none';
        noResults.style.display = 'block';
        loadMoreBtn.style.display = 'none';
        return;
    }

    productGrid.style.display = 'grid';
    noResults.style.display = 'none';

    // Figure out start and end
    const startObj = isAppending ? limit - 8 : 0;
    const itemsToShow = filteredData.slice(startObj, Math.min(limit, filteredData.length));
    
    itemsToShow.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-brand', product.brand);
        // Clicking whole card opens details page
        card.addEventListener('click', () => { window.location.href = `product.html?id=${product.id}`; });

        const waMessage = encodeURIComponent(`Hi, I am interested in ${product.brand} ${product.name} priced at ${formatToINR(product.price)}`);
        const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

        const isWished = wishlist.includes(product.id);
        const ytLink = product.youtubeLink || 'https://www.youtube.com/results?search_query=' + encodeURIComponent(product.brand + ' ' + product.name);

        card.innerHTML = `
            <button class="wishlist-btn ${isWished ? 'active' : ''}" data-id="${product.id}" onclick="toggleWishlist(event, ${product.id})">
                <i class="${isWished ? 'fas' : 'far'} fa-heart"></i>
            </button>
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-price">${formatToINR(product.price)}</div>
                
                <div class="product-actions">
                    <button class="btn-secondary" onclick="event.stopPropagation(); window.location.href='product.html?id=${product.id}'">
                        <i class="fas fa-eye"></i> Details
                    </button>
                    <a href="${ytLink}" target="_blank" class="btn-youtube" onclick="event.stopPropagation()">
                        <i class="fab fa-youtube"></i> Video
                    </a>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });

    if (limit >= filteredData.length) {
        document.getElementById('load-more-container').style.display = 'none';
    } else {
        document.getElementById('load-more-container').style.display = 'block';
    }
}

/* =========================================
   PRODUCT DETAILS PAGE LOGIC
   ========================================= */
function initProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const productContainer = document.getElementById('product-detail-view');

    const product = productsData.find(p => p.id === productId);

    if (product) {
        const waMessage = encodeURIComponent(`Hi, I am interested in your ${product.brand} ${product.name} listed for ${formatToINR(product.price)}. Could you share more details?`);
        const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

        productContainer.innerHTML = `
            <div class="details-wrapper fade-in">
                <div class="details-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                
                <div class="details-info">
                    <div class="product-brand" style="margin-bottom: 10px; font-size: 1.2rem;">${product.brand}</div>
                    <h1>${product.name}</h1>
                    <div class="details-price">${formatToINR(product.price)}</div>
                    
                    <div class="specs-list">
                        <div class="spec-item">
                            <span class="spec-label">Brand</span>
                            <span class="spec-value">${product.brand}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Model</span>
                            <span class="spec-value">${product.name}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">RAM</span>
                            <span class="spec-value">${product.ram}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Storage</span>
                            <span class="spec-value">${product.storage}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Condition</span>
                            <span class="spec-value">${product.condition}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Battery Health</span>
                            <span class="spec-value">${product.battery}</span>
                        </div>
                    </div>
                    
                    <a href="${waLink}" target="_blank" class="btn-whatsapp" style="width:100%; padding: 15px; font-size: 1.1rem;">
                        <i class="fab fa-whatsapp"></i> Contact to Buy
                    </a>
                </div>
            </div>
        `;
    } else {
        productContainer.innerHTML = `
            <div style="text-align: center; padding: 50px;">
                <h2>Product Not Found</h2>
                <p>Sorry, the product you are looking for does not exist or has been removed.</p>
                <a href="index.html" class="btn-primary" style="margin-top:20px;">Return Home</a>
            </div>
        `;
    }
}
