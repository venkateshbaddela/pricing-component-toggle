"use strict";

const toggleBtn = document.querySelector(".header-toggle__btn");
const mains = document.querySelectorAll(".main-box");

const main = [...mains];

const yearPrices = [199.99, 249.99, 399.99];
const monthPrices = [19.99, 24.99, 39.99];

toggleBtn.classList.remove("active-btn");

const displayPlan = function ([...values]) {
  console.log(values);
  main.forEach((el, i) => {
    el.children[1].textContent = `$${values[i]}`;
  });
};

toggleBtn.addEventListener("click", function (e) {
  if (e.target.classList.contains("active-btn")) {
    e.target.classList.remove("active-btn");
    displayPlan(monthPrices);
  } else {
    e.target.classList.add("active-btn");
    displayPlan(yearPrices);
  }
});
