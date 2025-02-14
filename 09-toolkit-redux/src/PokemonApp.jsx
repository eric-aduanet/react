import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const { isLoading, pokemons, page } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);
  return (
    <>
      <h1>PokemonApp</h1>
      <span>Loading: {isLoading ? "True" : "False"}</span>
      <hr />
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          dispatch(getPokemons(page));
        }}
      >
        Next
      </button>
    </>
  );
};
