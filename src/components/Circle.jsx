import React from 'react';
import './Circle.css';

const Circle = (props) => {
    //console.log(props);
    let active = '';
    if (props.id ===1){
        active = 'green'
    } else if(props.id===2){
        active = 'red'
    }else if (props.id===3){
        active= 'blue'
    }else{
        active = 'yellow'
    }
    return (
        <div className='circles'>
            
        <div className={`Circle ${props.active? {active}:''}` }
        onClick = {props.click} style = {{pointerEvents:props.pointerToggle? 'auto':'none'}}>
             
            <p>{props.id}</p>
        
{/* inline styling pointer events condition if game is on then auto if not then none */}
        </div>
        </div>
    );
};

export default Circle;