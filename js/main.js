const burger = document.getElementById("navbar-burger");
const links = document.getElementById("navbar-links");

function setMenu(open) {
  links.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
}

burger.addEventListener("click", () => setMenu(!links.classList.contains("is-open")));

links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

window.matchMedia("(min-width: 1025px)").addEventListener("change", (e) => {
  if (e.matches) setMenu(false);
});