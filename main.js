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
      emailInput.classList.add("invalid", "true");
      emailInput.setAttribute("aria-invalid", "true");
    }

    if (!passwordInput.value.trim()) {
      passwordInput.classList.add("invalid");
      passwordInput.setAttribute("aria-label", "true");
    }

    console.log("An empty field!");
  } else {
    msg.className = "success";
    msg.textContent = "Thank you for your registration! ✅ ";

    form.reset();
  }
});

console.log("The form has been send!");

console.log(nameInput, emailInput, passwordInput);
