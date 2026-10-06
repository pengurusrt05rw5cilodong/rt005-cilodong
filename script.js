const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const toast = document.getElementById("toast");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

let toastTimer;
document.querySelectorAll("[data-toast]").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    toast.textContent = el.dataset.toast;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
