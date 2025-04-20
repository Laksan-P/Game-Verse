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
    const qtyToAdd = quantities[id];
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
  
    const currentQtyInCart = existing ? existing.qty : 0;
    const totalQtyAfterAdd = currentQtyInCart + qtyToAdd;
  
    if (totalQtyAfterAdd > product.stock) {
      showToast("This product is out of stock. Only " + (product.stock - currentQtyInCart) + " left.");
      return;
    }
  
    if (existing) {
      existing.qty += qtyToAdd;
    } else {
      cart.push({ ...product, qty: qtyToAdd });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    showToast("Added to cart");
  }  
  
  renderProducts();
  