import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchPlants, setSearchPlants] = useState('')
  const [outOfStock, setOutOfStock] = useState([])
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((r) => r.json())
      .then((plants) => setPlants(plants))
  }, [])
  function createNewPlant(event, newPlant) {
    event.preventDefault()
    newPlant.price = parseInt(newPlant.price)

    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'accepts': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
      .then((r) => r.json())
      .then((newPlantData) => setPlants([...plants, newPlantData]))
  }

  function changeSearchPlants(searchTerm) {
    setSearchPlants(searchTerm)

  }
  const filteredPlants = plants.filter((plant) => plant.name.toLowerCase().includes(searchPlants.toLowerCase()))

  function markOutOfStock(plantId) {
    setOutOfStock([...outOfStock, plantId])
  }

  return (
    <main>
      <NewPlantForm
        createNewPlant={createNewPlant}
      />
      <Search
        changeSearchPlants={changeSearchPlants}
      />
      <PlantList
        markOutOfStock={markOutOfStock}
        outOfStock={outOfStock}
        plants={filteredPlants}
      />
    </main>
  );
}

export default PlantPage;
