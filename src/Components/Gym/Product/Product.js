import React from 'react';
import './Product.css'

const Product = (props) => {
    const { product, handleAddToCart } = props
    const { name, about, age, img, time, id } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p><small>{about}</small></p>
                <p><small>age: {age}</small></p>
                <p><small>Time required : {time}s</small></p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>Add to list</button>
        </div>
    );
};

export default Product;