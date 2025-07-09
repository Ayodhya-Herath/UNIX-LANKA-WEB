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

// Get cart items from localStorage, or empty array
let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

// Utility to save cart to localStorage
function saveCart() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Render Cart Table
function renderCart() {
  const tbody = document.getElementById('cartTableBody');
  const totalSpan = document.getElementById('cartTotal');
  tbody.innerHTML = '';
  let total = 0;

  if (cartItems.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="3" class="text-center text-muted py-5">Your cart is empty.</td>
      </tr>
    `;
    totalSpan.textContent = 'LKR 0';
    return;
  }

  cartItems.forEach(item => {
    total += item.price;
    let tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <div class="d-flex align-items-center">
          <img src="${item.img}" alt="${item.name}">
          <div>
            <div class="fw-bold text-pink">${item.name}</div>
          </div>
        </div>
      </td>
      <td class="text-end fw-semibold">LKR ${item.price.toLocaleString()}</td>
      <td class="text-end">
        <button class="btn btn-link text-danger fs-4 p-0 cart-remove-btn" title="Remove" data-id="${item.id}"><i class="bi bi-x-lg"></i></button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  totalSpan.textContent = `LKR ${total.toLocaleString()}`;

  // Remove handlers
  document.querySelectorAll('.cart-remove-btn').forEach(btn => {
    btn.onclick = function() {
      const id = Number(btn.getAttribute('data-id'));
      cartItems = cartItems.filter(item => item.id !== id);
      saveCart();
      renderCart();
    };
  });
}

// -------- Payment Form Logic --------
document.getElementById('paymentForm').onsubmit = function(e) {
  e.preventDefault();
  // Basic validation
  const nic = document.getElementById('nic').value.trim();
  const email = document.getElementById('email').value.trim();
  const cardName = document.getElementById('cardName').value.trim();
  const cardNumber = document.getElementById('cardNumber').value.trim();
  const expiry = document.getElementById('expiry').value.trim();
  const cvv = document.getElementById('cvv').value.trim();
  if (!nic || !email || !cardName || !cardNumber || !expiry || !cvv) {
    alert('Please fill all payment info fields.');
    return;
  }
  // Optionally: validate email, card, etc.
  // Show success modal
  var modal = new bootstrap.Modal(document.getElementById('paymentSuccessModal'));
  modal.show();
  // Clear cart
  cartItems = [];
  saveCart();
  renderCart();
};

// --------- On Page Load ---------
window.onload = function() {
  renderCart();
};

// ==== CART DROPDOWN & USER MENU FUNCTIONALITY ====
// Only paste this in <script> tag at the end of your HTML body or in your main JS file

document.addEventListener('DOMContentLoaded', function () {
  // ---- Cart Dropdown Logic ----
  const wrapper = document.querySelector('.cart-dropdown-wrapper');
  const icon = document.getElementById('cartIcon');
  const dropdown = document.getElementById('cartDropdown');
  let overIcon = false;
  let overDropdown = false;

  if (icon && wrapper && dropdown) {
    icon.addEventListener('mouseenter', () => {
      wrapper.classList.add('show');
      overIcon = true;
    });
    icon.addEventListener('mouseleave', () => {
      overIcon = false;
      setTimeout(() => { if (!overDropdown) wrapper.classList.remove('show'); }, 100);
    });
    dropdown.addEventListener('mouseenter', () => {
      wrapper.classList.add('show'); overDropdown = true;
    });
    dropdown.addEventListener('mouseleave', () => {
      overDropdown = false;
      setTimeout(() => { if (!overIcon) wrapper.classList.remove('show'); }, 100);
    });
    icon.addEventListener('click', function () {
      window.location.href = 'cart.html';
    });
  }

  // ---- User Dropdown Logic ----
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
    userIcon.addEventListener('click', function(e) {
      e.stopPropagation(); userWrapper.classList.toggle('show');
    });
    document.addEventListener('click', function(e) {
      if (!userWrapper.contains(e.target)) userWrapper.classList.remove('show');
    });
  }

  // --- Cart Preview (if you want live cart preview on every page) ---
  let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
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
        <span class="flex-grow-1" style="color:#d176ac;">${item.name}<br>
          <small class="cart-price-number">LKR ${item.price.toLocaleString()}</small></span>
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
      ? `<span style="color:#d176ac;">Total:</span> <span class="cart-total-number" style="color:#00563F;">LKR ${total.toLocaleString()}</span>`
      : '';
  }
  window.removeCartItem = function(prodId) {
    cartItems = cartItems.filter(item => item.id !== prodId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    renderCartDropdown();
  };
  renderCartDropdown();
});
