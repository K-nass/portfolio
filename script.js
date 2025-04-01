const dropDown = document.querySelector("nav ul")
const menuBtn = document.getElementById("menu_icon");
menuBtn.addEventListener("click", function() {
    dropDown.classList.toggle("show")
})
window.onclick = function(e) {
    if (!menuBtn.contains(e.target) && !dropDown.contains(e.target)) {
        dropDown.classList.remove("show");
    }
};
