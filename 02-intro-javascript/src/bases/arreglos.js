const arreglo = [];
arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);
arreglo.push(5);

let arreglo2 = [...arreglo];
arreglo2.push(6);

let arreglo3 = arreglo2.map((x) => x * 2);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
