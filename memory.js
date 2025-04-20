const products = [
  {
      id: 19,
      name: "G.Skill Trident Z5 RGB DDR5-6000",
      specs: "Stylish RGB, high speed 32GB (2x16GB) for multitasking Excellent for gaming/creators",
      price: 80000,
      stock: 7,
      image: "Images/G.Skill Trident Z5 RGB DDR5-6000.jpg",
  },
  {
      id: 20,
      name: "Corsair Vengeance DDR5-5600",
      specs: "Reliable and compatible Great value for DDR5 Ideal for mainstream builds",
      price: 18000,
      stock: 6,
      image: "Images/Corsair Vengeance DDR5-5600.jpg",
  },
  {
      id: 21,
      name: "Kingston Fury Beast DDR5-6000",
      specs: "Strong performance at good price Low latency, stable Trusted brand for RAM",
      price: 25000,
      stock: 5,
      image: "Images/Kingston Fury Beast DDR5-6000.jpg",
  },
  {
      id: 22,
      name: "TeamGroup T-Force Delta RGB DDR5-6400",
      specs: "High-frequency enthusiast RAM Eye-catching RGB design Great for OC and gaming",
      price: 60000,
      stock: 6,
      image: "Images/TeamGroup T-Force Delta RGB DDR5-6400.jpg",
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
  