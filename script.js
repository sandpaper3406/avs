const quoteForm = document.querySelector(".quote-form");

if (quoteForm) {
  quoteForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = quoteForm.querySelector('button[type="submit"]');
    if (!submitButton) return;

    const formAction = quoteForm.getAttribute("action") || "";
    const existingNotice = quoteForm.querySelector(".form-submit-note");
    if (existingNotice) existingNotice.remove();

    if (formAction.includes("your_form_id")) {
      const setupNotice = document.createElement("p");
      setupNotice.className = "form-note full-width form-submit-note";
      setupNotice.textContent =
        "Setup required: replace 'your_form_id' with your real Formspree form ID.";
      quoteForm.appendChild(setupNotice);
      return;
    }

    submitButton.textContent = "Sending...";
    submitButton.disabled = true;
    submitButton.style.opacity = "0.85";

    const formData = new FormData(quoteForm);

    try {
      const response = await fetch(formAction, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) throw new Error("Request failed");

      quoteForm.reset();
      submitButton.textContent = "Quote Request Sent";

      const confirmation = document.createElement("p");
      confirmation.className = "form-note full-width form-submit-note";
      confirmation.textContent =
        "Thanks. Our Tampa Bay team will contact you within one business day.";
      quoteForm.appendChild(confirmation);
    } catch (error) {
      submitButton.textContent = "Request My Quote";
      submitButton.disabled = false;
      submitButton.style.opacity = "1";

      const errorNote = document.createElement("p");
      errorNote.className = "form-note full-width form-submit-note";
      errorNote.textContent =
        "We could not submit your request right now. Please try again.";
      quoteForm.appendChild(errorNote);
    }
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
