const nombre = $("nombre")
const apellido = $("apellido")
const edad = $("edad")
const altura = $("altura")
const mail = $("mail")

 formulario.addEventListener("submit", (event) => {
    event.preventDefault(); 
    
    mensaje.style.color = "red";
    
    if (formulario["nombre"].value === "") {
        mensaje.textContent = "Nombre vacio";
    } else if (formulario["apellido"].value === "") {
        mensaje.textContent = "Apellido vacio";
    } else if (formulario["edad"].value === "") {
        mensaje.textContent = "La edad esta vacia";
    } else if (formulario["edad"].value < 0) {
        mensaje.textContent = "La edad es negativa";
    } else if (formulario["edad"].value < 18) {
        mensaje.textContent = "No se puede enviar menor de edad";
    } else if (formulario["altura"].value === "") {
        mensaje.textContent = "La altura esta vacia";
    } else if (formulario["altura"].value <= 0) {
        mensaje.textContent = "La altura no puede ser negativa o '0'";
    } else if (formulario["altura"].value > 230) {
        mensaje.textContent = "La altura no puede ser mayor a 230 cm";
    } else if (formulario["mail"].value === "") {
        mensaje.textContent = "Correo electronico vacio";
    } else if (!formulario["mail"].value.includes("@")) {
        mensaje.textContent = "Debe contener una '@' al menos...";
    } else {
        mensaje.textContent = "Todos los datos son correctos";
        mensaje.style.color = "green";
    }
});


function $(elemento) {
  return document.getElementById(elemento);
}
