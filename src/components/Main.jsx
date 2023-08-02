import React from 'react';
import FormSubscribe from "./FormSubscribe";
import PostCards from "./PostCards";
import MainMenu from "./MainMenu";
import Banner from "./Banner";
import Topics from "./Topics";
import Pagination from "./Pagination";

const Main = () => {
    return (
        <main className={'lg:flex'}>
                <div className={'w-full lg:flex flex-col'}>
                    <MainMenu/>
                    <Banner/>
                    <div className={'w-full lg:flex flex-row'}>
                        <div className={'w-full lg:w-2/3'}>
                            <PostCards/>
                        </div>
                        <div  className={'w-full md:w-1/3 md:flex md:space-x-6 lg:block lg:space-x-0 flex-col justify-center px-2'}>
                            <div className={'w-full md:w-1/2 lg:w-full'}><Topics/></div>
                            <div className={'w-full md:w-1/2 lg:w-full'}><FormSubscribe/></div>
                        </div>
                    </div>
                    <Pagination/>
                </div>
        </main>
    );
};

export default Main;
