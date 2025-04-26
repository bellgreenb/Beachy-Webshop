document.addEventListener("DOMContentLoaded", () => {
    // Load header
    fetch('/Beachy-Webshop/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-include").innerHTML = data;
            console.log("Header loaded successfully");
            applyNavbarScrollEffect(); // Ensure navbar effect works after header is loaded
        })
        .catch(error => console.error("Error loading header:", error));

    // Load footer
    fetch('/Beachy-Webshop/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-include").innerHTML = data;
            console.log("Footer loaded successfully");
        })
        .catch(error => console.error("Error loading footer:", error));

    // Scroll effect function
    function applyNavbarScrollEffect() {
        window.addEventListener("scroll", () => {
            const scroll = window.scrollY;
            const navbar = document.querySelector(".navbar");
            if (scroll > 300) {
                navbar.style.background = "#333"; // Dark color
                console.log("Background set to dark (#333)");
            } else {
                navbar.style.background = "transparent"; // Light color
                console.log("Background set to light (transparent)");
            }
        });
    }
});