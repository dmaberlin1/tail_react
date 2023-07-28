import React from 'react';

const Main = () => {
    return (
        <main>
            <>
            <div>
                <div className={'py-4 overflow-y-auto whitespace-nowrap'}>
                    <a className={'text-gray-600 hover:text-gray-900'} href="#">Home</a>
                    <span className="mx-2 text-gray-500">&gt;</span>
                    <a  className={'text-gray-600 hover:text-gray-900'} href="#">News</a>
                    <a  className={'text-gray-600 hover:text-gray-900'} href="#">Tech</a>
                </div>
            </div>


            </>
        </main>
    );
};

export default Main;
