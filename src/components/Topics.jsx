import React from 'react';

const Topics = () => {
    return (
        <div className={'mb-5'}>
            <h5 className={'font-bold text-lg uppercase text-gray-700 mb-2'}>
                Popular News
            </h5>
            <ul>
                <li className={'px-1 py-4 border-y border-white hover:border-gray-200'}>
                    <a className={'flex items-center text-gray-600'} href="#">
                        <span className={'inline-block w-4 h-4 mr-3 bg-teal-700'}></span>
                        Vue
                        <span className={'text-gray-500 ml-auto'}>23 articles</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Topics;
