import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           
            <svg xmlns="http://www.w3.org/2000/svg">
            <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
            </filter>
            </svg>
            <h1 filter-content='S'>SpeedGame</h1>
         
        </div>
    );
};

export default Header;