const form = document.querySelector("#registrationForm");

const msg = document.querySelector("#msg");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    !nameInput.value.trim() ||
    !emailInput.value.trim() ||
    !passwordInput.value.trim()
  ) {
    msg.className = "error";
    msg.textContent = "❌ All fields must be added. ";

    if (!nameInput.value.trim()) {
      nameInput.classList.add("invalid");
      nameInput.setAttribute("aria-invalid", "true");
    }

    if (!emailInput.value.trim()) {
      emailInput.classList.add("invalid");
      emailInput.setAttribute("aria-invalid", "true");
    }

    if (!passwordInput.value.trim()) {
      passwordInput.classList.add("invalid");
      passwordInput.setAttribute("aria-invalid", "true");
    }

    console.log("An empty field!");
  } else {
    msg.className = "success";
    msg.textContent = "Thank you for your registration! ✅ ";

    nameInput.classList.add("valid");
    nameInput.classList.remove("invalid");
    nameInput.setAttribute("aria-invalid", "false");

    emailInput.classList.add("valid");
    emailInput.classList.remove("invalid");
    emailInput.setAttribute("aria-invalid", "false");

    passwordInput.classList.add("valid");
    passwordInput.classList.remove("invalid");
    passwordInput.setAttribute("aria-invalid", "false");

    form.reset();
  }
});
