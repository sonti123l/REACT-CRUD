import { useState } from "react"

const AddPlayer = ({onCancel,onAddPlayer,Players}) =>{

    const length = Players.length;
    const [newName,setNewName] = useState("");
    const [newAge,setNewAge] = useState("");
    const [newPosition,setNewPosition] = useState("");

    const handleUpdaterList = (e) => {
    e.preventDefault();
    const newPlayer = {
      id : length + 1,
      name : newName,
      age : parseInt(newAge),
      position : newPosition
    }
    onAddPlayer(newPlayer);
    // after setting the player in the given data file then we need to clear the form data
    setNewName("");
    setNewAge("");
    setNewPosition("")
    }

    return(
    <>
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
        <button type= "button" onClick={onCancel}>cancel</button>
        </form>
    </>)
}

export default AddPlayer;