import React from 'react';

const FormSubscribe = () => {
    return (
        <>
            <div className="border border-dotted"></div>
        <div className={'my-5'}>
            <h5 className={'font-bold text-lg text-gray-700 uppercase mb-2'}>Subscribe</h5>
            <p className={'text-gray-600 mb-4'}>Subscribe to our newsletter</p>
            <input className={'text-gray-700 bg-gray-100 p-2 w-full border rounded-t hover:border-gray-600'}
                placeholder={'your email address'} type="email"/>
            <button className="px-4 py-2 bg-emerald-400 text-white rounded-b w-full hover:bg-emerald-500">Subscribe</button>
        </div>
            <div className="border border-dotted"></div>
        </>
    );
};

export default FormSubscribe;
