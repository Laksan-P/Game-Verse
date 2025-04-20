function goBackToComponents() {
    window.location.href = "components.html";
  }

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const container = document.getElementById("favoritesList");

  function renderFavorites() {
    container.innerHTML = "";

    if (favorites.length === 0) {
      container.innerHTML = "<p class='para-fav'>No favorites yet.</p>";
      return;
    }

    favorites.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card fade-in";
      card.innerHTML = `
        <div class="remove-icon" onclick="removeFavorite(${product.id}, this)">
          <i class="fas fa-trash-alt"></i>
        </div>
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>LKR ${product.price.toFixed(2)}</p>
      `;
      container.appendChild(card);
    });
  }

  function removeFavorite(id, el) {
    const card = el.parentElement;
    card.classList.add("fade-out");
  
    setTimeout(() => {
      const indexToRemove = favorites.findIndex(p => p.id === id);
      if (indexToRemove !== -1) {
        favorites.splice(indexToRemove, 1); // Remove from favorites
  
        // Also update favouriteCart
        let favCart = JSON.parse(localStorage.getItem("favouriteCart")) || [];
        favCart = favCart.filter(item => item.id !== id);
        localStorage.setItem("favouriteCart", JSON.stringify(favCart));
  
        // Save updated favorites
        localStorage.setItem("favorites", JSON.stringify(favorites));
        renderFavorites();
      }
    }, 300);
  }  

  function clearFavorites() {
    if (confirm("Clear all favorites?")) {
      localStorage.removeItem("favorites");
      location.reload();
    }
  }

renderFavorites();

// Update favouriteCart with simplified items (assuming qty = 1 by default)
const favouriteCart = favorites.map(item => ({
    id: item.id,
    name: item.name,
    image: item.image,
    price: item.price,
    qty: 1 // Default quantity
  }));
  localStorage.setItem("favouriteCart", JSON.stringify(favouriteCart));
  


  function addToFavourites() {
  if (cart.length === 0) {
    alert("Add some items to the cart first!");
    return;
  }

  // Save cart to "favouriteCart"
  const validItems = cart.filter(item => item.qty <= getProductStock(item.id));

  if (validItems.length !== cart.length) {
    alert("Some items were not saved to favourites because they exceed stock limits.");
  }

  localStorage.setItem("favouriteCart", JSON.stringify(validItems));

  // Push each to favorites (one per product)
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  validItems.forEach(cartItem => {
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
  alert("Saved available items to favorites.");
}

function getProductStock(id) {
  const product = products.find(p => p.id === id);
  return product ? product.stock : 0;
}
