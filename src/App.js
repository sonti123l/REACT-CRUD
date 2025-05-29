import './App.css';
import data from "./data.json";
import PlayerDetails from './PlayerDetails';
import { useState } from 'react';



function App() {

  // for adding a new player in the details section
  const [players,setNewplayer] = useState(data.players);
  const [newName,setNewName] = useState("");
  const [newAge,setNewAge] = useState("");
  const [newPosition,setNewPosition] = useState("");
  const [showForm,setShowForm] = useState(false);

  const handleUpdaterList = (e) => {
    e.preventDefault();
    const newPlayer = {
      id : players.length + 1,
      name : newName,
      age : parseInt(newAge),
      position : newPosition
    }
    setNewplayer([...players,newPlayer])
    // after setting the player in the given data file then we need to clear the form data
    setNewName("");
    setNewAge("");
    setNewPosition("");
  }

  const handleShowForm = () => {
    console.log("Add Player clicked!");
    setShowForm(true);
  }

  return(
    <>
    <PlayerDetails Players={players} addPlayer={handleShowForm}/>
    {showForm && (
      <form onSubmit={handleUpdaterList}>
      <label htmlFor='name'></label>
      <input type='text' id='name' value={newName} onChange={(e) => setNewName(e.target.value)}></input>
      <br></br>
      <label htmlFor='age'></label>
      <input type='text' id='age' value={newAge} onChange={(e) => setNewAge(e.target.value)}></input>
      <br></br>
      <label htmlFor='position'></label>
      <input type='text' id='position' value={newPosition} onChange={(e) => setNewPosition(e.target.value)}></input>
      <br></br>
      <button type='submit'>Submit</button>
      <button type= "button" onClick={() => setShowForm(false)}>cancel</button>
    </form>
    )}  
    </>
  )
}

export default App;
