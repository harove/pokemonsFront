import {
  POKEMON_FETCH_FAILED,
  POKEMON_FETCH_STARTED,
  POKEMON_FETCH_SUCCEDED,
} from "../constants";

export const pokemonFetch = () => {
  return (dispatch: any) => {
    dispatch({
      type: POKEMON_FETCH_STARTED,
    });
    try {
      fetch("http://localhost:3005/pokemon/pokemons", {
        method: "GET",
        mode:'cors'
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          dispatch({
            type: POKEMON_FETCH_SUCCEDED,
            payload: data,
          });
        });
    } catch {
      dispatch({
        type: POKEMON_FETCH_FAILED,
      });
    }
  };
};
