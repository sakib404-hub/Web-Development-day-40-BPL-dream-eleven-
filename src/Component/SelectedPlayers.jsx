import React from 'react';
import SelectedPlayer from './SelectedPlayer';

const SelectedPlayers = ({ selectedPlayers, handleDelete }) => {
    // console.log(selectedPlayers);
    return (
        <div className='max-w-[1240px] mx-auto my-[100px]'>
            {
                selectedPlayers.map((player) => {
                    return <SelectedPlayer key={player.id} player={player} handleDelete={handleDelete}></SelectedPlayer>
                })
            }
        </div>
    );
};

export default SelectedPlayers;