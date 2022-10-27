import React from 'react';





const Navbar = () => {
    return (
        <nav className='flex justify-between
        items-center w-full h-20 px-4
        text-white bg-black fixed'>

            <div>
                <h1 className='text-4xl
                font-signature ml-2'>Gray</h1>
            </div>

            <ul className='flex'>
                <li className='px-4
                cursor-pointer capitalize
                text-gray-300 font-medium
                hover:scale-110
                duration-200'>Explore</li>


            </ul>
        </nav>
    )
}

export default Navbar