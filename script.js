const dropDown = document.querySelector("nav ul")
const menuBtn = document.getElementById("menu_icon");
menuBtn.addEventListener("click", function() {
    dropDown.classList.toggle("show")
})