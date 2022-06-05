import React from 'react';
import { useState, useEffect } from 'react';
import './Shop.css';
import SingleShop from '../SingleShop/SingleShop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import getAllShops from '../../states/actions/shopActions';
const Shop = () => {
    const {shops, isLoading, error} = useSelector(state => state);
    const [searchText, setSearchText ] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllShops());
    }, [shops])
    const handleSearch = event =>{
        const search = event.target.value;
        setSearchText(search.toLowerCase());
        if(searchText !== ''){
            const newShops = shops.filter(shop => {
                return Object.values(shop).join(" ").toLowerCase().includes(searchText);
                
            });
            setSearchResult(newShops);
        }
        else{
            searchResult(shops);
        }
    }
    return (
        <div className='pb-5'>
            <div className="container-fluid back-design">
          <div className="header d-flex justify-content-center mt-5">
            <h1 className="">Find The Best Shops</h1>
          </div>
          <div className="input-group mb-3 mx-auto mt-3 mb-3 search-input-box">
              <input onChange={handleSearch} className='search-input form-control' type="text" placeholder={`Search By Name, Area or dates `} value={searchText} id="search-input" />
          </div>
        </div>
            <div>
                {
                    searchText.length < 1 ?
                    shops?.map(shop => <SingleShop
                        key={shop._id}
                        shop={shop}
                    ></SingleShop>)
                    :
                    searchResult?.map(shop => <SingleShop
                        key={shop._id}
                        shop={shop}
                    ></SingleShop>)
                }
            </div>

        </div>
    );
};

export default Shop;