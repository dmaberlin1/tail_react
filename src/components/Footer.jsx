import React from 'react';

const Footer = () => {
    return (
        <footer className={'border-t mt-10 py-10 px-2'}>
            <div className={'flex flex-row gap-5'}>
                <div className={''}>
                    <h6 className={'font-semibold text-gray-700 mb-4'}>Company</h6>
                    <ul>
                        <li><a className={'footer-link'} href="#">Team</a></li>
                        <li><a className={'footer-link'} href="#">About us</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className={'font-semibold text-gray-700 mb-4'}>Content</h6>
                    <ul>
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
            </div>
        </footer>
    );
};

export default Footer;
