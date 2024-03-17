import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../product/Product';


const Shop = () => {
    const [products , setPorducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setPorducts(data))
    },[]);
    return (
        <div className='Shop'>
            <div className="shop-items">
                {
                    products.map(product => <Product items = {product}  ></Product>)
                }

            </div>


            <div className="shop-details">

            </div>
        </div>
    );
};

export default Shop;