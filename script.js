function toggleMenu() {
    let navLinks = document.getElementById('navLinks');
    let hamburger = document.querySelector('.hamburger');

    // Toggle the menu visibility
    navLinks.classList.toggle('show');

    // To create the 'X' effect
    hamburger.classList.toggle('active');
}



// components html 

function toggleDropdown(event) {
    event.preventDefault();  // Prevent default anchor behavior
    const dropdownContent = document.getElementById("dropdownMenu");
    
    // Toggle the dropdown visibility
    dropdownContent.classList.toggle("show");

    // If the dropdown is shown and the user clicks "Components" again, allow navigation
    if (dropdownContent.classList.contains("show")) {
        event.stopPropagation();  // Prevent propagation to the document listener
    } else {
        // After closing the dropdown, allow the link to navigate
        window.location.href = event.target.href;
    }
}

// Close the dropdown if the user clicks outside of it
document.addEventListener("click", function(event) {
    if (!event.target.closest(".dropdown")) {
        document.getElementById("dropdownMenu").classList.remove("show");
    }
});

