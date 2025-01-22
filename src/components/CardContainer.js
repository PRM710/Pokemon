import React from "react";
import Card from "./Card";

const CardContainer = ({ pokemons }) => {
  return (
    <div className="card-container">
      {pokemons.map((pokemon, index) => (
        <Card key={index} name={pokemon.name} image={pokemon.image} />
      ))}
    </div>
  );
};

export default CardContainer;
