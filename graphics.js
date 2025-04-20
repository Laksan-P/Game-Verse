const products = [
  {
      id: 7,
      name: "NVIDIA RTX 4090",
      specs: "24GB GDDR6X, best 4K gaming Dominates AI & rendering tasks Ray tracing + DLSS 3.5",
      price: 777000,
      stock: 7,
      image: "Images/Nvidia 4090.jpg",
  },
  {
      id: 8,
      name: "NVIDIA RTX 4080 Super",
      specs: "16GB, 1440p/4K powerhouse Excellent performance per watt Great for creators & gamers",
      price: 570000,
      stock: 4,
      image: "Images/Nvidia 4080.jpg",
  },
  {
      id: 9,
      name: "NVIDIA RTX 4070 Ti Super",
      specs: "16GB, best 1440p option DLSS 3.5 support High performance, good pricing",
      price: 350000,
      stock: 3,
      image: "Images/Nvidia 4070i.jpg",
  },
  {
      id: 10,
      name: "AMD Radeon RX 7900 XTX",
      specs: "24GB, great 4K value Top AMD performance Efficient and powerful",
      price: 515000,
      stock: 2,
      image: "Images/AMD Radeon RX 7900 XTX.jpg",
  },
  {
      id: 11,
      name: "AMD Radeon RX 7800 XT",
      specs: "16GB, smooth 1440p gaming Competitive price Good power efficiency",
      price: 150000,
      stock: 1,
      image: "Images/AMD Radeon RX 7800 XT.jpg",
  },
  {
      id: 12,
      name: "Intel Arc A770 (16GB)",
      specs: "Budget GPU, modern APIs Great 1080p/1440p option Best with DX12/Vulkan games",
      price: 245000,
      stock: 2,
      image: "Images/Intel Arc A770 (16GB).jpg",
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
  