import React from 'react';
import './Difficulty.css';

const Difficulty = (props) => {
    return (
        <div className='overlay'>
            <div className='difficulty_modal'>
               <h2>Select game mode</h2>
               <div>
              <button onClick={props.easy}>Easy</button>
              <button onClick={props.hard}>Hard</button>
              </div>
            </div>
        </div>
    );
};

export default Difficulty;