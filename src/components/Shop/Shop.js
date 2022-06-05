import React from 'react';
import { useState,useEffect } from 'react';
import './Shop.css';
import SingleShop from '../SingleShop/SingleShop';
const Shop = () => {
    const [shops, setShops] = useState();
    useEffect(()=>{
        fetch('shops.json')
        .then(res => res.json())
        .then(data => setShops(data))
    },[])
    return (
        <div>
           <div>
           <h1>Search Your Shop</h1>
           <input type="search" className='w-50 fw-bold search-input'/>
           </div>
           <hr  className='w-75 mx-auto'/>
           <div>
               {
                   shops.map(shop => <SingleShop 
                   shop={shop}
                   ></SingleShop>)
               }
           </div>

        </div>
    );
};

export default Shop;