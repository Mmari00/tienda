function validateForm() {
  const name = document.getElementById("name");
  const company = document.getElementById("company");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const city = document.getElementById("city");
  const first = document.getElementById("first");
  const message1 = document.getElementById("message1");

  let isValid = true;

  clearErrors();

  if (name.value.trim() === "") {
    showError(name, "El nombre completo es obligatorio");
    isValid = false;
  } else if (name.value.length < 3 || name.value.length > 100) {
    showError(name, "El nombre debe tener entre 3 y 100 caracteres");
    isValid = false;
  }

  if (company.value.trim() !== "" && (company.value.length < 3 || company.value.length > 100)) {
    showError(company, "La empresa debe tener entre 3 y 100 caracteres");
    isValid = false;
  }

  if (phone.value.trim() === "") {
    showError(phone, "El número de contacto es obligatorio");
    isValid = false;
  } else if (phone.value.length < 3 || phone.value.length > 100) {
    showError(phone, "El número de contacto debe tener entre 3 y 100 caracteres");
    isValid = false;
  }

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.trim() === "") {
    showError(email, "El correo electrónico es obligatorio");
    isValid = false;
  } else if (!emailRegex.test(email.value)) {
    showError(email, "El correo electrónico no tiene un formato válido");
    isValid = false;
  }

  if (city.value.trim() === "") {
    showError(city, "La ciudad es obligatoria");
    isValid = false;
  } else if (city.value.length < 3 || city.value.length > 100) {
    showError(city, "La ciudad debe tener entre 3 y 100 caracteres");
    isValid = false;
  }

  if (first.value.trim() === "") {
    showError(first, "Campo obligatorio");
    isValid = false;
  } else if (first.value.trim().toLowerCase() !== "sí" && first.value.trim().toLowerCase() !== "no") {
    showError(first, "Solo se acepta 'Sí' o 'No'");
    isValid = false;
  }

  if (message1.value.trim() === "") {
    showError(message1, "El mensaje es obligatorio");
    isValid = false;
  } else if (message1.value.length < 3 || message1.value.length > 100) {
    showError(message1, "El mensaje debe tener entre 3 y 100 caracteres");
    isValid = false;
  }

  return isValid;
}

function showError(input, message) {
  const error = document.createElement('span');
  error.classList.add('error-message');
  error.textContent = message;
  input.parentNode.insertBefore(error, input.nextSibling);
}

function clearErrors() {
  const errors = document.querySelectorAll('.error-message');
  errors.forEach(error => {
    error.remove();
  });
}


boton.addEventListener('click', () => {
alert('Solicitud enviada correctamente. ¡Gracias por preferirnos!');
  
});