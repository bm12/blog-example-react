import React from 'react';
import './banner.css';

function Banner(props) {
    return (
        <div className="banner">
            <div className="container">
                <h1 className="banner__title"> blog-exapmle </h1>
                <p className="banner__sub-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
        </div>
    )
}

export default Banner;