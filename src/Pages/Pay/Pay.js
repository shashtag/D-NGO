import React from 'react';
import './Pay.scss';

const Pay = ()=> {
    return(
        <div class="pay">
            <h1>Pole</h1>
            <h1>Choose where you will donate</h1>
            <div class="option">Martha</div>
            <div class="option">Mom</div>
            <div class="option">Wife</div>
            <div class="option">Girlfriend</div>
            <input type="text" placeholder='Type here if chosen option is not given'/>
            <hr />
            <h1>This month's results</h1>
            <hr />
        </div>
    )
}

export default Pay;