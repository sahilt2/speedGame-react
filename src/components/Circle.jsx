import React from 'react';
import './Circle.css';

const Circle = (props) => {
 
    return (
        <div className='circles'>
            
        <div className={`Circle ${props.active? props.color:''}` }
        onClick = {props.click} style = {{pointerEvents:props.pointerToggle? 'auto':'none'}}>
             
            <p>{props.id}</p>
        
{/* inline styling pointer events condition if game is on then auto if not then none */}
        </div>
        </div>
    );
};

export default Circle;