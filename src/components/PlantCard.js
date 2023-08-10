import React from "react";

function PlantCard({ plant, markOutOfStock, outOfStock }) {
  const { id, name, price, image } = plant
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {!outOfStock.includes(id) ? (
        <button className="primary"
          onClick={() => markOutOfStock(id)}
        >In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
