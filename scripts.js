const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.onclick = () => {
    navLinks.classList.toggle("active");
};
document.querySelectorAll(".nav-links a").forEach(link => {
    link.onclick = () => navLinks.classList.remove("active");
});