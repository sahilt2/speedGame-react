import React from 'react';
import './Modal.css';

const Modal = (props) => {
    let message ='';
    if(props.score <=5){
        message = 'Babies can do better';
    } else if (props.score >5 && props.score<=10){
        message = 'Try harder';
    } else if (props.score >10 && props.score <=20){
        message = 'You are up there';
    } else {
        message = 'Excellent';
    }
    return (
        <div className='Overlay'> 
        <div className='modal'>
            <h2>Game Over</h2>
            <p>Your Score is {props.score}</p>
            <p>{message}</p>
            <button onClick={props.click} title='close'>x</button>
        </div>
            
        </div>
    );
};

export default Modal;