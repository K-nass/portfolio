const dropDown = document.querySelector("nav ul")
const menuBtn = document.getElementById("menu_icon");
menuBtn.addEventListener("click", function () {
    dropDown.classList.toggle("show")
})
window.onclick = function (e) {
    if (!menuBtn.contains(e.target) && !dropDown.contains(e.target)) {
        dropDown.classList.remove("show");
    }
};

const scrollBtn = document.getElementById("scroll_btn");
window.addEventListener("scroll", scrollFunction);
function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block"
    } else {
        scrollBtn.style.display = "none"
    }
}

scrollBtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
})