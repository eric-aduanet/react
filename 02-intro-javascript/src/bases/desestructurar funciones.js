const personajes = ["Goku", "Vegeta", "Trunks"];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [, , p1] = personajes;

console.log(p1);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const arr = retornaArreglo();
const [letras, numeros] = arr;
console.log(letras, numeros);

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola, mundo!");
    },
  ];
};

const [nombre, setNombre] = useState("Eric");
console.log(nombre);
setNombre();
