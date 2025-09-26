import React from 'react';
import bannerImage from '../assets/banner-main.png'
import bgBannerImage from '../assets/bg-shadow.png'

const Banner = () => {
    return (
        <div className='h-[500px] max-w-[1240px] mx-auto my-[100px] rounded-4xl' style={{ backgroundImage: `url(${bgBannerImage})` }}>
            <div className='h-full w-full bg-black/15 rounded-4xl flex flex-col items-center justify-center space-y-4'>
                <div>
                    <img src={bannerImage} alt="" />
                </div>
                <h2 className='text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='text-gray-400 text-xl'>Beyond Boundaries Beyond Limit</p>
                <button className='btn rounded-2xl bg-[#e7fe29] font-bold'>Claim Free Credits</button>
            </div>

        </div >
    );
};

export default Banner;