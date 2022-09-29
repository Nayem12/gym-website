import React, { useState } from 'react';
import Cart from '../Cart/Cart';

const Breaktime = (props) => {
    console.log(props)
    const [time, setTime] = useState([]);
    // console.log(time)
    // const { time } = props
    const buttonadd = (props) => {
        // const newTime = [...time, props];
        setTime(props);
        // console.log(props)

    }
    return (
        <div className='div-button'>
            {/* <Cart></Cart> */}
            <button onClick={() => buttonadd(props)} className='button'>{props.time}s</button>
        </div>
    );
};

export default Breaktime;