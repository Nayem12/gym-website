import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const breaktimes = [
        { time: 10 },
        { time: 20 },
        { time: 30 },
        { time: 40 },
        { time: 50 },

    ]
    const { cart } = props;
    let ExerciseTime = 0;
    for (const product of cart) {
        ExerciseTime = ExerciseTime + product.time;
    }
    return (
        <div className='cart'>
            <div>
                <h3>Nayem Hossain</h3>
                <p>location <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon></p>

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
                    {
                        breaktimes.map(breaktime => <Breaktime time={breaktime.time}></Breaktime>)
                    }
                </div>

            </div>
            <p>Exercise Details</p>
            <div className='Exercise-time'>
                <p>Exercise time: {ExerciseTime} seconds</p>
            </div>
            <div className='Exercise-time'>
                <p>Break time</p>
            </div>
        </div>
    );
};
function Breaktime(props) {
    const buttonadd = () => {
        console.log('done')
    }
    return (
        <div className='div-button'>
            <button onClick={buttonadd} className='button'>{props.time}s</button>
        </div>
    )
}

export default Cart;