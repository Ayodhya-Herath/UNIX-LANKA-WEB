// -------- Cart Data Logic (use localStorage for persistence) --------

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
