const quoteForm = document.querySelector(".quote-form");

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const submitButton = quoteForm.querySelector('button[type="submit"]');
    if (!submitButton) return;

    submitButton.textContent = "Quote Request Sent";
    submitButton.disabled = true;
    submitButton.style.opacity = "0.85";

    const confirmation = document.createElement("p");
    confirmation.className = "form-note full-width";
    confirmation.textContent =
      "Thanks. Our Tampa Bay team will contact you within one business day.";
    quoteForm.appendChild(confirmation);
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
