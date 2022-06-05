import React from 'react';
import './SingleShop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
const SingleShop = ({ shop }) => {
    const { _id, name, catagory, location, opening, closing } = shop;
    const handleDeleteShop = () => {
        fetch(`http://localhost:5000/shops/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ _id }),
        })
            .then(res => {
                if (res.ok) {
                    toast.error('Shop Deleted Successfully!');
                    return res.json();
                } else {
                    return toast.error("Failed to Delete the Shop");
                }
            })
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className='card-style mx-auto text-start'>
            <div className='d-flex justify-content-between align-items-center'>
                <h2>{name}</h2>
                <button onClick={handleDeleteShop} className='add-shop-btn'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
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