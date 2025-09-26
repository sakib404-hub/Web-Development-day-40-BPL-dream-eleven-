import React from 'react';
import SelectedPlayer from './SelectedPlayer';

const SelectedPlayers = ({ selectedPlayers, handleDelete, setToogle, toogle }) => {

    const handleToogle = () => {
        setToogle(!toogle)
    }
    // console.log(selectedPlayers);
    return (
        <div className='max-w-[1240px] mx-auto my-[100px]'>
            {
                selectedPlayers.map((player) => {
                    return <SelectedPlayer key={player.id} player={player} handleDelete={handleDelete}></SelectedPlayer>
                })
            }
            <div className=' w-[150px] border border-green-400 p-1 rounded-2xl flex items-center justify-center'>
                <button onClick={() => { handleToogle() }} className='btn bg-[#e7fe29] px-3 py-2 font-bold rounded-2xl'>Add More player</button>
            </div>
        </div>
    );
};

export default SelectedPlayers;