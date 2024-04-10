import React, { useState, useEffect } from 'react'

function Character(props) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [homeworld, setHomeworld] = useState("")
  console.log(props)
  const planetsList = props.planets;
  
  useEffect(() => {
    planetsList.forEach((plan) => {
      if (props.homeworld === plan.id) {
        setHomeworld(plan.name);
      }
    });
  }, []);
  return (
    <div className='character-card'>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name'>{props.name}</h3>
      <p>
        Planet: <span className='character-planet'>{homeworld}</span>
      </p>
    </div>
  )
}

export default Character
