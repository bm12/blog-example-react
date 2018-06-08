import React from 'react';
import './preloader.css';

function Preloader(props){
    return (
        <div className="preloader">
            <div className="preloader__spinner"></div>
            <h3 className="preloader__title">Please wait...</h3>
        </div>
    );
}

export default Preloader;