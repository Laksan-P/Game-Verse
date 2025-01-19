function toggleMenu() {
    let navLinks = document.getElementById('navLinks');
    let hamburger = document.querySelector('.hamburger');

    // Toggle the menu visibility
    navLinks.classList.toggle('show');

    // To create the 'X' effect
    hamburger.classList.toggle('active');
}
