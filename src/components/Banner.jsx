import React from 'react';

const Banner = () => {
    return (
        <section className={'px-2 flex space-x-2'}>
            <a className={'w-2/3  bg-gradient-to-r from-emerald-200 to-emerald-300 hover:from-emerald-200 hover:to-emerald-200 rounded h-96 mb-4 relative inline-block overflow-hidden'} href="#">
            <div className={'p-4 absolute bottom-0 left-0 z-10'}>
                <h2 className={'text-2xl font-semi-bold text-gray-100 leading-tight'}>
                    Lorem ipsum dolor sit amet, consectetur.
                </h2>
            </div>
        </a>
            <a className={'w-1/3 bg-gradient-to-bl from-teal-100 via-teal-200 to-teal-500 hover:via-teal-500/90 h-96 rounded mb-4 relative inline-block overflow-hidden'} href="#">
                <div className={'p-4 absolute bottom-0 left-0 z-10'}>
                    <h2 className={'text-5xl font-semi-bold text-gray-100 leading-tight'}>
                 Lorem ipsum dolor sit.
                    </h2>
                </div>
            </a>
        </section>
    );
};

export default Banner;
