import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Gym.css'
import Cart from '../Cart/Cart';

const Gym = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCart = (product) => {
        
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className='gym-container'>
            <div className='section-container'>
                <div className='header-info'>
                    <img src={'https://i.ibb.co/7WQZj5B/logo.jpg'} alt="" />
                    <div><h1 className='title-name'>Achieve-fitness-magic</h1>
                        <h5>Select your exercise</h5></div>
                </div>
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Gym;