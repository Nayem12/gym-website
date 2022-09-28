import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>
            <div>
                <h3>Nayem Hossain</h3>
                <p>location</p>
            </div>
            <div className='personal-info'>
                <div className='persona-details'>
                    <h5>75 <small>kg</small></h5>
                    <small>Weight</small>
                </div>
                <div className='persona-details'>
                    <h5>6.5</h5>
                    <small>Height</small>
                </div>
                <div className='persona-details'>
                    <h5>25 <small>yrs</small></h5>
                    <small>Age</small>
                </div>
            </div>
            <p>Add A Break</p>
            <div className='personal-info'>
                <div className='persona-details'>
                    <h5>75 <small>kg</small></h5>
                    <small>Weight</small>
                </div>
                <div className='persona-details'>
                    <h5>6.5</h5>
                    <small>Height</small>
                </div>
                <div className='persona-details'>
                    <h5>25 <small>yrs</small></h5>
                    <small>Age</small>
                </div>
            </div>
            <p>Exercise Details</p>
            <div className='Exercise-time'>
                <p>Exercise time</p>
            </div>
            <div className='Exercise-time'>
                <p>Break time</p>
            </div>
        </div>
    );
};

export default Cart;