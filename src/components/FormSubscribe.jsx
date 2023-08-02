import React from 'react';

const FormSubscribe = () => {
    return (
        <>
            <div className="border dark:border-gray-900 border-dotted md:hidden lg:block"></div>
        <div className={'my-5 md:my-0 lg:my-y'}>
            <h5 className={'font-bold text-lg text-gray-700 dark:text-slate-300 uppercase mb-2'}>Subscribe</h5>
            <p className={'text-gray-600 mb-4'}>Subscribe to our newsletter</p>
            <input className={'dark:bg-gray-700 dark:border-none dark:focus:bg-gray-600 dark:text-slate-300 text-gray-700 bg-gray-100 p-2 w-full border rounded-t hover:border-gray-600 transition-all duration-500'}
                placeholder={'your email address'} type="email"/>
            <button className="dark:bg-emerald-600 dark:hover:bg-emerald-700 px-4 py-2 bg-emerald-400 text-white  dark:text-slate-300 rounded-b w-full transition-all duration-500 hover:bg-emerald-500">Subscribe</button>
        </div>
            <div className="border border-dotted dark:border-none"></div>
        </>
    );
};

export default FormSubscribe;
