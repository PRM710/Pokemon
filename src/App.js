import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import CardContainer from "./components/CardContainer";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150");
        const results = res.data.results;


        const pokemonData = await Promise.all(
          results.map(async (pokemon) => {
            const detail = await axios.get(pokemon.url);
            return {
              name: pokemon.name,
              image: detail.data.sprites.front_default,
            };
          })
        );
        setPokemons(pokemonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Pokémon Search</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CardContainer pokemons={filteredPokemons} />
    </div>
  );
}

export default App;
