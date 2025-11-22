const form = document.querySelector("#registrationForm");

const msg = document.querySelector("#msg");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  msg.className = "error";
  msg.textContent = "❌ All fields must be added. ";

  if (
    !nameInput.value.trim() ||
    !emailInput.value.trim() || 
    !passwordInput.value.trim()
  ) {
    console.log("An empty field!");
  } else {
    msg.className = "success";
    msg.textContent = "Thank you for your registration! ✅ ";

    form.reset();
  }
});

console.log("The form has been send!");

console.log(nameInput, emailInput, passwordInput);
