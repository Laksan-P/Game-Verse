const products = [
  {
      id: 23,
      name: "Samsung 990 Pro 2TB NVMe Gen4",
      specs: "Ultra-fast read: 7450MB/s Top-tier reliability Perfect for gamers and pros",
      price: 54500,
      stock: 9,
      image: "Images/Samsung 990 pro.webp",
  },
  {
      id: 24,
      name: "WD Black SN850X 2TB NVMe",
      specs: "Gen4 speed, great for gaming Smart thermal design Strong read/write balance",
      price: 93800,
      stock: 8,
      image: "Images/WD Black SN850X 2TB NVMe 1.jpg",
  },
  {
      id: 25,
      name: "Crucial T700 2TB NVMe Gen5",
      specs: "11,000MB/s speeds (Gen5 req.) Future-ready performance Ideal for heavy workloads",
      price: 79500,
      stock: 3,
      image: "Images/Crucial T700 2TB NVMe Gen5.jpg",
  },
  {
      id: 26,
      name: "Corsair MP600 Pro XT 2TB",
      specs: "Excellent endurance Efficient cooling Strong all-around NVMe",
      price: 58000,
      stock: 7,
      image: "Images/Corsair MP600 Pro XT 2TB.jpg",
  },
  {
      id: 27,
      name: "Seagate FireCuda 530 1TB",
      specs: "Great durability & speed Ideal for PS5 & PC Compact and reliable",
      price: 89999,
      stock: 4,
      image: "Images/Seagate FireCuda 530 1TB.jpg",
  },
  {
      id: 28,
      name: "WD Blue 2TB SATA SSD",
      specs: "Budget SATA SSD Reliable for everyday tasks Big capacity, low cost",
      price: 71999,
      stock: 5,
      image: "Images/WD Blue 2TB SATA SSD.jpg",
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
  