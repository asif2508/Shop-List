import React from 'react';
import './SingleShop.css';
const SingleShop = ({shop}) => {
    const {name, catagory, location, opening, closing} = shop;
    return (
        <div className='card-style mx-auto text-start'>
            <h2>{name}</h2>
            <p></p>
        </div>
    );
};

export default SingleShop;