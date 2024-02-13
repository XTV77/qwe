const sheet = document.querySelector(".sheet");

function showBox() {
  sheet.style.transform = "rotate(-65deg)";
}
function hideBox() {
  sheet.style.transform = "rotate(0deg)";
}

function showNavbar() {
  const navbar = document.querySelector(".side-navbar__onClick");
  navbar.classList.toggle("side-navbar__onClick-show");
}
function showOverlay() {
  const overlay = document.querySelector(".overlay");
  overlay.style.visibility = "visible";
  const overlay_container = document.querySelector(".overlay__container");
  overlay_container.style.width = "80%";
  overlay_container.style.height = "80%";
}
