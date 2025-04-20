const products = [
  {
      id: 1,
      name: "Intel Core i9-14900K",
      specs: "24 cores (8P+16E), 32 threads Clock: Up to 6.0 GHz Great for gaming and productivity LGA1700 Socket",
      price: 146500,
      stock: 5,
      image: "Images/intel.webp"
  },
  {
      id: 2,
      name: "Intel Core i7-14700K",
      specs: "20 cores, 5.6 GHz boost Strong balance of price & power Ideal for high-end gaming",
      price: 120000,
      stock: 4,
      image: "Images/intel i7.webp"
  },
  {
      id: 3,
      name: "Intel Core i5-14600K",
      specs: "14 cores (6P+8E), 5.3 GHz Mid-range gaming beast Great bang for the buck",
      price: 114000,
      stock: 3,
      image: "Images/intel i5.jpg"
  },
  {
      id: 4,
      name: "AMD Ryzen 9 7950X",
      specs: "16 cores, 32 threads, 5.7 GHz Top-tier for creators & pros AM5, PCIe 5.0 support",
      price: 197000,
      stock: 6,
      image: "Images/AMD Ryzen 9.jpg"
  },
  {
      id: 5,
      name: "AMD Ryzen 7 7800X3D",
      specs: "8 cores, 3D V-Cache tech Top-tier gaming efficiency Best gaming value",
      price: 161500,
      stock: 4,
      image: "Images/AMD Ryzen 7.webp"
  },
  {
      id: 6,
      name: "AMD Ryzen 5 7600X",
      specs: "6 cores, 5.3 GHz boost Budget-friendly AM5 chip Excellent starter CPU",
      price: 67500,
      stock: 3,
      image: "Images/AMD Ryzen 5.webp",
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
  