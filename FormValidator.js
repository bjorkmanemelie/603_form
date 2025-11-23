export class FormValidator {
  constructor(formId) {
    // get the elements
    this.form = document.querySelector(formId);
    this.msg = document.querySelector("#msg");
    this.nameInput = document.querySelector("#name");
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");

    this.init();
  }

  init() {
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Submit");
  }
}
