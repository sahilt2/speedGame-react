import React from 'react';
import './Circle.css';

const Circle = (props) => {
    //console.log(props);
    return (
        <div className='circles'>
        <div className='Circle' onClick = {props.click}>
         
        
        </div>
        </div>
    );
};

export default Circle;