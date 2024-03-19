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
    // let [isIncart , selectItem]  = useState([]);
    let [totalPrice , priceSetter] = useState(0);
    let [totalPrduct , setProduct] = useState([]);
    let [cntr , setCount] = useState(0);
    const handleCartBtn = (product) =>{
        // console.log(product);
        priceSetter(totalPrice+= parseInt(product.price));
        console.log(totalPrice);
        setCount(cntr+1);
        setProduct([...totalPrduct,product])
        console.log(totalPrduct)
        // isIncart.push(product.id)
        // console.log(isIncart)
    }
    return (
        <div className='Shop'>
            <div className="shop-items">
                {
                    products.map(product => <Product key = {product.id} handleCartBtn = {handleCartBtn} items = {product}  ></Product>)
                }

            </div>
            <div className="shop-details">
                <h2>Order Summery</h2>
                <h3>Selected Items : {cntr}</h3>
                <h3>Total Price : {totalPrice}</h3>
            </div>
        </div>
    );
};

export default Shop;