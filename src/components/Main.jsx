import React from 'react';
import FormSubscribe from "./FormSubscribe";
import PostCards from "./PostCards";
import MainMenu from "./MainMenu";
import Banner from "./Banner";
import Topics from "./Topics";
import Pagination from "./Pagination";

const Main = () => {
    return (
        <main className={'flex'}>
            <>


                <div className={'flex flex-col'}>
                    <MainMenu/>
                    <Banner/>
                    <div className={'flex flex-row'}>
                        <div className={'w-2/3'}>
                            <PostCards/>
                        </div>
                        <div  className={'w-1/3 flex flex-col justify-center px-2'}>
                            <Topics/>
                            <FormSubscribe/>
                        </div>
                    </div>
                    <Pagination/>
                </div>
            </>
        </main>
    );
};

export default Main;
