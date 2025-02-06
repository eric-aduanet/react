const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

const { nombre, edad, clave } = persona;
// console.log(nombre);
// console.log(edad);
// console.log(clave);

const getContext = ({ nombre, edad }) => {
  //   console.log(nombre);
  //   console.log(edad);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 32.51251,
      lng: 24.15252,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = getContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
