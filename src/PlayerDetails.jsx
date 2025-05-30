import "./PlayerDetails.css";

const PlayerDetails = ({Players,onEdit,onDelete,addPlayer}) => {
    return(
        <div className="DetailsName">
            <h1>CRUD APP FOR FOOTBALL PLAYERS TRACKING</h1>
                {
                    Players.map((player) => (
                        <div key={player.id} className="detailsContainer">
                                <div className="DetailsDiv">
                                    <h1>Player ID: {player.id}</h1>
                                    <h1>Player Name: {player.name}</h1>
                                    <h1>Player Age: {player.age}</h1>
                                    <h1>Player Position: {player.position}</h1>
                                </div>
                                <div className="ButtonsInPlayer">
                                    <button onClick={() => onEdit(player.id)}>Edit Player</button>
                                    <button onClick={() => onDelete(player.id)}>Delete Player</button>
                                </div>
                        </div>
                    ))
                }
            <button onClick={addPlayer} id="AddPlayer">Add player</button>
        </div>
    
    )
}

export default PlayerDetails;
