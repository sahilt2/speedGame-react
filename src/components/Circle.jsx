import React from 'react';
import './Circle.css';

const Circle = (props) => {
    //console.log(props);
 /*    let circleClass = 'Circle';
    if (props.id ===1){
        circleClass = 'green'
    } else if(props.id===2){
        circleClass = 'red'
    }else if (props.id===3){
        circleClass = 'blue'
    }else{
        circleClass = 'yellow'
    } */
    return (
        <div className='circles'>
        <div className='Circle' onClick = {props.click}>
            
            <p>{props.id}</p>
        
{/* inline styling pointer events condition if game is on then auto if not then none */}
        </div>
        </div>
    );
};

export default Circle;