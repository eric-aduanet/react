import { getHeroesById, getHeroesByOwner } from "./bases/exportaciones";

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroesById(2);
    resolve(heroe);
  }, 2000);
});

// promesa
//   .then((heroe) => {
//     console.log("heroe", heroe);
//   })
//   .catch((error) => console.log(error));
const getHeroesByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroesById(id);
      resolve(heroe);
    }, 2000);
  });
};

getHeroesByIdAsync(1).then(console.log).catch(console.warn);
