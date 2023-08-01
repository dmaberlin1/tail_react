import React from 'react';

const PostCards = () => {
    return (
        <section className={'px-2 flex'}>
            <a className={'flex mb-10 w-1/3'} href="#">
                <div className={'flex'}>
                    <div className={'flex flex-col justify-between'}>
                        <h3 className={'py-4 mt-3 mb-2 text-gray-700 font-bold text-2xl text-center'}
                        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, quisquam.</h3>
                        <p className={'text-gray-700 text-center'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Asperiores dolorum, eaque enim fuga
                            laudantium perferendis quia quisquam sint tempora voluptatibus.</p>
                    </div>
                </div>
            </a>
            <a className={'flex mb-10 w-1/3'} href="#">
                <div className={'flex'}>
                    <div className={'flex flex-col justify-between'}>
                        <h3 className={'py-4 mt-3 mb-2 text-gray-700 font-bold text-2xl text-center'}
                        >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p className={'text-gray-700 text-center'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Asperiores dolorum, eaque enim fuga
                            laudantium perferendis quia quisquam sint tempora voluptatibus.</p>
                    </div>
                </div>
            </a>
            <a className={'flex mb-10 w-1/3'} href="#">
                <div className={'flex'}>
                    <div className={'flex flex-col justify-between'}>
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
