const blankSpace = /\s/; // Espacio en blanco
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i; // Email válido
const regexLetters = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/; // Solo letras

export default function validations(values) {
  const errors = {};

  /* NAME */
  if (!values.name) {
    errors.name = "Enter a name";
    errors.nombre = "Ingrese un nombre";
  }
  if (values.name && values.name.length > 30) {
    errors.name = "Should not be more than 30 characters";
    errors.nombre = "No debe tener más de 30 carácteres";
  }
  if (values.name && values.name && !regexLetters.test(values.name)) {
    errors.name = "Should not contain numbers or symbols";
    errors.nombre = "No debe contener números ni símbolos";
  }
  if (values.name && values.name.length < 3) {
    errors.name = "It must not be less than 3 characters";
    errors.nombre = "No debe tener menos de 3 carácteres";
  }

  /* EMAIL */
  if (!values.email) {
    errors.email = "Enter a email";
    errors.correo = "Ingrese un correo electrónico";
  }
  if (values.email && blankSpace.test(values.email)) {
    errors.email = "Should not contain a blank space";
    errors.correo = "No debe contener un espacio en blanco";
  }
  if (values.email && !regexEmail.test(values.email)) {
    errors.email = "It must be a valid email";
    errors.correo = "Debe ser un email válido";
  }

  /* SUBJECT */
  if (!values.subject) {
    errors.subject = "Enter a subject";
    errors.asunto = "Ingrese un asunto";
  }
  if (values.subject && values.name.length > 30) {
    errors.subject = "Should not be more than 30 characters";
    errors.asunto = "No debe tener más de 30 carácteres";
  }
  if (values.subject && values.subject.length < 3) {
    errors.subject = "It must not be less than 3 characters";
    errors.asunto = "No debe tener menos de 3 carácteres";
  }

  /* MESSAGE */
  if (!values.message) {
    errors.message = "Enter a message";
    errors.mensaje = "Ingrese un mensaje";
  }

  if (values.message && values.message.length > 51) {
    errors.message = "Should not be more than 50 characters";
    errors.mensaje = "No debe tener más de 50 carácteres";
  }

  return errors;
}
