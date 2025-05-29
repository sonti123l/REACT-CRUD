import { useState } from "react";


const EditDetails = ({Players,playerID,onUpdatePlayer,onCancel}) => {

    // first check for the player we need to edit the details 
    const getEditedPlayer = Players.find(player => playerID === player.id);

    // now create useState for the getEditedPlayer details to be edited
    const [newName,setNewName] = useState(getEditedPlayer?.name||"");
    const [newAge,setNewAge] = useState(getEditedPlayer?.age||"");
    const [newPosition,setNewPosition] = useState(getEditedPlayer?.position||"");
   
    // now implement the functionalities 
    const handleSubmit = (e) =>{
        e.preventDefault();
        const updateDetails = {
            id: playerID,
            name: newName,
            age: parseInt(newAge),
            position: newPosition
        }
        console.log(`${newName},${newAge},${newPosition}`);
        onUpdatePlayer(updateDetails);
        // make the form clear everything
        setNewName("");
        setNewAge("");
        setNewPosition("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="editName">Edit Name</label>
            <input type="text" id="editName" value={newName} onChange={(e) => setNewName(e.target.value)}></input>
            <br></br>
            <label htmlFor="editAge">Edit Age</label>
            <input type="text" id="editAge" value={newAge} onChange={(e) => setNewAge(e.target.value)}></input>
            <br></br>
            <label htmlFor="editPosition">Edit Position</label>
            <input type="text" id="editPosition" value={newPosition} onChange={(e) => setNewPosition(e.target.value)}></input>
            <br></br>
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>cancel</button>
        </form>
    )

}

export default EditDetails;