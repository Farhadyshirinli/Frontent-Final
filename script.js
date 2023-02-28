const navBar = document.querySelector(".navigation--bar");

window.addEventListener("scroll", function scroll() {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 200) {
    navBar.classList.add("navBarOnScroll");
  } else if (currentScrollPos < 200) {
    navBar.style.transition = "0.3s";
    navBar.classList.remove("navBarOnScroll");
  }
});

jQuery(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});

let secondPage = document.querySelector(".second--page");
// let currentScroll;

const mouseIcon = document.querySelector(".mouse--icon");
window.addEventListener("click", function () {
  this.window.scrollTo(0, 650);
});
