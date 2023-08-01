import React from 'react';
import Main from "./Main";

const Topics = () => {

    let randomArticles=Math.ceil(Math.random()*20)
    return (
        <div className={'mb-5'}>
            <h5 className={'font-bold text-lg uppercase text-gray-700 mb-2'}>
                Popular News
            </h5>
            <ul>
                <li className={'px-1 py-4 border-y border-white hover:border-gray-200'}>
                    <a className={'flex items-center text-gray-600'} href="#">
                        <span className={'inline-block w-4 h-4 mr-3 rounded bg-gradient-to-r from-teal-500  to-teal-100'}></span>
                        Vue
                        <span className={'text-gray-500 ml-auto'}>{randomArticles} articles</span>
                    </a>
                </li>
                <li className={'px-1 py-4 border-y border-white hover:border-gray-200'}>
                    <a className={'flex items-center text-gray-600'} href="#">
                        <span className={'inline-block w-4 h-4 mr-3 rounded bg-gradient-to-r from-emerald-500 to-emerald-300'}></span>
                        Svelte
                        <span className={'text-gray-500 ml-auto'}>{Math.ceil(Math.random()*20)} articles</span>
                    </a>
                </li>
                <li className={'px-1 py-4 border-y border-white hover:border-gray-200'}>
                    <a className={'flex items-center text-gray-600'} href="#">
                        <span className={'inline-block w-4 h-4 mr-3 rounded bg-gradient-to-r from-teal-600 to-teal-300'}></span>
                        React
                        <span className={'text-gray-500 ml-auto'}>{Math.ceil(Math.random()*20)} articles</span>
                    </a>
                </li>
                <li className={'px-1 py-4 border-y border-white hover:border-gray-200'}>
                    <a className={'flex items-center text-gray-600'} href="#">
                        <span className={'inline-block w-4 h-4 mr-3 rounded bg-gradient-to-r from-teal-500 to-teal-200'}></span>
                        Angular
                        <span className={'text-gray-500 ml-auto'}>{Math.ceil(Math.random()*20)} articles</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Topics;
