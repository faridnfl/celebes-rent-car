const menuToggleButton = document.getElementById("menu-toggle-button");
const navbarList = document.querySelector(".headerkedua-navbar ul");

menuToggleButton.addEventListener("click", function() {
    if (navbarList.style.display === "none" || navbarList.style.display === "") {
        navbarList.style.display = "block";
    } else {
        navbarList.style.display = "none";
    }
});