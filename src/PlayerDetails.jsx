const PlayerDetails = ({Players,onEdit,onDelete,addPlayer}) => {
    return(
        <div className="DetailsName">
            <h1>Player Details</h1>
                {
                    Players.map((player) => (
                        <div key={player.id}>
                            <h1>Player ID: {player.id}</h1>
                            <h1>Player Name: {player.name}</h1>
                            <h1>Player Age: {player.age}</h1>
                            <h1>Player Position: {player.position}</h1>
                            <button onClick={() => onEdit?.(player.id)}>Edit Details</button>
                            <button onClick={() => onDelete?.(player.id)}>Delete Player details</button>
                        </div>
                    ))
                }
            <button onClick={addPlayer}>Add player</button>
        </div>
    
    )
}

export default PlayerDetails;