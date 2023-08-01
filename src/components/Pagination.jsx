import React from 'react';

const Pagination = () => {
    return (
        <div className={'mt-20 mb-10'}>
            <ul className={'flex justify-center gap-0.5'}>
                <li><a className={'pagination-item rounded-l-lg'} href="#">Previous</a></li>
                <li><a className={'pagination-item'} href="#">1</a></li>
                <li><a className={'pagination-item'} href="#">2</a></li>
                <li><a className={'pagination-item pagination-item-active'} href="#">3</a></li>
                <li><a className={'pagination-item'} href="#">4</a></li>
                <li><a className={'pagination-item'} href="#">5</a></li>
                <li><a className={'pagination-item rounded-r-lg'} href="#">Next</a></li>
            </ul>
        </div>
    );
};

export default Pagination;
