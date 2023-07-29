import React from 'react';

const PostCards = () => {
    return (
        <section>
            <a className={'block mb-10'} href="#">
                <div className={'flex'}>
                    <div>
                        <h3 className={'mt-3 mb-2 text-gray-700 font-bold text-2xl'}
                        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, quisquam.</h3>
                        <p className={'text-gray-700'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Asperiores dolorum, eaque enim fuga
                            laudantium perferendis quia quisquam sint tempora voluptatibus.</p>
                    </div>
                </div>
            </a>
            <a className={'block mb-10'} href="#">
                <div className={'flex'}>
                    <div>
                        <h3 className={'mt-3 mb-2 text-gray-700 font-bold text-2xl'}
                        >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p className={'text-gray-700'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Asperiores dolorum, eaque enim fuga
                            laudantium perferendis quia quisquam sint tempora voluptatibus.</p>
                    </div>
                </div>
            </a>
            <a className={'block mb-10'} href="#">
                <div className={'flex'}>
                    <div>
                        <h3 className={'mt-3 mb-2 text-gray-700 font-bold text-2xl'}
                        >Lorem</h3>
                        <p className={'text-gray-700'}> Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Alias, recusandae.</p>
                    </div>
                </div>
            </a>
        </section>
    );
};

export default PostCards;
