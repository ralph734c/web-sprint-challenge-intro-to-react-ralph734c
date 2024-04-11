import React, { useState, useEffect } from 'react';

export default function Character(props) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [homeworld, setHomeworld] = useState("");
  const [render, setRender] = useState(false);
  const planetsList = props.planets;
  
  useEffect(() => {
    planetsList.forEach((plan) => {
      if (props.homeworld === plan.id) {
        setHomeworld(plan.name);
      }
    });
  }, []);

  const togglePlanet = () => setRender(!render)
  
  return (
    <div className='character-card' onClick={() => togglePlanet()}>
      <h3 className='character-name'>{props.name}</h3>
      {render === true ? <p>Planet: <span className='character-planet'>{homeworld}</span></p> : null }
    </div>
  )
}