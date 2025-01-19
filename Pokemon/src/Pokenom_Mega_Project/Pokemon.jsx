import React, { useState, useEffect } from "react";
import "./pokemon.css";

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const url = "https://pokeapi.co/api/v2/pokemon?limit=300";

  const getPokemonData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      const pokemondata = data.results.map(async (currData) => {
        const res = await fetch(currData.url);
        const data = await res.json();
        return data;
      });

      const ResponseData = await Promise.all(pokemondata);
      console.log(ResponseData);
      setPokemon(ResponseData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  const findData = pokemon.filter((curData) =>
    curData.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <div className="loading-circle"></div>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <header>
        <h1>Let's Get Pokemon</h1>
        <hr />
      </header>
      <div>
        <input
          type="text"
          name="Userinput"
          placeholder="Search a Anime"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="card">
        {findData.map((data) => {
          return (
            <div className="container" key={data.id}>
              <img
                src={data.sprites.other.dream_world.front_default}
                alt={data.name}
              />
              <h1>{data.name}</h1>
              <div className="ItemName">
                <span>
                  {data.types.map((Item) => Item.type.name).join(" ")}
                </span>
              </div>
              <div className="detail">
                <p>
                  Height:
                  <span>
                    <b>{data.height}</b>
                  </span>
                </p>
                <p>
                  Weight:
                  <span>
                    <b>{data.weight}</b>
                  </span>
                </p>
                <p>
                  Speed:
                  <span>
                    <b>{data.stats[3].base_stat}</b>
                  </span>
                </p>
                <p>
                  Experience:
                  <span>
                    <b>{data.base_experience}</b>
                  </span>
                </p>
                <p>
                  game Index:
                  <span>
                    <b>{data.game_indices[1].game_index}</b>
                  </span>
                </p>
                <p>{data.abilities.map((data) => data.ability.name)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Pokemon;
