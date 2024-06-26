import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets';
const urlPeople = 'http://localhost:9009/api/people';

export default function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios
      .get(urlPeople)
      .then(res => {
        setPeople(res.data);
      })
      .catch(err => console.log(err));

      axios
        .get(urlPlanets)
        .then(response => {
          setPlanets(response.data);
        })
        .catch(error => console.log(error));
  }, [])

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {
        people.map(person => {
          return <Character key={person.id} name={person.name} homeworld={person.homeworld} planets={planets}/>
        })
      }
    </div>
  )
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
