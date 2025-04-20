const products = [
  {
      id: 13,
      name: "ASUS ROG Maximus Z790 Hero",
      specs: "High-end LGA1700 board DDR5, PCIe 5.0, TB4 Premium features & looks",
      price: 190000,
      stock: 4,
      image: "Images/ASUS ROG Maximus Z790 Hero.jpg",
  },
  {
      id: 14,
      name: "ASUS TUF B650-Plus WiFi",
      specs: "Value AM5 with WiFi PCIe 5.0 + DDR5 support Rock-solid reliability",
      price: 110000,
      stock: 6,
      image: "Images/ASUS TUF B650-Plus WiFi.jpg",
  },
  {
      id: 15,
      name: "MSI MEG X670E ACE",
      specs: "Top AM5 board, DDR5 PCIe 5.0, tons of ports Ideal for future-proof builds",
      price: 150000,
      stock: 4,
      image: "Images/MSI MEG X670E ACE.jpg",
  },
  {
      id: 16,
      name: "MSI MAG Z790 Tomahawk WiFi",
      specs: "Balanced Intel board Great I/O & stability Mid-tier build friendly",
      price: 135000,
      stock: 2,
      image: "Images/MSI MAG Z790 Tomahawk WiFi.jpg",
  },
  {
      id: 17,
      name: "Gigabyte Z790 AORUS Master",
      specs: "Excellent VRM cooling LGA1700 with DDR5 support Great for overclocking",
      price: 215000,
      stock: 3,
      image: "Images/Gigabyte Z790 AORUS Master.jpg",
  },
  {
      id: 18,
      name: "ASRock B650E Steel Legend",
      specs: "Mid-range AM5 choice Gen 5 SSD & GPU support Good looks and durability",
      price: 100000,
      stock: 2,
      image: "Images/ASRock B650E Steel Legend.jpg",
  },
];

const productGrid = document.getElementById("productGrid");
  const quantities = {};
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.style.display = "block";
    setTimeout(() => toast.style.display = "none", 2000);
  }
  
  function renderProducts() {
    productGrid.innerHTML = "";
    products.forEach(product => {
      quantities[product.id] = 1;
  
      const isFavorite = favorites.some(p => p.id === product.id);

  
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <div class="favorite-icon ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id}, this)">
          <i class="fas fa-heart"></i>
        </div>
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p class="specs">${product.specs}</p>
        <p class="price">LKR ${product.price.toFixed(2)}</p>
        <div class="quantity-container">
          <button class="qty-btn" onclick="decreaseQty(${product.id})">−</button>
          <span id="qty-display-${product.id}">1</span>
          <button class="qty-btn" onclick="increaseQty(${product.id}, ${product.stock})">+</button>
          <span class="stock-note">Only ${product.stock} left</span>
        </div>
        <button class="addToCart" onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productGrid.appendChild(card);
    });
  }
  
  function toggleFavorite(id, el) {
    const existing = favorites.find(p => p.id === id);
  
    if (existing) {
      favorites = favorites.filter(p => p.id !== id);
      el.classList.remove("active");
      showToast("Removed from favorites");
    } else {
      const product = products.find(p => p.id === id);
      if (product) {
        favorites.push(product);
        el.classList.add("active");
        showToast("Added to favorites");
      }
    }
  
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
  
  
  function increaseQty(id, max) {
    if (quantities[id] < max) {
      quantities[id]++;
      document.getElementById(`qty-display-${id}`).innerText = quantities[id];
      flashQtyBtn(`qty-display-${id}`, true);
    }
  }
  
  function decreaseQty(id) {
    if (quantities[id] > 1) {
      quantities[id]--;
      document.getElementById(`qty-display-${id}`).innerText = quantities[id];
      flashQtyBtn(`qty-display-${id}`, false);
    }
  }
  
  function flashQtyBtn(id, isPlus) {
    const btn = document.querySelector(
      isPlus
        ? `[onclick="increaseQty(${id.split('-')[2]},`
        : `[onclick="decreaseQty(${id.split('-')[2]})"]`
    );
    btn.classList.add("clicked");
    setTimeout(() => btn.classList.remove("clicked"), 150);
  }
  
  
  function addToCart(id) {
    const qty = quantities[id];
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
  
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ ...product, qty });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    showToast("Added to cart");
  }
  
  renderProducts();
  