// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});

// food menu
const menuBtns = document.querySelectorAll(".menu-btn");
const foodItems = document.querySelectorAll(".food-item");

var activeBtn = "featured";

showFoodMenu(activeBtn);

menuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    resetActiveBtn();
    showFoodMenu(btn.id);
    btn.classList.add("active-btn");
  });
});

function resetActiveBtn() {
  menuBtns.forEach((btn) => {
    btn.classList.remove("active-btn");
  });
}

function showFoodMenu(newMenuBtn) {
  activeBtn = newMenuBtn;
  foodItems.forEach((item) => {
    if (item.classList.contains(activeBtn)) {
      item.style.display = "grid";
    } else {
      item.style.display = "none";
    }
  });
}
