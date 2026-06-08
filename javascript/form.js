const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  try {
    await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    // Reset form
    form.reset();

    // Show animation
    status.classList.remove("hidden");
    status.classList.add("show");

    // Hide after 3 seconds
    setTimeout(() => {
      status.classList.remove("show");
      status.classList.add("hidden");
    }, 3000);
  } catch (error) {
    alert("Noget gik galt. Prøv igen.");
  }
});
