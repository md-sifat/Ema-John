import React from 'react';
import './Product.css'

const Product = (props) => {
    const {id , category ,name, price, ratings ,ratingsCount ,quantity ,stock ,seller,img} = props.items
    return (
        <div className='Product'>
            <div className="content">
                <img src={img} alt="" />
                <div className="details">
                    <h4>{name}</h4>
                    <h4>Price ${price}</h4>
                    <h4>Manufacturar {seller}</h4>
                    <h4>Rating {ratings}</h4>

                </div>
                
            </div>
            <div className="button">
                <button className='btn'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;