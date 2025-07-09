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