import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];
  if (!validPublishers.includes(publisher)) {
    throw new Error(publisher + " does not exist in the valid publishers list");
  }
  return heroes.filter((hero) => hero.publisher === publisher);
};
