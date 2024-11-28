const nombre = document.getElementById("name");
const empresa = document.getElementById("company");
const correo = document.getElementById("email");
const celular = document.getElementById("mobile");
const ciudad = document.getElementById("city");
const primeraVez = document.getElementById("firstTime");
const mensaje = document.getElementById("message");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nombre.value.length < 1 || nombre.value.trim() == "") {
    mostrarMensajeError("name", "Nombre no válido.");
    condicion = false;
  }
  if (empresa.value.length < 1 || empresa.value.trim() == "") {
    mostrarMensajeError("company", "Empresa no válida.");
    condicion = false;
  }
  if (correo.value.length < 1 || correo.value.trim() == "") {
    mostrarMensajeError("email", "Correo no válido.");
    condicion = false;
  }
  if (
    celular.value.length != 10 ||
    celular.value.trim() == "" ||
    isNaN(celular.value)
  ) {
    mostrarMensajeError("mobile", "Número de contacto no válido.");
    condicion = false;
  }
  if (ciudad.value.length < 1 || ciudad.value.trim() == "") {
    mostrarMensajeError("city", "Ciudad no válida.");
    condicion = false;
  }
  if (primeraVez.value.length < 1 || primeraVez.value.trim() == "") {
    mostrarMensajeError("firstTime", "Opción no válida.");
    condicion = false;
  }
  if (mensaje.value.length < 1 ||  mensaje.value.trim() == "") {
    mostrarMensajeError("message", "Mensaje no válido.");
    condicion = false;
  }
}

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

boton.addEventListener('click', () => {
  alert('Solicitud enviada correctamente. ¡Gracias por preferirnos!');
  
});