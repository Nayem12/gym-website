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
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className='gym-container'>
            <div className='section-container'>
                <h1 className='title-name'>Achieve-fitness-magic</h1>
                <h5 className='title-name'>Select today's exercise</h5>
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