document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
        const scroll = window.scrollY;
        console.log("Scroll position:", scroll); // Debug: Check scroll position
        const navbar = document.querySelector(".navbar");
        if (scroll > 300) {
            navbar.style.background = "#333"; // Dark color
            console.log("Background set to dark (#333)"); // Debug: Confirm background change
        } else {
            navbar.style.background = "transparent"; // Light color (transparent)
            console.log("Background set to light (transparent)"); // Debug: Confirm background change
        }
    });
});

$('#header-include').load('https://bellgreenb45.github.io/Beachy-Webshop/header.html', function() {
    console.log("Header loaded successfully"); // Debug: Confirm header load
    const navbar = document.querySelector(".navbar");
    const scroll = window.scrollY;
    if (scroll > 300) {
        navbar.style.background = "#333"; // Dark color
        console.log("Background set to dark (#333) after header load"); // Debug: Confirm background change
    } else {
        navbar.style.background = "transparent"; // Light color (transparent)
        console.log("Background set to light (transparent) after header load"); // Debug: Confirm background change
    }
});

$('#footer-include').load('https://bellgreenb45.github.io/Beachy-Webshop/footer.html');