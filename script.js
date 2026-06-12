const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const measureForm = document.querySelector("[data-measure-form]");
const whatsappUrl = "https://wa.me/60195763499";

const updateHeader = () => {
  if (header) {
    header.classList.toggle("is-scrolled", window.scrollY > 16 || document.body.classList.contains("subpage-body"));
  }
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if (navToggle && nav && header) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    header.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      header.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (measureForm) {
  measureForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(measureForm);
    const message = [
      "Hi Eco Screen, I want to ask about mosquito screen.",
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Area: ${data.get("area")}`,
      `Product: ${data.get("product")}`,
      `Details: ${data.get("message") || "No extra details yet."}`
    ].join("\n");

    window.open(`${whatsappUrl}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
}
