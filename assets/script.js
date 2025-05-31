const menuBtn = document.getElementById(`menu-btn`);
const mobileMenu = document.getElementById(`mobile-menu`)

menuBtn.addEventListener(`click`, () => {
    mobileMenu.classList.toggle(`hidden`);
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.display = "none";
  }, 1600); // Match the animation duration
});

