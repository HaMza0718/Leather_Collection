// For_Navbar
let navToggler = document.querySelector(".nav-toggler");
// console.log(navToggler);
navToggler.addEventListener("click", togggleNav);

function togggleNav() {
  navToggler.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
}
document.addEventListener("click", function (e) {
  if (e.target.closest(".nav-items")) {
    togggleNav();
  }
});

// Sticky_Header
window.addEventListener("scroll", function () {
  if (this.pageYOffset > 70) {
    document.querySelector(".header").classList.add("sticky");
  } else {
    document.querySelector(".header").classList.remove("sticky");
  }
});
