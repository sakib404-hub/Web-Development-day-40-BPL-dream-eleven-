import React from 'react';
import delIcon from '../assets/Frame.png'

const SelectedPlayer = ({ player, handleDelete }) => {
    // console.log(player);
    return (
        <div className=' flex items-center justify-between my-3 border-2 border-gray-400 rounded-2xl p-3'>
            <div className='flex gap-3 '>
                <div className='h-[60px] w-[60px] rounded-md'>
                    <img src={player.image} alt="" className='h-full w-full rounded-md' />
                </div>
                <div className='flex flex-col items-start justify-between'>
                    <p className='text-xl font-semibold '>{player.name}</p>
                    <p className='text-gray-400'>{player.role}</p>
                </div>
            </div>
            <button className='cursor-pointer' onClick={() => { handleDelete(player.id) }}>
                <img src={delIcon} alt="" />
            </button>
        </div>
    );
};

export default SelectedPlayer;