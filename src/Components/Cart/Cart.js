import React, { useState } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'


const Cart = (props) => {


    const { cart } = props;
    let ExerciseTime = 0;
    for (const product of cart) {
        ExerciseTime = ExerciseTime + product.time;
    }
    const [time, setTime] = useState('')
    const getOldTIme = localStorage.getItem('breakTime');
    const oldBreakTime = JSON.parse(getOldTIme);
    const handleBreak = (breaks) => {
        if (oldBreakTime) {
            setTime(breaks);
            localStorage.setItem('breakTime', breaks);
        } else {
            localStorage.setItem('breakTime', breaks);
            setTime(breaks);
        }
    }

    return (
        <div className='cart'>
            <div className='image-setup'>
                <img src={'https://i.ibb.co/ZhqRZ6G/IMG-20191222-155955.jpg" alt="IMG-20191222-155955'} alt="" />
                <div>
                    <h3>Nayem Hossain</h3>
                    <p>location <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon></p>
                </div>

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
            <div>
                <div className='breaking-time'>
                    <div className='time-single'>
                        <button onClick={() => handleBreak(40)} className='button'>40s</button>
                        <button onClick={() => handleBreak(30)} className='button'>30s</button>
                        <button onClick={() => handleBreak(20)} className='button'>20s</button>
                        <button onClick={() => handleBreak(50)} className='button'>50s</button>
                        <button onClick={() => handleBreak(60)} className='button'>60s</button>
                    </div>
                </div>

            </div>
            <p>Exercise Details</p>
            <div className='Exercise-time'>
                <p>Exercise time: {ExerciseTime} seconds</p>
            </div>
            <div className='Exercise-time'>
                <p>Break time: {time ? time : oldBreakTime ? oldBreakTime : 0} seconds</p>
            </div>
        </div>
    );
};


export default Cart;