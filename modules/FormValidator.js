export class FormValidator {
  constructor(formId) {
    // Get element
    this.form = document.querySelector(formId);
    this.msg = document.querySelector("#msg");
    this.nameInput = document.querySelector("#name");
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");

    // Start event listeners
    this.init();
  }

  init() {
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  clearValidation() {
    this.nameInput.classList.remove("valid", "invalid");
    this.emailInput.classList.remove("valid", "invalid");
    this.passwordInput.classList.remove("valid", "invalid");
    this.msg.className = "";
    this.msg.textContent = "";
  }

  markAsInvalid(input) {
    input.classList.add("invalid");
    input.setAttribute("aria-invalid", "true");
  }

  markAsValid(input) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    input.setAttribute("aria-invalid", "false");
  }

  handleSubmit(e) {
    e.preventDefault();

    this.clearValidation();

    this.msg.className = "";
    this.msg.textContent = "";

    if (
      !this.nameInput.value.trim() ||
      !this.emailInput.value.trim() ||
      !this.passwordInput.value.trim()
    ) {
      this.msg.className = "error";
      this.msg.textContent = "❌ All fields must be added.";

      if (!this.nameInput.value.trim()) {
        this.markAsInvalid(this.nameInput);
      }

      if (!this.emailInput.value.trim()) {
        this.markAsInvalid(this.emailInput);
      }

      if (!this.passwordInput.value.trim()) {
        this.markAsInvalid(this.passwordInput);
      }
    } else {
      this.msg.className = "success";
      this.msg.textContent = "Thank you for your registration! ✅";

      this.markAsValid(this.nameInput);

      this.markAsValid(this.emailInput);

      this.markAsValid(this.passwordInput);

      this.form.reset();
    }
  }
}
