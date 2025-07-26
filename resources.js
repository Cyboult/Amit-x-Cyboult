function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

function toggleAccordion(element) {
  const body = element.nextElementSibling;
  body.style.display = body.style.display === "block" ? "none" : "block";
}