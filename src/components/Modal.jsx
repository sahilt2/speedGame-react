import React from 'react';
import './Modal.css';

const Modal = (props) => {
    return (
        <div className='Overlay'> 
        <div className='modal'>
            <h2>Game Over</h2>
            <p>Your Score is {props.score}</p>
            <button onClick={props.click}>x</button>
        </div>
            
        </div>
    );
};

export default Modal;