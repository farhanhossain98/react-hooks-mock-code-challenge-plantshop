import React, { useState } from "react";
const initialState = {
  name: '',
  price: '',
  image: ''
}
function NewPlantForm({ createNewPlant }) {
  const [plantForm, setPlantForm] = useState(initialState)
  function changePlantForm(event) {
    const { name, value } = event.target
    const updatePlantForm = { ...plantForm, [name]: value }
    setPlantForm(updatePlantForm)
  }
  // const changePlantFormPrice = (event) => setPlantForm({...plantForm,price:event.target.value})

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(event) => {
        createNewPlant(event, plantForm)
        setPlantForm(initialState)
      }}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          onChange={changePlantForm}
          value={plantForm.name}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={changePlantForm}
          value={plantForm.image}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          onChange={changePlantForm}
          value={plantForm.price}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
