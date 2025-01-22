import React from "react";

const Card = ({ name, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
    </div>
  );
};

export default Card;
