import React from 'react';
import footerImg from '../assets/logo.png'

const Footer = () => {
    return (
        <div className='min-h-[400px] bg-[#060919]'>
            <div className='h-[250px] flex items-center justify-center border-red-400'>
                <img src={footerImg} alt="" className='h-[100px] w-[100px]' />
            </div>
            <div className=' border-amber-300 text-white flex justify-around'>
                <div className='max-w-[320px]'>
                    <p className='text-xl font-bold my-2'>About Us</p>
                    <p>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div className='max-w-[320px]'>
                    <p className='text-xl font-bold my-2'>Quick Links</p>
                    <ul className='list-disc pl-6 space-y-4'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className='max-w-[320px] space-y-5'>
                    <p className='text-xl font-bold my-2'>Subscribe</p>
                    <p>Subscribe to Our NewsLatter for the Latest Updates</p>
                    <div>
                        <label htmlFor="email"></label>
                        <input type="email" id='email' placeholder='Enter Your Email'
                            className='px-4 py-2 bg-white placeholder-gray-400 rounded-l-2xl text-black' />
                        <button className='py-2 px-4 rounded-r-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='text-gray-500 p-6 flex items-center justify-center mt-[50px]'>
                <p>&copy;2024 SHIBZZ || All Right Reserved</p>
            </div>
        </div>
    );
};

export default Footer;