import {
  POKEMON_FETCH_FAILED,
  POKEMON_FETCH_STARTED,
  POKEMON_FETCH_SUCCEDED,
  POKEMON_DETAIL_FETCH_FAILED,
  POKEMON_DETAIL_FETCH_STARTED,
} from "../constants";
import { pokemonDetailFetchSucceded } from "./actions";

export const pokemonFetch = () => {
  return (dispatch: any) => {
    dispatch({
      type: POKEMON_FETCH_STARTED,
    });
    try {
      fetch("http://localhost:3005/pokemon/pokemons", {
        method: "GET",
        mode: "cors",
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

export const pokemonDetailFetch = (url: any) => {
  return (dispatch: any) => {
    dispatch({
      type: POKEMON_DETAIL_FETCH_STARTED,
    });
    try {
      fetch(url, {
        method: "GET",
        mode: "cors",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          dispatch(pokemonDetailFetchSucceded(data));
        });
    } catch {
      dispatch({
        type: POKEMON_DETAIL_FETCH_FAILED,
      });
    }
  };
};
