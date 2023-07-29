import React from 'react';

const Header = () => {
    return (
        <header
            className={'flex justify-between items-center mx-10 my-5 pt-4 px-3 pb-4 border-b-8 border-t-8 border-t-emerald-300 border-b-emerald-300 rounded-3xl'}>
            <a href="#"
               className={'uppercase font-semibold text-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300'}
            >webDev</a>
            <nav className={'flex items-center'}>
                <ul className={'text-gray-500 font-semibold inline-flex items-center'}>
                    <li>
                        <a
                            className={'header-link'}
                            href="#"
                        >Home</a></li>
                    <li>
                        <a
                            className={'header-link'}
                            href="#">About</a></li>
                    <li>
                        <a
                            className={'header-link'}
                            href="#">Contact</a></li>
                </ul>
                <ul className={'flex gap-10'}>
                    <li>
                        <button className={'header-auth'}>Login</button>
                    </li>
                    <li>
                        <button className={'header-auth'}>Register</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
