// food menu
// ? Note I have to use var instead of let and also use fucntion instead of arrow fucntion
const menuBtns = document.querySelectorAll(".menu-btn");
const foodItems = document.querySelectorAll(".food-item");

var activeBtn = "featured";

showFoodMenu(activeBtn);

menuBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    resetActiveBtn();
    showFoodMenu(btn.id);
    btn.classList.add("active-btn");
  });
});

function resetActiveBtn() {
  menuBtns.forEach(function (btn) {
    btn.classList.remove("active-btn");
  });
}

function showFoodMenu(newMenuBtn) {
  activeBtn = newMenuBtn;
  foodItems.forEach(function (item) {
    if (item.classList.contains(activeBtn)) {
      item.style.display = "grid";
    } else {
      item.style.display = "none";
    }
  });
}
