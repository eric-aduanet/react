const saludar = function (nombre) {
  return "Hola, " + nombre;
};

const saludar2 = (nombre) => "Hola, " + nombre;
const saludar3 = () => "Hola, mundo";

const getUser = () => {
  return {
    uid: "ABC2024",
    username: "ElPapi_1502",
  };
};

console.log(saludar("Eric"));
console.log(saludar2("Goku"));
console.log(saludar3());
console.log(getUser());

const getActiveUser = (nombre) => ({
  uid: "ABC123",
  username: nombre,
});

console.log(getActiveUser("Eric"));
