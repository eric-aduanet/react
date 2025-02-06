const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip_code: 52124,
    lat: 32.152511,
    lng: 24.245125,
  },
};

console.table(persona);
const persona2 = { ...persona };
persona2.nombre = "Peter";
console.table(persona2);
