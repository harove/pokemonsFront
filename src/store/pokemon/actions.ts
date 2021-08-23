import {
  POKEMON_FETCH_FAILED,
  POKEMON_FETCH_STARTED,
  POKEMON_FETCH_SUCCEDED,
  POKEMON_DETAIL_FETCH_FAILED,
  POKEMON_DETAIL_FETCH_STARTED,
  POKEMON_DETAIL_FETCH_SUCCEDED,
} from "../constants";

import store from "../index";

export const pokemonDetailFetchSucceded = (data: any) => {
  const { pokemon } = store.getState();
  const test = [...pokemon.details, data];
  return {
    type: POKEMON_DETAIL_FETCH_SUCCEDED,
    payload: [...pokemon.details, data],
  };
};
