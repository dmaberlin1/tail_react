import React from 'react';
import img3 from '../img/img-3.jpg'
import img4 from '../img/img-4.jpg'
import img5 from '../img/img-5.jpg'
const PostCards = () => {
    return (
        <section className={'px-2'}>
            <a className={'block w-full lg:flex mb-10'} href="#">
                <img className={'w-full h-48 lg:w-48 opacity-80 object-cover mr-4'} src={img3} alt="img3"/>
                <div className={'flex'}>
                    <div className={'flex flex-col gap-6'}>
                        <h3 className={'py-4 mt-3 mb-2 text-gray-700 font-bold text-2xl text-center'}
                        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, quisquam.</h3>
                        <p className={'text-gray-700 text-center'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Asperiores dolorum, eaque enim fuga
                            laudantium perferendis quia quisquam sint tempora voluptatibus.</p>
                    </div>
                </div>
            </a>
            <a className={'block w-full lg:flex mb-10'} href="#">
                <img className={'w-full h-48 lg:w-48 opacity-80 object-cover mr-4'} src={img4} alt="img4"/>
                <div className={'flex'}>
                    <div className={'flex flex-col gap-6'}>
                        <h3 className={'py-4 mt-3 mb-2 text-gray-700 font-bold text-2xl text-center'}
                        >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p className={'text-gray-700 text-center'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Asperiores dolorum, eaque enim fuga
                            laudantium perferendis quia quisquam sint tempora voluptatibus.</p>
                    </div>
                </div>
            </a>
            <a className={'block w-full lg:flex mb-10'} href="#">
                <img className={'w-full h-48 lg:w-48 opacity-80 object-cover mr-4'} src={img5} alt="img5"/>
                <div className={'flex'}>
                    <div className={'flex flex-col gap-6'}>
                        <h3 className={'py-4 mt-3 mb-2 text-gray-700 font-bold text-2xl  text-center'}
                        >Lorem</h3>
                        <p className={'text-gray-700 text-center'}> Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Alias, recusandae.</p>
                    </div>
                </div>
            </a>
        </section>
    );
};

export default PostCards;
