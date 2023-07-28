import React from 'react';

const Footer = () => {
    return (
        <footer className={'border-t mt-10 py-10 px-2'}>
            <div className={'flex flex-row gap-5'}>
                <div className={''}>
                    <h6 className={'font-semibold text-gray-700 mb-4'}>Company</h6>
                    <ul>
                        <li><a className={'inline-block text-gray-500 py-2 hover:underline underline-offset-4'} href="#">Team</a></li>
                        <li><a className={'inline-block text-gray-500 py-2  hover:underline underline-offset-4'} href="#">About us</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className={'font-semibold text-gray-700 mb-4'}>Content</h6>
                    <ul>
                        <li><a
                            className={'inline-block text-gray-500 py-2 hover:underline underline-offset-4 decoration-2'}
                            href="#">Block</a>
                        </li>
                        <li><a
                            className={'inline-block text-gray-500 py-2  hover:underline underline-offset-4 decoration-2 decoration-orange-300 decoration-double'}
                            href="#">Policy</a></li>
                        <li><a
                            className={'inline-block text-gray-500 py-2  hover:underline underline-offset-4 decoration-2 decoration-wavy'}
                            href="#">Documentation</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
