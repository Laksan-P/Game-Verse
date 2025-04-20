const order = JSON.parse(localStorage.getItem("orderConfirmation"));
    if (order) {
      document.getElementById("message").innerText = 
        `Dear ${order.name}, your order has been placed successfully! 
         A confirmation has been sent to ${order.email}.
         Your items will be delivered by ${order.deliveryDate}.`;
      localStorage.removeItem("orderConfirmation");
    } else {
      document.getElementById("message").innerText = 
        "No order information found.";
    }