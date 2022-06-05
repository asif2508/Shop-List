import React from 'react';
import { useState, useEffect } from 'react';
import './Shop.css';
import SingleShop from '../SingleShop/SingleShop';
const Shop = () => {
    const [shops, setShops] = useState([]);
    const [text, setText ] = useState('');
    useEffect(() => {
        fetch('http://localhost:5000/shops')
            .then(res => res.json())
            .then(data => setShops(data))
    }, [shops])
    const handleSearch = event =>{
        const search = event.target.value;
        setText(search);
    }

    const handleSearchKey = () =>{
        const newSearch = shops.filter(shop => shop.name === shop.name.includes(text))
        setShops(newSearch)
    }
    return (
        <div>
            <div className="container-fluid back-design">
          <div className="header d-flex justify-content-center mt-5">
            <h1 className="">Find The Best Shops</h1>
          </div>
          <div className="input-group mb-3 w-50 mx-auto mt-3 mb-3">
              <input onChange={handleSearch} className='search-input form-control' type="text" placeholder="Search By Name, Area or Opening date" id="search-input" />
              <button onClick={handleSearchKey}  className="btn btn-dark" type="button" id="search-button">Search</button>
          </div>
        </div>
            <div>
                {
                    shops?.map(shop => <SingleShop
                        key={shop._id}
                        shop={shop}
                    ></SingleShop>)
                }
            </div>

        </div>
    );
};

export default Shop;