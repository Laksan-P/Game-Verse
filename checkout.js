
  const cart = JSON.parse(localStorage.getItem("cartData")) || [];
  const summaryBody = document.getElementById("summaryBody");
  const summaryTotal = document.getElementById("summaryTotal");

  function renderSummary() {
    let total = 0;
    summaryBody.innerHTML = "";

    cart.forEach(item => {
      const subtotal = item.price * item.qty;
      total += subtotal;

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.qty}</td>
        <td>LKR ${item.price.toFixed(2)}</td>
        <td>LKR ${subtotal.toFixed(2)}</td>
      `;
      summaryBody.appendChild(row);
    });

    summaryTotal.textContent = `LKR ${total.toFixed(2)}`;
    return total;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidCard(cardNumber) {
    return /^\d{16}$/.test(cardNumber.replace(/\s/g, ""));
  }

  function isValidExpiry(expiry) {
    return /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry);
  }

  function isValidCVV(cvv) {
    return /^\d{3}$/.test(cvv);
  }

  function formatCardInput(input) {
    input.value = input.value.replace(/\D/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  }

  function formatExpiryInput(input) {
    input.value = input.value.replace(/\D/g, "")
      .replace(/^(\d{2})(\d{0,2})/, "$1/$2")
      .slice(0, 5);
  }

  function processPayment() {
    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contactNumber").value.trim();

    const street = document.getElementById("street").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const zip = document.getElementById("zip").value.trim();
    const country = document.getElementById("country").value.trim();

    const cardHolder = document.getElementById("cardHolder").value.trim();
    const card = document.getElementById("cardNumber").value.replace(/\s/g, "").trim();
    const expiry = document.getElementById("expiry").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    if (!name || !email || !contact || !street || !city || !state || !zip || !country || !cardHolder || !card || !expiry || !cvv) {
      alert("Please fill in all fields.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!isValidCard(card)) {
      alert("Card number must be 16 digits.");
      return;
    }

    if (!isValidExpiry(expiry)) {
      alert("Invalid expiration date. Use MM/YY format.");
      return;
    }

    if (!isValidCVV(cvv)) {
      alert("CVV must be 3 digits.");
      return;
    }

    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5);
    const total = renderSummary();

    const confirmation = confirm(
      `Confirm your order:\n\n` +
      `Name: ${name}\nEmail: ${email}\nContact: ${contact}\n` +
      `Address: ${street}, ${city}, ${state}, ${zip}, ${country}\n\n` +
      `Total: LKR ${total.toFixed(2)}\nDelivery Date: ${deliveryDate.toDateString()}\n\n` +
      `Click OK to proceed.`
    );

    if (!confirmation) return;

    localStorage.setItem("orderConfirmation", JSON.stringify({
      name,
      email,
      contact,
      deliveryAddress: { street, city, state, zip, country },
      deliveryDate: deliveryDate.toDateString()
    }));

    localStorage.removeItem("cart");
    localStorage.removeItem("cartData");

    window.location.href = "confirmation.html";
  }

  // Add input mask listeners
  window.addEventListener("DOMContentLoaded", () => {
    renderSummary();

    document.getElementById("cardNumber").addEventListener("input", (e) => {
      formatCardInput(e.target);
    });

    document.getElementById("expiry").addEventListener("input", (e) => {
      formatExpiryInput(e.target);
    });
  });

