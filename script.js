const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-nav-toggle]");
const quoteForm = document.querySelector("[data-quote-form]");

if (nav && toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(quoteForm);
    const message = [
      "Hi Eco Screen, I want to book a free site measurement.",
      "",
      `Name: ${data.get("name")}`,
      `Area: ${data.get("area")}`,
      `Product: ${data.get("product")}`,
      `Frame Colour: ${data.get("colour")}`,
      `Message: ${data.get("message") || "I will send photos on WhatsApp."}`
    ].join("\n");
  if (typeof gtag === "function") {
    gtag("event", "conversion", {
      send_to: "AW-749395536/8qN4CIDPh8McENC8q-UC"
    });
  }

  window.open(`https://wa.me/60195763499?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
}

// Google Ads conversion tracking for WhatsApp and phone link clicks
document.addEventListener("click", function (event) {
  if (!event.target || !event.target.closest) return;

  var link = event.target.closest("a");
  if (!link) return;

  var href = (link.getAttribute("href") || "").toLowerCase();

  if (
    href.includes("wa.me") ||
    href.includes("api.whatsapp.com") ||
    href.includes("whatsapp.com") ||
    href.startsWith("tel:")
  ) {
    if (typeof gtag === "function") {
      gtag("event", "conversion", {
        send_to: "AW-749395536/8qN4CIDPh8McENC8q-UC"
      });
    }
  }
});
