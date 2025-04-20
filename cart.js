function goBackToComponents() {
    window.location.href = "components.html";
  }

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const container = document.getElementById("cartItems");
const totalEl = document.getElementById("totalAmount");

function renderCart() {
    container.innerHTML = "";
    let total = 0;
  
    if (cart.length === 0) {
      container.innerHTML = "<p class='para1' >Your cart is empty.</p>";
      totalEl.innerText = "0.00";
      return;
    }
  
    cart.forEach((item) => {
      const card = document.createElement("div");
      card.className = "product-card fade-in";
      card.innerHTML = `
        <div class="remove-icon" onclick="removeCartItem(${item.id}, this)">
          <i class="fas fa-trash-alt"></i>
        </div>
        <img src="${item.image}" alt="${item.name}" width="150">
        <h4>${item.name}</h4>
        <p>Price: LKR ${item.price.toFixed(2)}</p>
        <p>Quantity: ${item.qty}</p>
        <p>Subtotal: LKR ${(item.price * item.qty).toFixed(2)}</p>
      `;
      container.appendChild(card);
      total += item.price * item.qty;
    });
  
    totalEl.innerText = total.toFixed(2);
  }
  
    
  function removeCartItem(id, el) {
  const index = cart.findIndex(item => item.id === id);
  if (index !== -1) {
    const item = cart[index];

    // If quantity > 1, just decrease and animate a flash
    if (item.qty > 1) {
      item.qty -= 1;

      // Add flash animation class
      const card = el.parentElement;
      card.classList.add("flash");

      // Remove flash class after animation
      setTimeout(() => {
        card.classList.remove("flash");
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      }, 300);
    } else {
      // Fade out and remove the item if quantity == 1
      const card = el.parentElement;
      card.classList.add("fade-out");

      setTimeout(() => {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      }, 300);
    }
  }
}


function clearCart() {
  if (confirm("Are you sure you want to clear your cart?")) {
    cart = [];
    localStorage.removeItem("cart");
    renderCart();
  }
}

function buyNow() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  localStorage.setItem("cartData", JSON.stringify(cart));
  window.location.href = "checkout.html";
}

function applyFavourites() {
  const favCart = JSON.parse(localStorage.getItem("favouriteCart")) || [];
  if (favCart.length === 0) {
    alert("No saved favourite cart to apply.");
    return;
  }

  const updatedCart = [...cart];
  let appliedCount = 0;

  favCart.forEach(favItem => {
    const existing = updatedCart.find(item => item.id === favItem.id);
    const product = products.find(p => p.id === favItem.id);

    if (!product) {
      console.warn(`Product with ID ${favItem.id} not found.`);
      return;
    }

    const maxAvailable = product.stock;
    const currentQty = existing ? existing.qty : 0;
    const totalQty = currentQty + favItem.qty;

    if (totalQty > maxAvailable) {
      alert(`Cannot add ${favItem.name}. Only ${maxAvailable - currentQty} left in stock.`);
      return;
    }

    if (existing) {
      existing.qty += favItem.qty;
    } else {
      updatedCart.push({ ...favItem });
    }

    appliedCount++;
  });

  if (appliedCount > 0) {
    cart = updatedCart;
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    alert(`${appliedCount} favorite item(s) added to the cart.`);
  } else {
    alert("No items could be added from favorites due to stock limits.");
  }
}  
  

function addToFavourites() {
    if (cart.length === 0) {
      alert("Add some items to the cart first!");
      return;
    }
  
    // Save cart to "favouriteCart"
    localStorage.setItem("favouriteCart", JSON.stringify(cart));
  
    // Also push each item to "favorites"
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
    cart.forEach(cartItem => {
      // Avoid duplicates by checking ID
      if (!favorites.some(fav => fav.id === cartItem.id)) {
        favorites.push({
          id: cartItem.id,
          name: cartItem.name,
          image: cartItem.image,
          price: cartItem.price
        });
      }
    });
  
    localStorage.setItem("favorites", JSON.stringify(favorites));
  
    alert("Current cart saved to favourites and added to favorites page.");
  }
  
renderCart();
