// Cart Dropdown Open/Close Logic
document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector('.cart-dropdown-wrapper');
  const icon = document.getElementById('cartIcon');
  const dropdown = document.getElementById('cartDropdown');
  let overIcon = false;
  let overDropdown = false;

  // Show dropdown on mouseenter (icon)
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

  // Show dropdown on mouseenter (dropdown)
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

  // ========== Product Card Click / Add to Cart Logic ==========
  // Make card clickable except the Add to Cart button
  document.querySelectorAll('.product-card-3d').forEach(card => {
    card.addEventListener('click', function(e) {
      if (!e.target.classList.contains('add-to-cart-btn')) {
        window.location.href = 'product.html';
      }
    });
  });

  // Add to Cart functionality
  let cartItems = [];

  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      // Button pulse animation
      btn.classList.add('pulse-cart-btn');
      setTimeout(() => btn.classList.remove('pulse-cart-btn'), 350);

      let card = btn.closest('.product-card-3d');
      let title = card.dataset.title;
      let price = card.dataset.price;
      let img = card.dataset.img;
      // Add the item (prevent duplicates for demo)
      if (!cartItems.find(item => item.title === title)) {
        cartItems.push({title, price, img});
        // Cart icon shake
        icon.classList.add('cart-bounce');
        setTimeout(() => icon.classList.remove('cart-bounce'), 550);
      }
      renderCartDropdown();
    });
  });

  // Render cart dropdown
  function renderCartDropdown() {
    let ul = document.querySelector('#cartDropdown ul');
    ul.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
      let itemPrice = parseInt(item.price.replace(/[^0-9]/g, ''));
      total += itemPrice;
      let li = document.createElement('li');
      li.className = "d-flex align-items-center mb-2 gap-2";
      li.innerHTML = `
        <img src="${item.img}" alt="" style="width:32px; height:32px; object-fit:cover; border-radius:7px; box-shadow:0 2px 8px #d176ac33; margin-right:8px;">
        <span class="flex-grow-1" style="color:#d176ac;">${item.title}<br><small class="text-muted">${item.price}</small></span>
        <span class="text-danger ms-2" style="cursor:pointer;font-size:1.3em;" onclick="removeCartItem('${item.title}')">&times;</span>
      `;
      ul.appendChild(li);
    });

    // Show total at the bottom
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

  // Remove from cart function
  window.removeCartItem = function(title) {
    cartItems = cartItems.filter(item => item.title !== title);
    renderCartDropdown();
  };

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

  // --- User Dropdown Open/Close Logic ---
  const userWrapper = document.querySelector('.user-dropdown-wrapper');
  const userIcon = document.getElementById('userDropdownIcon');
  const userDropdown = document.getElementById('userDropdownMenu');
  let userOverIcon = false;
  let userOverDropdown = false;

  if (userIcon && userDropdown) {
    userIcon.addEventListener('mouseenter', () => {
      userWrapper.classList.add('show');
      userOverIcon = true;
    });
    userIcon.addEventListener('mouseleave', () => {
      userOverIcon = false;
      setTimeout(() => { if (!userOverDropdown) userWrapper.classList.remove('show'); }, 120);
    });
    userDropdown.addEventListener('mouseenter', () => {
      userWrapper.classList.add('show');
      userOverDropdown = true;
    });
    userDropdown.addEventListener('mouseleave', () => {
      userOverDropdown = false;
      setTimeout(() => { if (!userOverIcon) userWrapper.classList.remove('show'); }, 120);
    });
    // Mobile support (show on click)
    userIcon.addEventListener('click', function(e) {
      e.stopPropagation();
      userWrapper.classList.toggle('show');
    });
    document.addEventListener('click', function(e) {
      if (!userWrapper.contains(e.target)) userWrapper.classList.remove('show');
    });
  }
});
