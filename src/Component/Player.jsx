import React, { useState } from 'react';
import titleIcon from '../assets/Group.png'
import countryFlag from '../assets/report 1.png'
import { toast } from 'react-toastify';

const Player = ({ player, setAvailableBalance, availableBalance, setSelectedPlayers, selectedPlayers }) => {

    const [isSeleted, setIsSelected] = useState(false);

    const handleSelected = (player) => {
        if (selectedPlayers.length >= 6) {
            toast('You can not purchase more than 6 Player!')
        }
        else if (availableBalance > player.price) {
            toast('Player Selected!');
            setAvailableBalance(availableBalance - price);
            const flag = isSeleted ? false : true;
            setIsSelected(flag);
            setSelectedPlayers([...selectedPlayers, player])
        } else {
            toast('You DO not Have Enough Money!')
        }
    }

    const img = player.image;
    const name = player.name;
    const country = player.country;
    const role = player.role;
    const rating = player.rating;
    const battingStyle = player.btstyle;
    const bowlingStyle = player.bwlstyle;
    const price = player.price;
    return (
        <div className='max-w-[1240px] mx-auto'>
            <div className="card bg-base-100 shadow-sm flex flex-col items-center justify-center">
                <div className='p-8 pb-2 w-[350px] h-[350px]'>
                    <img
                        src={img}
                        alt="Shoes" className='h-full w-full rounded-xl' />
                </div>
                <div className="card-body  w-full space-y-1">
                    <div className='flex items-center  gap-2'>
                        <img src={titleIcon} alt="" className='h-[20px] w-[20px] object-cover' />
                        <h2 className="card-title">{name}</h2>
                    </div>
                    <div className='flex justify-between items-center border-b-2 pb-3 border-gray-400'>
                        <div className='flex gap-2 items-center'>
                            <img src={countryFlag} alt="" className='w-[20px] h-[20px]' />
                            <p className='font-semibold text-[#898989]'>{country}</p>
                        </div>
                        <button className='btn'>{role}</button>
                    </div>
                    <div className='flex gap-2'>
                        <span className='font-bold'>Rating : {rating}</span>
                        <span>4</span>
                    </div>
                    <div className='flex items-center justify-between gap-2'>
                        <span className='font-bold'>{battingStyle} </span>
                        <span className='text-gray-400 font-bold'>{bowlingStyle}</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div>
                            <span className='font-bold'>Price : ${price}</span>
                        </div>
                        <button disabled={isSeleted} className='btn' onClick={() => {
                            handleSelected(player)
                        }
                        }>{isSeleted === true ? "Selected" : "Choose Player"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;