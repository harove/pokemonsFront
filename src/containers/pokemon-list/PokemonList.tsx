import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokemonFetch } from "../../store/pokemon/thunks";
import PokemonDetail from "../pokemon-detail/PokemonDetail";

const PokemonList = () => {
  const dispatch = useDispatch();
  const { results: pokemons } = useSelector((state: any) => state.pokemon.data);
  const { isLoading } = useSelector((state: any) => state.pokemon);

  const pokeSort = () => {
    return pokemons.sort((pokeA: any, pokeB: any) => {
      return pokeA.name > pokeB.name ? 1 : -1;
    });
  };

  useEffect(() => {
    if (isLoading === "iddle") dispatch(pokemonFetch());
  }, []);

  return (
    <div>
      {pokemons &&
        pokemons.length > 0 &&
        pokeSort().map((pokemon: any) => (
          <PokemonDetail key={pokemon.url} pokemon={pokemon} />
        ))}
    </div>
  );
};

export default PokemonList;
