import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokemonDetailFetch } from "../../store/pokemon/thunks";
import "./pokemon-detail.css";

interface Pokemon {}

const PokemonDetail = ({ pokemon }: any) => {
  const dispatch = useDispatch();
  const details = useSelector((state: any) => state.pokemon.details);
  const [pokeDetail, setPokeDetail] = useState<any>({});

  useEffect(() => {
    dispatch(pokemonDetailFetch(pokemon.url));
  }, []);

  useEffect(() => {
    if (details.length > 0) {
      setPokeDetail(
        details.find((detail: any) => detail.name === pokemon.name)
      );
    }
  }, [details]);

  return pokeDetail ? (
    <div className="card">
      <div className="row">
        <div className="col-md-2 poke-img-wrapper">
          <img
            src={`${pokeDetail.sprites?.front_default}`}
            alt={pokeDetail.name}
          />
          <div className="col">{pokeDetail.name}</div>
        </div>
        <div className="col-10">
          {pokeDetail.stats?.map((stat: any) => {
            return (
              <div className="row">
                <div className="col-2">
                  <div>{stat.stat.name}</div>
                </div>
                <div className="col-10">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{width:`${stat.base_stat}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ) : null;
};

export default PokemonDetail;
