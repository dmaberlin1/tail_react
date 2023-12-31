import React from 'react';

const Footer = () => {
    return (
        <footer className={'border-t mt-10 py-10 px-2'}>
            <div className={'md:flex'}>
                <div className={'w-full mb-5 md:w-2/5'}>
                    <h6 className={'font-semibold text-center text-gray-700 mb-3'}>Company</h6>
                    <ul className={'flex flex-row gap-4'}>
                        <li><a className={'footer-link'} href="#">Team</a></li>
                        <li><a className={'footer-link'} href="#">About us</a></li>
                    </ul>
                </div>
                <div className={'w-full mb-5 md:w-2/5'}>
                    <h6 className={'font-semibold text-center text-gray-700 mb-3'}>Content</h6>
                    <ul className={'flex flex-row gap-4'}>
                        <li><a
                            className={'footer-link'}
                            href="#">Block</a>
                        </li>
                        <li><a
                            className={'footer-link'}
                            href="#">Policy</a></li>
                        <li><a
                            className={'footer-link'}
                            href="#">Documentation</a></li>
                    </ul>
                </div>
                <div className={'w-full mb-5 md:w-1/5'}>
                    <h6 className={'font-semibold text-center text-gray-700 mb-3'}>Contact Us</h6>
                    <ul className={'flex flex-row gap-4'}>
                        <li><a
                            className={'footer-link footer-link-icons'}
                            href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="svg-custom">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/>
                            </svg>
                        </a>
                        </li>
                        <li><a
                            className={'footer-link footer-link-icons'}
                            href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="svg-custom">
                                <path strokeLinecap="round"
                                      d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"/>
                            </svg>

                        </a></li>
                        <li><a
                            className={'footer-link footer-link-icons'}
                            href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="svg-custom">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                            </svg>
                        </a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
