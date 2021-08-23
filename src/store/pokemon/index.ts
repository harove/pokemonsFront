import {
  POKEMON_FETCH_STARTED,
  POKEMON_FETCH_SUCCEDED,
  POKEMON_DETAIL_FETCH_STARTED,
  POKEMON_DETAIL_FETCH_SUCCEDED,
} from "../constants";

const initialState = {
  data: { results: [] },
  details: [],
  isLoading: 'iddle',
  fetchSuccessfull: false,
  fetchFailed: false,
};

const pokemonReducer = (
  prevState = initialState,
  action: { payload: any; type: string }
) => {
  switch (action.type) {
    case POKEMON_FETCH_STARTED:
      return {
        ...prevState,
        isLoading: 'loading',
      };
    case POKEMON_FETCH_SUCCEDED:
      return {
        ...prevState,
        isLoading: 'succeeded',
        fetchSuccessfull: true,
        fetchFailed: false,
        data: action.payload,
      };
    case POKEMON_DETAIL_FETCH_STARTED:
      return {
        ...prevState,
        isLoading: 'loading',
      };
    case POKEMON_DETAIL_FETCH_SUCCEDED:
      return {
        ...prevState,
        isLoading: 'succeeded',
        fetchSuccessfull: true,
        fetchFailed: false,
        details: action.payload,
      };
    default:
      return prevState;
  }
};
export default pokemonReducer;
