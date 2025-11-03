import React, { useState } from 'react'

export default function CheckBox() {
  let [vehicle, setVehicle] = useState([]);
  function selection(e) {
    const { value, checked } = e.target;
    if (checked) {
      setVehicle([...vehicle, value]);
    } else {
      setVehicle(vehicle.filter(v => v !== value));
    }
  }
  return (
    <>
      <div>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onChange={selection}/>
        <label htmlFor="vehicle1"> I have a bike</label><br/>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" onChange={selection}/>
        <label htmlFor="vehicle2"> I have a car</label><br/>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" onChange={selection}/>
        <label htmlFor="vehicle3"> I have a boat</label><br/>
      </div>
      <h1>Selected vehicles are: {vehicle.join(", ")}</h1>
    
     </>
  )
}
