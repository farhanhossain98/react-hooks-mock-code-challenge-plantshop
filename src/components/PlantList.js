import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, markOutOfStock, outOfStock }) {

  const renderPlants = plants.map((plant) => {
    return <PlantCard
      key={plant.id}
      plant={plant}
      markOutOfStock={markOutOfStock}
      outOfStock={outOfStock}
    />
  })
  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
