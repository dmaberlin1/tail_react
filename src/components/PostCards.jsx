import React from 'react';
import img3 from '../img/img-3.jpg'
import img4 from '../img/img-4.jpg'
import img5 from '../img/img-5.jpg'
import {months} from "../const";
const PostCards = () => {
    return (
        <section className={'px-2'}>
            <a className={'block w-full lg:flex mb-10'} href="#">
                <img className={'w-full h-48 lg:w-48 lg:mt-6 rounded-full opacity-80 object-cover mr-4'} src={img3} alt="img3"/>
                <div className={'flex flex-col justify-between'}>
                    <div className={'flex flex-col gap-1'}>
                        <h3 className={'dark:text-slate-400 py-4 mb-2 text-gray-700 font-bold text-2xl text-center'}
                        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, quisquam.</h3>
                        <p className={'dark:text-slate-400 text-gray-700 text-center'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Asperiores dolorum, eaque enim fuga
                            laudantium perferendis quia quisquam sint tempora voluptatibus.
                        </p>
                    </div>
                    <div className={'flex mt-3'}>
                        <img className={'rounded-full h-10 w-10 mr-2 object-cover'}
                             src={'https://randomuser.me/api/portraits/men/29.jpg'} alt="author"/>
                        <div>
                            <p className={'dark:text-slate-400 font-semi-bold text-gray-600 text-sm'}>Bill Terner</p>
                            <time className={'dark:text-slate-300 text-gray-500 text-xs'}>
                                {Math.ceil(Math.random()*30)} {months[Math.ceil(Math.random()*12)]}
                            </time>
                        </div>
                    </div>
                </div>
            </a>
            <a className={'block w-full lg:flex mb-10'} href="#">
                <img className={'w-full h-48 lg:w-48 lg:mt-6 rounded-full opacity-80 object-cover mr-4'} src={img4} alt="img4"/>
                <div className={'flex flex-col justify-between'}>
                    <div className={'flex flex-col gap-6'}>
                        <h3 className={'dark:text-slate-400 py-4 mb-2 text-gray-700 font-bold text-2xl text-center'}
                        >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p className={'dark:text-slate-300 text-gray-700 text-center'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Asperiores dolorum, eaque enim fuga
                            laudantium perferendis quia quisquam sint tempora voluptatibus.
                        </p>
                    </div>
                    <div className={'flex mt-3'}>
                        <img className={'rounded-full h-10 w-10 mr-2 object-cover'}
                             src={'https://randomuser.me/api/portraits/men/2.jpg'} alt="author"/>
                        <div>
                            <p className={'dark:text-slate-400 font-semi-bold text-gray-600 text-sm'}>Joe Holl</p>
                            <time className={'dark:text-slate-300 text-gray-500 text-xs'}>
                                {Math.ceil(Math.random()*30)} {months[Math.ceil(Math.random()*12)]}
                            </time>
                        </div>
                    </div>
                </div>
            </a>
            <a className={'block w-full lg:flex mb-10'} href="#">
                <img className={'w-full h-48 lg:w-48 lg:mt-6 rounded-full opacity-80 object-cover mr-4'} src={img5} alt="img5"/>
                <div className={'flex flex-col justify-between'}>
                    <div className={'flex flex-col gap-6'}>
                        <h3 className={'dark:text-slate-400 py-4 mb-2 text-gray-700 font-bold text-2xl  text-center'}
                        >Lorem</h3>
                        <p className={'dark:text-slate-400 text-gray-700 text-center'}> Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Alias, recusandae.
                        </p>
                    </div>
                    <div className={'flex mt-3'}>
                        <img className={'rounded-full h-10 w-10 mr-2 object-cover'}
                             src={'https://randomuser.me/api/portraits/men/4.jpg'} alt="author"/>
                        <div>
                            <p className={'dark:text-slate-400 font-semi-bold text-gray-600 text-sm'}>Sam Jones</p>
                            <time className={'dark:text-slate-300 text-gray-500 text-xs'}>
                                {Math.ceil(Math.random()*30)} {months[Math.ceil(Math.random()*12)]}
                            </time>
                        </div>
                    </div>
                </div>
            </a>
        </section>
    );
};

export default PostCards;
