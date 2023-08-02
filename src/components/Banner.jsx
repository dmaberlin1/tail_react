import React from 'react';
import img1 from '../img/img-1.jpg'
import img2 from '../img/img-2.jpg'
import {months} from "../const";


const Banner = () => {
    return (
        <section className={'px-2 lg:flex lg:space-x-2'}>
            {/*<a className={'w-full lg:w-2/3  bg-gradient-to-r from-emerald-200 to-emerald-300 hover:from-emerald-200 hover:to-emerald-200 rounded h-96 mb-4 relative inline-block overflow-hidden'} href="#">*/}
            <a className={'w-full lg:w-2/3 rounded h-96 mb-4 relative inline-block overflow-hidden'} href="#">
                <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-gray-50/0 to-gray-600/50 dark:to-gray-800 z-10"></div>
                <img className={'absolute bottom-0 left-0 w-full h-full z-0 object-cover'}
                     src={img1} alt="img1"/>
                <div className={'p-4 absolute bottom-0 left-0 z-20'}>
                <h2 className={'dark:text-slate-400 text-2xl font-semi-bold text-gray-100 leading-tight'}>
                    Lorem ipsum dolor sit amet,Lorem ipsum dolor.
                </h2>
                    <div className={'flex mt-3'}>
                        <img className={'rounded-full h-10 w-10 mr-2 object-cover'} src={'https://randomuser.me/api/portraits/men/25.jpg'} alt="author"/>
                        <div>
                            <p className={'dark:text-slate-400 font-semi-bold text-gray-200 text-sm'}>Bill Terner</p>
                            <time className={'dark:text-slate-300 text-gray-400 text-xs'}>{Math.ceil(Math.random()*30)} {months[Math.ceil(Math.random()*12)]}</time>
                        </div>
                    </div>
            </div>
        </a>
            <a className={'w-full lg:w-1/3 bg-gradient-to-bl from-teal-100 via-teal-200 to-teal-500 hover:via-teal-500/90 h-96 rounded mb-4 relative inline-block overflow-hidden'} href="#">
                <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-gray-50/0 to-gray-600/50 dark:to-gray-800 z-20"></div>
                <img className={'absolute top-0 left-0 w-full h-full z-0 object-cover'} src={img2} alt="img2"/>
                <div className={'p-4 absolute bottom-0 left-0 z-20'}>
                    <h2 className={'dark:text-slate-400 text-3xl font-semi-bold text-gray-100 leading-tight'}>
                 Lorem ipsum dolor,Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </h2>
                    <div className={'flex mt-3'}>
                        <img className={'rounded-full h-10 w-10 mr-2 object-cover'}
                             src={'https://randomuser.me/api/portraits/men/26.jpg'} alt="author"/>
                        <div>
                            <p className={'dark:text-slate-400 font-semibold text-gray-200 text-sm'}>Elena Troy</p>
                            <time className={'dark:text-slate-300 text-gray-400 text-xs'}>{Math.ceil(Math.random()*30)} {months[Math.ceil(Math.random()*12)]}</time>
                        </div>
                    </div>
                </div>
            </a>
        </section>
    );
};

export default Banner;
