import React from 'react';

const Header = () => {
    return (
        <header
            className={'flex justify-center items-center flex-col mx-10 my-5 pt-4 pb-4 border-b-8 border-t-8 border-t-emerald-300 border-b-emerald-300 rounded-3xl'}>
            <a href="#" className={'uppercase font-semibold text-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300'}>webDev</a>
            <nav>
                <ul className={'text-gray-500 font-semibold'}>
                    <li><a
                        className={'inline-block py-3 px-2 hover:text-emerald-600 border-b-2 focus:outline-none focus:ring-2 focus:ring-emerald-300 border-transparent hover:border-emerald-600'}
                        href="#">Home</a></li>
                    <li><a className={' inline-block text-gray-300 py-3 px-2 hover:text-emerald-600 border-b-2 focus:outline-none focus:ring-2 focus:ring-emerald-300  border-transparent hover:border-emerald-600'} href="#">About</a></li>
                    <li><a className={'inline-block text-gray-300 py-3 px-2 hover:text-emerald-600 border-b-2 focus:outline-none focus:ring-2 focus:ring-emerald-300  border-transparent hover:border-emerald-600'} href="#">Contact</a></li>
                </ul>
                <ul className={'flex gap-10 pt-10'}>
                    <li>
                        <button
                            className={'shadow-md shadow-emerald-200 p-1 px-3 border-2 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-300 border-emerald-500 text-emerald-600 hover:text-white hover:bg-emerald-600'}>Login</button>
                    </li>
                    <li>
                        <button className={'shadow-md shadow-emerald-200 p-1 px-3 border-2 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-300 border-emerald-500 text-emerald-600 hover:text-white hover:bg-emerald-600'}>Register</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
