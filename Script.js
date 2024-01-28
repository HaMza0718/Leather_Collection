// For_Navbar
let navToggler = document.querySelector(".nav-toggler");
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

// ForCollection
let allBox = document.querySelectorAll(".card .box");
let AllBtn = document.querySelectorAll(".collection-tabs button");

AllBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target);
    let category = e.target.getAttribute("data-category");
    console.log(category);
    if (category == "all") {
      showBox(allBox);
    } else {
      let filterBoxes = [];
      allBox.forEach((box) => {
        console.log(box);
        hideBoxes();
        if (box.getAttribute("data-category") == category) {
          filterBoxes.push(box);
        }
        showBox(filterBoxes);
      });
    }
  });
});

function hideBoxes() {
  allBox.forEach((box) => {
    box.classList.add("hide");
  });
}
function showBox(boxList) {
  boxList.forEach((box) => {
    box.classList.remove("hide");
  });
}

let Tabs = document.querySelector(".collection-tabs");
Tabs.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("collection-tab-item") &&
    !e.target.classList.contains("active")
  ) {
    let target = e.target.getAttribute("data-target");
    Tabs.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  }
});
