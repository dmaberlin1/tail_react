import React from 'react';

const Header = ({setDarkMode,darkMode}) => {
    return (
        <header
            className={'flex h-14 justify-between items-center mx-0.5 mb-5 pt-6 px-3 pb-6 border-b-8 border-t-8 dark:border-t-emerald-700 dark:border-b-emerald-700 border-t-emerald-300 border-b-emerald-300 rounded-3xl'}>
           <div className={'flex gap-9'}>
            <a href="#"
               className={'pl-2.5 uppercase font-semibold text-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300'}
            >webDev</a>
            <button className={''} onClick={()=>setDarkMode(!darkMode)}>
                {darkMode &&
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#F28C38" viewBox="0 0 24 24" strokeWidth="1.5"
                                  stroke="#F28C38" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
                </svg>
                }
                {!darkMode &&
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#3EE7B7" viewBox="0 0 24 24" strokeWidth="1"
                                   stroke="#D9DDD9" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
                </svg> }

            </button>
           </div>
            <nav className={'hidden md:flex items-center gap-20'}>
                <ul className={'text-gray-500 font-semi-bold inline-flex items-center gap-10'}>
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
                <ul className={'flex gap-10 pr-2'}>
                    <li>
                        <button className={'header-auth'}>Login</button>
                    </li>
                    <li>
                        <button className={'header-auth'}>Register</button>
                    </li>
                </ul>
            </nav>
            <button className={'inline-block md:hidden'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"/>
                </svg>

            </button>
        </header>
    );
};

export default Header;
