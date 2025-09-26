import React from 'react';
import iconImg from '../assets/logo.png'
import coinImg from '../assets/DoubleDollar.png'

const Navbar = ({ availableBalance }) => {
    return (
        <div>
            <div className="max-w-[1240px] mx-auto flex bg-base-100 shadow-sm px-4 py-4">
                <div className="flex-1">
                    <img src={iconImg} alt="" className='w-[60px] h-[60px]' />
                </div>
                <button>
                    <div className="flex items-center justify-center gap-1">
                        <span className='font-semibold text-base'><span>$</span>{availableBalance}</span>
                        <span>
                            <img src={coinImg} alt="" />
                        </span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;