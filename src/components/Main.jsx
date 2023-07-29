import React from 'react';

const Main = () => {
    return (
        <main>
            <>
                <div className={'px-2 flex items-center'}>
                    <div className={'py-4 overflow-y-auto whitespace-nowrap flex items-center'}>
                        <a className={'text-gray-600 hover:text-gray-900'} href="#">Home</a>
                        <span className="mx-2 text-gray-500">&gt;</span>
                        <a className={'text-gray-600 hover:text-gray-900'} href="#">News</a>
                        <a className={'text-gray-600 hover:text-gray-900'} href="#">Tech</a>
                    </div>
                </div>

                <div className={'mt-20 mb-10'}>
                    <ul className={'flex justify-center gap-0.5'}>
                        <li><a className={'pagination-item rounded-l-lg'} href="#">Previous</a></li>
                        <li><a className={'pagination-item'} href="#">1</a></li>
                        <li><a className={'pagination-item'} href="#">2</a></li>
                        <li><a className={'pagination-item pagination-item-active'} href="#">3</a></li>
                        <li><a className={'pagination-item'} href="#">4</a></li>
                        <li><a className={'pagination-item'} href="#">5</a></li>
                        <li><a className={'pagination-item rounded-r-lg'} href="#">Next</a></li>
                    </ul>
                </div>

            </>
        </main>
    );
};

export default Main;
