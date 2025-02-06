const nombre = "Eric";
const apellido = "Fernandez";
const nombreCompleto = nombre + " " + apellido;
console.log(getSaludo(nombreCompleto));

function getSaludo(nombre) {
  return "Hola " + nombre;
}
