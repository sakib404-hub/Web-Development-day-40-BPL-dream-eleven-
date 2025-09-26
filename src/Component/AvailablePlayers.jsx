import React, { use } from 'react';
import Player from './Player';


const AvailablePlayers = ({ fetchPlayersPromise, setAvailableBalance, availableBalance, setSelectedPlayers, selectedPlayers }) => {
    const availablePlayers = use(fetchPlayersPromise);
    // console.log(availablePlayers);
    return (
        <div className=' max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[50px] mb-[100px]'>
            {
                availablePlayers.map((player) => <Player
                    key={player.id}
                    player={player}
                    setAvailableBalance={setAvailableBalance}
                    availableBalance={availableBalance}
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}>
                </Player>)
            }
        </div>
    );
};

export default AvailablePlayers;