// togle class active
const navbarNav = document.querySelector(".navbar-nav");
// saat menu di klik
document.querySelector("#menu1").onclick = () => {
  navbarNav.classList.toggle("active");
};

// saat mengklik di lain tempat menghilang navbar
const hamburger = document.querySelector("#menu1");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
