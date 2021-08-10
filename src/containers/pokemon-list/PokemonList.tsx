import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokemonFetch } from "../../store/pokemon/actions";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state: any) => state.pokemon.data.results);

  useEffect(() => {
    dispatch(pokemonFetch());
  }, []);

  return (
    <div>
      {pokemons &&
        pokemons.length > 0 &&
        pokemons.map((pokemon: any) => {
          return (
            <div className="card">
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col">{pokemon.name}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default PokemonList;
