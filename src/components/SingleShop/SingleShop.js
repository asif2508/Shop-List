import React from 'react';
import './SingleShop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faTrash } from '@fortawesome/free-solid-svg-icons';
const SingleShop = ({shop}) => {
    const {name, catagory, location, opening, closing} = shop;
    return (
        <div className='card-style mx-auto text-start'>
            <div className='d-flex justify-content-between align-items-center'>
            <h2>{name}</h2>
            <button className='btn-style'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
            </div>
            <p><FontAwesomeIcon className='me-2' icon={faLocationPin}></FontAwesomeIcon>{location} </p>
            <div className='d-flex justify-content-between flex-wrap'>
            <p>Catagory: {catagory}</p>
            <p>Opening Date: {opening}</p>
            <p>Closing Date: {closing}</p>
            </div>
        </div>
    );
};

export default SingleShop;