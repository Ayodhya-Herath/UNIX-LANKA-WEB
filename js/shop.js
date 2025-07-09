// ====== Product Data (fill up to 44+ for your real use) ======
const PRODUCTS = [
  // --- Demo Items (replace/add real items with img/desc/price/rating/category/subcategory) ---
  { id: 1, name: "Heavenly Blush Bouquet", desc: "Beautifully arranged fresh roses.", price: 1200, rating: 4.8, img: "images/products/flowers/bouquets/FB1.png", category: "flowers", subcategory: "flowers-bouquets" },
  { id: 2, name: "Enchanted Essence Bouquet", desc: "Beautifully arranged fresh roses.", price: 1000, rating: 4.6, img: "images/products/flowers/bouquets/FB2.png", category: "flowers", subcategory: "flowers-bouquets" },
  { id: 3, name: "Alluring Romance Bouquet", desc: "Beautifully arranged fresh roses.", price: 1500, rating: 3.8, img: "images/products/flowers/bouquets/FB3.png", category: "flowers", subcategory: "flowers-bouquets" },
  { id: 4, name: "Cherish Tiger Lilies Bouquet", desc: "Beautifully arranged fresh roses.", price: 1300, rating: 3.2, img: "images/products/flowers/bouquets/FB4.png", category: "flowers", subcategory: "flowers-bouquets" },
  { id: 5, name: "Golden Daydream Bouquet", desc: "Beautifully arranged fresh roses.", price: 1600, rating: 3.0, img: "images/products/flowers/bouquets/FB5.png", category: "flowers", subcategory: "flowers-bouquets" },
  { id: 6, name: "Sunshine and Smile Bouquet", desc: "Beautifully arranged fresh roses.", price: 1000, rating: 2.8, img: "images/products/flowers/bouquets/FB6.png", category: "flowers", subcategory: "flowers-bouquets" },
  { id: 7, name: "Red Cherry Pot", desc: "Beautifully arranged fresh roses.", price: 1000, rating: 2.5, img: "images/products/flowers/pots/FP01.png", category: "flowers", subcategory: "flowers-pots" },
  { id: 8, name: "Rose Lily Pot", desc: "Beautifully arranged fresh roses.", price: 900, rating: 3.0, img: "images/products/flowers/pots/FP02.png", category: "flowers", subcategory: "flowers-pots" },
  { id: 9, name: "Red Daisy Pot", desc: "Beautifully arranged fresh roses.", price: 800, rating: 2.3, img: "images/products/flowers/pots/FP03.png", category: "flowers", subcategory: "flowers-pots" },
  { id:10, name: "Rose Daisy Pot", desc: "Beautifully arranged fresh roses.", price: 750, rating: 3.2, img: "images/products/flowers/pots/FP04.png", category: "flowers", subcategory: "flowers-pots" },
  { id:11, name: "Red Lavender Pot", desc: "Beautifully arranged fresh roses.", price: 850, rating: 2.8, img: "images/products/flowers/pots/FP05.png", category: "flowers", subcategory: "flowers-pots" },
  { id:12, name: "Red Heart Pot", desc: "Beautifully arranged fresh roses.", price: 500, rating: 1.8, img: "images/products/flowers/pots/FP06.png", category: "flowers", subcategory: "flowers-pots" },
  { id:13, name: "Romantic Roses Frame", desc: "Dried flower frame decor.", price: 1250, rating: 3.8, img: "images/products/flowers/frames/FF1.png", category: "flowers", subcategory: "flowers-frames" },
  { id:14, name: "White Daisy Flower Frame", desc: "Dried flower frame decor.", price: 2050, rating: 4.4, img: "images/products/flowers/frames/FF2.png", category: "flowers", subcategory: "flowers-frames" },
  { id:15, name: "Cute Sunflower Frame", desc: "Dried flower frame decor.", price: 950, rating: 5.0, img: "images/products/flowers/frames/FF3.png", category: "flowers", subcategory: "flowers-frames" },
  { id:16, name: "Cherish Sunflower Frame", desc: "Dried flower frame decor.", price: 2300, rating: 2.6, img: "images/products/flowers/frames/FF4.png", category: "flowers", subcategory: "flowers-frames" },
  { id:17, name: "Romantic Roses Bouquet Frame", desc: "Dried flower frame decor.", price: 1500, rating: 1.8, img: "images/products/flowers/frames/FF5.png", category: "flowers", subcategory: "flowers-frames" },
  { id:18, name: "Serene Lavender Frame", desc: "Dried flower frame decor.", price: 1750, rating: 2.5, img: "images/products/flowers/frames/FF6.png", category: "flowers", subcategory: "flowers-frames" },
  { id:19, name: "Unicorn Cute LED Lamp", desc: "Star-shaped warm fairy lights.", price: 2850, rating: 4.6, img: "images/products/electronics/lightning-items/LI1.png", category: "electronics", subcategory: "lightning-items" },
  { id:20, name: "Flame Friend Cozy Lamp", desc: "Star-shaped warm fairy lights.", price: 2550, rating: 3.7, img: "images/products/electronics/lightning-items/LI2.png", category: "electronics", subcategory: "lightning-items" },
  { id:21, name: "LED Pickup Light", desc: "Star-shaped warm fairy lights.", price: 1850, rating: 4.8, img: "images/products/electronics/lightning-items/LI3.png", category: "electronics", subcategory: "lightning-items" },
  { id:22, name: "Jellyfish Lamp", desc: "Star-shaped warm fairy lights.", price: 3050, rating: 3.5, img: "images/products/electronics/lightning-items/LI4.png", category: "electronics", subcategory: "lightning-items" },
  { id:23, name: "Rainbow Night Light Lamp", desc: "Star-shaped warm fairy lights.", price: 1950, rating: 4.0, img: "images/products/electronics/lightning-items/LI5.png", category: "electronics", subcategory: "lightning-items" },
  { id:24, name: "'Vinyl Inspired' Bluetooth Speaker", desc: "Star-shaped warm fairy lights.", price: 3000, rating: 5.0, img: "images/products/electronics/lightning-items/LI6.png", category: "electronics", subcategory: "lightning-items" },
  { id:25, name: "Smile Happy Day iPhone Cover", desc: "Best Phone Covers.", price: 1250, rating: 3.7, img: "images/products/electronics/Accessories/A1.png", category: "electronics", subcategory: "accessories" },
  { id:26, name: "Sweet Bear iPhone Cover", desc: "Best Phone Covers.", price: 1550, rating: 2.7, img: "images/products/electronics/Accessories/A2.png", category: "electronics", subcategory: "accessories" },
  { id:27, name: "Rich Luck iPhone Cover", desc: "Best Phone Covers.", price: 2050, rating: 4.7, img: "images/products/electronics/Accessories/A3.png", category: "electronics", subcategory: "accessories" },
  { id:28, name: "Cherry Bubble iPhone Cover", desc: "Best Phone Covers.", price: 1850, rating: 5.0, img: "images/products/electronics/Accessories/A4.png", category: "electronics", subcategory: "accessories" },
  { id:29, name: "Kawaii Bunny iPhone Cover", desc: "Best Phone Covers.", price: 1750, rating: 3.5, img: "images/products/electronics/Accessories/A5.png", category: "electronics", subcategory: "accessories" },
  { id:30, name: "Brunch Bear Silicone iPhone Cover", desc: "Best Phone Covers.", price: 1950, rating: 4.0, img: "images/products/electronics/Accessories/A6.png", category: "electronics", subcategory: "accessories" },
  { id:31, name: "Hot Swap Mechanical Keyboard", desc: "Value Gift", price: 4800, rating: 3.5, img: "images/products/electronics/table-items/T1.png", category: "electronics", subcategory: "table-items" },
  { id:32, name: "Macaron Wireless Keyboard", desc: "Value Gift", price: 5800, rating: 2.6, img: "images/products/electronics/table-items/T2.png", category: "electronics", subcategory: "table-items" },
  { id:33, name: "Kawaii Cat Wireless Keyboard", desc: "Value Gift", price: 6900, rating: 3.4, img: "images/products/electronics/table-items/T3.png", category: "electronics", subcategory: "table-items" },
  { id:34, name: "Capybara Alarm Clock", desc: "Value Gift", price: 2800, rating: 2.5, img: "images/products/electronics/table-items/T4.png", category: "electronics", subcategory: "table-items" },
  { id:35, name: "Aesthetic LED Alarm Clock", desc: "Value Gift", price: 2500, rating: 5.0, img: "images/products/electronics/table-items/T5.png", category: "electronics", subcategory: "table-items" },
  { id:36, name: "Capybara Bedside Alarm Clock", desc: "Value Gift", price: 1900, rating: 4.5, img: "images/products/electronics/table-items/T6.png", category: "electronics", subcategory: "table-items" },

  // --- Gift Packs (add 8 real products) ---
  { id: 37, name: "Luxury Chocolate Box", desc: "Premium chocolates & sparkling wine.", price: 7500, rating: 4.9, img: "images/popular-gift-packs/pgp1.webp", category: "gift-packs", subcategory: null },
  { id: 38, name: "Gourmet Snack Hamper", desc: "A delightful collection of premium snacks.", price: 5900, rating: 4.5, img: "images/popular-gift-packs/pgp2.jpg", category: "gift-packs", subcategory: null },
  { id: 39, name: "Personal Luxury Gifts", desc: "Elegant, personalized essentials for any occasion.", price: 7800, rating: 4.0, img: "images/popular-gift-packs/pgp3.webp", category: "gift-packs", subcategory: null },
  { id: 40, name: "Choco Gift Basket", desc: "Premium chocolates, candy bars & truffles.", price: 5200, rating: 3.5, img: "images/popular-gift-packs/pgp4.jpg", category: "gift-packs", subcategory: null },
  { id: 41, name: "Self & Chocolate Set", desc: "A soothing gift box with chocolates and more.", price: 4800, rating: 3, img: "images/popular-gift-packs/pgp5.webp", category: "gift-packs", subcategory: null },
  { id: 42, name: "Good Luck Spa Gift Box", desc: "Pampering spa goodies for best wishes.", price: 3900, rating: 4.5, img: "images/popular-gift-packs/pgp6.webp", category: "gift-packs", subcategory: null },
  { id: 43, name: "Hot Stuff Coffee Hamper", desc: "Deluxe set: gourmet coffee, mug, chocolates.", price: 4750, rating: 4.9, img: "images/popular-gift-packs/pgp7.webp", category: "gift-packs", subcategory: null },
  { id: 44, name: "Maroon Travel Pack", desc: "Premium travel set with accessories and perfume.", price: 4950, rating: 4.0, img: "images/popular-gift-packs/pgp8.webp", category: "gift-packs", subcategory: null },
  // ... extend to 44+ (real items)
];

// ====== Config & State ======
const DEFAULT_BATCH = 12; // All mode: show 12 at a time
const FILTER_BATCH = 8;   // Flowers/electronics/subcat: show 6 only
const SUB_BATCH = 6;


let shownProducts = [];
let currentBatch = 0;
let currentMode = "all"; // all | flowers | electronics | subcat

let activeCategory = "all";
let activeSubcat = null;
let activeSort = "shuffle";
let searchQuery = "";

// ====== DOM ELEMENTS ======
const productsGrid = document.getElementById("productsGrid");
const showMoreBtn   = document.getElementById("showMoreBtn");
const mainSearchBar = document.getElementById("shopSearch");
const sortSelect    = document.getElementById("sortSelect");

const filterBtns      = document.querySelectorAll(".filter-pill");
const flowerSubfilter = document.getElementById("flowerSubcats");
const elecSubfilter   = document.getElementById("electroSubcats");

// ====== UTILS ======
// Fisher-Yates Shuffle (in place)
function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ====== MAIN RENDER LOGIC ======
function renderProducts(batch = 0, reset = false) {
  let filtered = filterProducts();

  // Mode logic for batch size
  let batchSize = DEFAULT_BATCH;
  if (
    currentMode === "flowers" ||
    currentMode === "electronics" ||
    currentMode === "gift-packs" || // <--- add this line
    ["flower-pots", "bouquets", "frames", "lightning-items", "accessories", "table-items"].includes(currentMode)
  ) {
    // For main cat or subcat, show only 6 (or 8 for gift-packs below)
    batchSize = currentMode === "gift-packs" ? 8 : FILTER_BATCH;
  }
  if (reset) {
    productsGrid.innerHTML = "";
    shownProducts = [];
    currentBatch = 0;
    // Shuffle *on each filter click or All click*
    shuffleArray(filtered);
  }

  // Calculate visible
  let start = batch * batchSize;
  let end = start + batchSize;
  let toShow = filtered.slice(0, end);
  shownProducts = toShow;

  // Render
  productsGrid.innerHTML = "";
  toShow.forEach(prod => productsGrid.appendChild(productCard(prod)));

  // Show More button logic
  if (currentMode === "all" && filtered.length > shownProducts.length) {
    showMoreBtn.style.display = "inline-block";
  } else {
    showMoreBtn.style.display = "none";
  }
}

// ====== FILTER, SORT, SEARCH ======
function filterProducts() {
  let arr = PRODUCTS.slice();

  // 1. Category/subcategory
  if (activeCategory && activeCategory !== "all") {
    arr = arr.filter(p => p.category === activeCategory);
  }
  if (activeSubcat) {
    arr = arr.filter(p => p.subcategory === activeSubcat);
  }
  // 2. Search
  if (searchQuery.trim()) {
    let q = searchQuery.trim().toLowerCase();
    arr = arr.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    );
  }
  // 3. Sort
  switch (activeSort) {
    case "price-low": arr.sort((a, b) => a.price - b.price); break;
    case "price-high": arr.sort((a, b) => b.price - a.price); break;
    case "rating": arr.sort((a, b) => b.rating - a.rating); break;
    // default: shuffle handled on render, not here
  }
  return arr;
}

// ====== PRODUCT CARD (Grid, Popup) ======
function productCard(prod) {
  let card = document.createElement('div');
  card.className = "shop-product-card";
  card.tabIndex = 0;
  card.innerHTML = `
    <div class="shop-card-img-wrap">
      <img class="shop-card-img" src="${prod.img}" alt="${prod.name}">
    </div>
    <div class="shop-card-title">${prod.name}</div>
    <div class="shop-card-desc">${prod.desc}</div>
    <div class="shop-card-bottom">
      <span class="shop-card-price">LKR ${prod.price.toLocaleString()}</span>
      <span class="shop-card-rating">${"★".repeat(Math.round(prod.rating))}</span>
    </div>
    <button class="shop-card-add"><i class="bi bi-bag-plus me-2"></i>Add to Cart</button>
  `;

  return card;
}

// ====== SHOW MORE ======
showMoreBtn.addEventListener("click", function() {
  currentBatch++;
  renderProducts(currentBatch);
});

// ====== SEARCH ======
mainSearchBar.addEventListener("input", function(e) {
  searchQuery = e.target.value;
  renderProducts(0, true);
});

// Make icon button trigger search as well
document.getElementById('shopSearchBtn').addEventListener('click', function() {
  searchQuery = mainSearchBar.value;
  renderProducts(0, true);
});

// Support Enter key for both input and button
mainSearchBar.addEventListener("keyup", function(e) {
  if (e.key === "Enter") {
    searchQuery = e.target.value;
    renderProducts(0, true);
  }
});

// ====== SORT ======
sortSelect.addEventListener("change", function(e) {
  activeSort = e.target.value;
  renderProducts(0, true);
});

// ====== FILTER BUTTONS/PILLS ======
filterBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    let cat = btn.dataset.cat;
    if (cat === "all") {
      activeCategory = "all"; activeSubcat = null; currentMode = "all";
      flowerSubfilter.style.display = "none";
      elecSubfilter.style.display = "none";
    } else if (cat === "flowers") {
      activeCategory = "flowers"; activeSubcat = null; currentMode = "flowers";
      flowerSubfilter.style.display = "flex";
      elecSubfilter.style.display = "none";
    } else if (cat === "gift-packs") {
      activeCategory = "gift-packs"; activeSubcat = null; currentMode = "gift-packs";
      flowerSubfilter.style.display = "none";
      elecSubfilter.style.display = "none";
    } else if (cat === "electronics") {
      activeCategory = "electronics"; activeSubcat = null; currentMode = "electronics";
      flowerSubfilter.style.display = "none";
      elecSubfilter.style.display = "flex";
    }
    // Remove/Set active
    filterBtns.forEach(f => f.classList.remove("active"));
    btn.classList.add("active");
    renderProducts(0, true);
  });
});

// ====== SUBFILTERS ======
document.querySelectorAll("#flowerSubcats .filter-pill, #electroSubcats .filter-pill").forEach(btn => {
  btn.addEventListener("click", function() {
    let sub = btn.dataset.cat;
    // Subcats for flowers
    if (["flowers-pots", "flowers-bouquets", "flowers-frames"].includes(sub)) {
      activeCategory = "flowers"; activeSubcat = sub; currentMode = sub;
    }
    // Subcats for electronics
    if (["lightning-items", "accessories", "table-items"].includes(sub)) {
      activeCategory = "electronics"; activeSubcat = sub; currentMode = sub;
    }
    renderProducts(0, true);
  });
});

// ====== PRODUCT MODAL/POPUP ======
function openModal(prod) {
  // Modal overlay
  let modalBg = document.createElement("div");
  modalBg.className = "product-modal-bg";
  modalBg.innerHTML = `
    <div class="product-modal-card animate__animated animate__zoomIn">
      <button class="modal-close" title="Close">&times;</button>
      <img src="${prod.img}" alt="${prod.name}">
      <div class="shop-card-title">${prod.name}</div>
      <div class="shop-card-desc">${prod.desc}</div>
      <div class="shop-card-price">LKR ${prod.price.toLocaleString()}</div>
      <div class="shop-card-rating" style="font-size:1.5rem;">${"★".repeat(Math.round(prod.rating))}</div>
      <button class="shop-card-add mt-2"><i class="bi bi-bag-plus me-2"></i>Add to Cart</button>
    </div>
  `;
  document.body.appendChild(modalBg);

  modalBg.querySelector(".modal-close").addEventListener("click", () => modalBg.remove());
  modalBg.addEventListener("click", (e) => { if (e.target === modalBg) modalBg.remove(); });
  modalBg.querySelector('.shop-card-add').addEventListener("click", function(e) {
    e.stopPropagation();
    alert(`Added "${prod.name}" to cart!`);
    modalBg.remove();
  });
}

// ======= CART DROPDOWN OPEN/CLOSE LOGIC =======
document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector('.cart-dropdown-wrapper');
  const icon = document.getElementById('cartIcon');
  const dropdown = document.getElementById('cartDropdown');
  let overIcon = false;
  let overDropdown = false;

  // Show dropdown on mouseenter (icon)
  if (icon && wrapper && dropdown) {
    icon.addEventListener('mouseenter', () => {
      wrapper.classList.add('show');
      overIcon = true;
    });
    icon.addEventListener('mouseleave', () => {
      overIcon = false;
      setTimeout(() => {
        if (!overDropdown) wrapper.classList.remove('show');
      }, 100);
    });
    dropdown.addEventListener('mouseenter', () => {
      wrapper.classList.add('show');
      overDropdown = true;
    });
    dropdown.addEventListener('mouseleave', () => {
      overDropdown = false;
      setTimeout(() => {
        if (!overIcon) wrapper.classList.remove('show');
      }, 100);
    });
    // Redirect to cart page on click
    icon.addEventListener('click', function (e) {
      window.location.href = 'cart.html';
    });
  }

  // --- User Dropdown Logic ---
  const userWrapper = document.querySelector('.user-dropdown-wrapper');
  const userIcon = document.getElementById('userDropdownIcon');
  const userDropdown = document.getElementById('userDropdownMenu');
  let userOverIcon = false, userOverDropdown = false;

  if (userIcon && userDropdown) {
    userIcon.addEventListener('mouseenter', () => {
      userWrapper.classList.add('show'); userOverIcon = true;
    });
    userIcon.addEventListener('mouseleave', () => {
      userOverIcon = false; setTimeout(() => { if (!userOverDropdown) userWrapper.classList.remove('show'); }, 120);
    });
    userDropdown.addEventListener('mouseenter', () => {
      userWrapper.classList.add('show'); userOverDropdown = true;
    });
    userDropdown.addEventListener('mouseleave', () => {
      userOverDropdown = false; setTimeout(() => { if (!userOverIcon) userWrapper.classList.remove('show'); }, 120);
    });
    // Mobile support
    userIcon.addEventListener('click', function(e) {
      e.stopPropagation(); userWrapper.classList.toggle('show');
    });
    document.addEventListener('click', function(e) {
      if (!userWrapper.contains(e.target)) userWrapper.classList.remove('show');
    });
  }

  // --- Modern Button Animation (for pulse) ---
  const style = document.createElement('style');
  style.innerHTML = `
    .pulse-cart-btn {
      animation: pulse-cart-btn 0.36s cubic-bezier(.2,1.6,.42,1.06);
    }
    @keyframes pulse-cart-btn {
      0% { transform: scale(1);}
      45% { transform: scale(1.13);}
      100% { transform: scale(1);}
    }
    .cart-bounce {
      animation: cartBounce 0.55s cubic-bezier(.44,1.68,.18,1.13);
    }
    @keyframes cartBounce {
      0% { transform: scale(1);}
      35% { transform: scale(1.18) rotate(-14deg);}
      45% { transform: scale(1.09) rotate(7deg);}
      100% { transform: scale(1) rotate(0);}
    }
  `;
  document.head.appendChild(style);
});

// ====== NAVBAR SEARCH BAR FILTER ======
document.addEventListener('DOMContentLoaded', function () {
  // Get the navbar search input (top right)
  const navSearchInput = document.querySelector('.search-animated .search-input');
  if (navSearchInput) {
    navSearchInput.addEventListener('input', function(e) {
      // Mirror search into main page search as well (keep in sync)
      const q = e.target.value;
      // If shop page search exists, update it too
      const shopSearch = document.getElementById('shopSearch');
      if (shopSearch) shopSearch.value = q;
      // Set searchQuery and render
      searchQuery = q;
      renderProducts(0, true);
    });
  }
});

// ====== SHOP PAGE CART LOGIC ======

// Track cart in-memory (use localStorage for persistence if needed)
let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

// --- Attach Add to Cart event to product cards and modal ---
function setupShopAddToCart() {
  // For main grid
  document.querySelectorAll('.shop-card-add').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      // Find the product card and its data
      let card = btn.closest('.shop-product-card');
      let prodName = card.querySelector('.shop-card-title').textContent.trim();
      let prod = PRODUCTS.find(p => p.name === prodName);
      if (!prod) return;
      addToCart(prod);
      // Animate icon
      const cartIcon = document.getElementById('cartIcon');
      if (cartIcon) {
        cartIcon.classList.add('cart-bounce');
        setTimeout(() => cartIcon.classList.remove('cart-bounce'), 550);
      }
    });
  });
  // For modal (if open)
  const modalAddBtn = document.querySelector('.product-modal-bg .shop-card-add');
  if (modalAddBtn) {
    modalAddBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      let prodName = document.querySelector('.product-modal-bg .shop-card-title').textContent.trim();
      let prod = PRODUCTS.find(p => p.name === prodName);
      if (!prod) return;
      addToCart(prod);
      document.querySelector('.product-modal-bg').remove(); // close modal
    });
  }
}

// --- Add to Cart Logic ---
function saveCart() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function addToCart(prod) {
  if (!cartItems.some(item => item.id === prod.id)) {
    cartItems.push(prod);
    saveCart(); // <---- ADD THIS LINE
  }
  renderCartDropdown();
}

// --- Remove Item Logic ---
function removeCartItem(prodId) {
  cartItems = cartItems.filter(item => item.id !== prodId);
  saveCart(); // <---- ADD THIS LINE
  renderCartDropdown();
}

// --- Render Cart Dropdown ---
function renderCartDropdown() {
  const ul = document.querySelector('#cartDropdown ul');
  if (!ul) return;
  ul.innerHTML = '';
  let total = 0;
  cartItems.forEach(item => {
    total += item.price;
    let li = document.createElement('li');
    li.className = "d-flex align-items-center mb-2 gap-2";
    li.innerHTML = `
      <img src="${item.img}" alt="" style="width:32px; height:32px; object-fit:cover; border-radius:7px; box-shadow:0 2px 8px #d176ac33; margin-right:8px;">
      <span class="flex-grow-1" style="color:#d176ac;">${item.name}<br><small class="text-muted">LKR ${item.price.toLocaleString()}</small></span>
      <span class="text-danger ms-2" style="cursor:pointer;font-size:1.3em;" onclick="removeCartItem(${item.id})">&times;</span>
    `;
    ul.appendChild(li);
  });

  // Total display
  let cartDropdown = document.getElementById('cartDropdown');
  let totalDiv = cartDropdown.querySelector('.cart-total');
  if (!totalDiv) {
    totalDiv = document.createElement('div');
    totalDiv.className = 'cart-total px-3 pb-2 pt-2 fw-bold text-end';
    cartDropdown.insertBefore(totalDiv, cartDropdown.querySelector('.p-3.pt-0'));
  }
  totalDiv.innerHTML = cartItems.length
    ? `<span style="color:#d176ac;">Total:</span> <span style="color:#00563F;">LKR ${total.toLocaleString()}</span>`
    : '';
}

// --- Attach remove handler globally
window.removeCartItem = removeCartItem;

// --- Go to checkout on button click ---
document.addEventListener('DOMContentLoaded', function () {
  const checkoutBtn = document.querySelector('#cartDropdown .checkout-btn-modern');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = 'cart.html';
    });
  }
});

// --- Always re-setup Add to Cart buttons after (re-)rendering products ---
const origRenderProducts = renderProducts;
renderProducts = function(...args) {
  origRenderProducts.apply(this, args);
  setupShopAddToCart();
};

// --- Initial render and cart load (empty)
window.addEventListener("DOMContentLoaded", () => {
  shuffleArray(PRODUCTS);
  renderProducts(0, true);
});
