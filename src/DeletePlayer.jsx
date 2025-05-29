const DeletePlayer = ({Players,playerID, onConfirmDelete, onCancel}) => {
    const getPlayerWhichIsGoingToBeDeleted = Players.find((player) => player.id === playerID);
    return(
        <>
            <h1>These are the details that you wanted to deleted</h1>
            <div key={playerID}>
                <h3>playerName: {getPlayerWhichIsGoingToBeDeleted.name}</h3>
                <h3>playerAge: {getPlayerWhichIsGoingToBeDeleted.age}</h3>
                <h3>playerPosition: {getPlayerWhichIsGoingToBeDeleted.position}</h3>
                <button onClick={() => onConfirmDelete(playerID)}>Delete</button>
                <button onClick={onCancel}>cancel</button>
            </div>   
        </>
    )
}

export default DeletePlayer;