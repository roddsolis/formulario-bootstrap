document.addEventListener("DOMContentLoaded", function () {
  let payForm = document.querySelector("#payForm");

  // Función para desactivar estilos rojos
  function resetErrorStyles() {
    let feedbackMessage = document.querySelector(".alert");
    let cardSelection = document.querySelector(".cardSelection");
    let inputs = payForm.elements;

    Array.from(inputs).forEach((element) => {
      element.classList.remove("is-invalid");
    });

    feedbackMessage.classList.remove("alert-danger");
    cardSelection.classList.remove("border-danger");
  }

  // Desactivar estilos rojos al enfocar un campo de entrada
  Array.from(payForm.elements).forEach((element) => {
    element.addEventListener("focus", resetErrorStyles);
  });

  payForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    let feedbackMessage = document.querySelector(".alert");
    let cardSelection = document.querySelector(".cardSelection");
    let inputs = e.target.elements;

    // 1. No dejar enviar el formulario si no están todos los campos llenos
    let emptyFields = Array.from(inputs).filter((element) => {
      return (element.type !== "submit" && element.value.trim() === "") || (element.type === "radio" && !element.checked);
    });

    if (emptyFields.length > 0) {
      emptyFields.forEach((element) => {
        element.classList.add("is-invalid");
      });

      feedbackMessage.classList.add("alert-danger");
      cardSelection.classList.add("border-danger");

      return;
    }

    // 2. Validar el campo de correo electrónico para que sea un correo válido
    let emailInput = inputs["email"];
    let isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);

    if (!isEmailValid) {
      emailInput.classList.add("is-invalid");
      feedbackMessage.classList.add("alert-danger");
      cardSelection.classList.add("border-danger");
      return;
    }

    // 3. Validar el campo de nombres y apellidos para que acepten solo letras
    let nameInput = inputs["name"];
    let lastNameInput = inputs["lastName"];
    let isNameValid = /^[a-zA-Z\s]+$/.test(nameInput.value);
    let isLastNameValid = /^[a-zA-Z\s]+$/.test(lastNameInput.value);

    if (!isNameValid || !isLastNameValid) {
      if (!isNameValid) {
        nameInput.classList.add("is-invalid");
      }
      if (!isLastNameValid) {
        lastNameInput.classList.add("is-invalid");
      }

      feedbackMessage.classList.add("alert-danger");
      cardSelection.classList.add("border-danger");

      return;
    }

    // Restablecer estilos en caso de éxito
    resetErrorStyles();

    // Resto de la lógica de envío del formulario
  });

  // Desactivar estilos rojos al cambiar la selección de un radio button
  payForm.addEventListener("change", function (e) {
    if (e.target.type === "radio") {
      let radioButtons = Array.from(payForm.querySelectorAll('input[name="exampleRadios"]'));
      let isAnyRadioButtonChecked = radioButtons.some((radio) => radio.checked);

      if (isAnyRadioButtonChecked) {
        resetErrorStyles();
      }
    }
  });
});
