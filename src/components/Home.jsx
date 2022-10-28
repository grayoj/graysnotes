import React from 'react';
import Hero from '../assets/hero.jpeg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';



const Home = () => {
    return (
        <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-900'>
            <div className='max-w-screen-lg mg-auto flex flex-col items-center justify-center h-full
            px-4 md:flex-row text-white
            '>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I am a software
                        engineer.
                    </h2>
                    <p className="text-white py-4 max-w-md">I am a developer
                        with 6 years experience in building robust software
                        applications. My skillsets span through
                        Javascript, PHP, Typescript, Java, C++, C
                    </p>
                    <div>
                        <button className='text-black
                        w-fit px-6 py-3 my-2 flex
                        items-center rounded-md bg-white
                        '>
                            Portfolio
                            <span className='hover:rotate-190 duration-300
                            '>
                                <MdOutlineKeyboardArrowRight size={25}
                                    className='ml-1'

                                />
                            </span>
                        </button>
                    </div>

                </div>

                <div>
                    <img src={Hero} alt="Profile Photo"
                        className='rounded-2xl mx-auto w-2/3 md:w-full'
                    />
                </div>

            </div>

        </div>
    )
}

export default Home