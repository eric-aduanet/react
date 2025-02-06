import heroes from "../data/heroes";

export const getHeroesById = (id) => {
  return heroes.find((x) => x.id === id);
};

export const getHeroesByOwner = (owner) => {
  return heroes.filter((x) => x.owner === owner);
};
// console.log(getHeroesByOwner("DC"));
