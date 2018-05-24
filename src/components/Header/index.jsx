import React, { Component } from 'react';
import './header.css'
function Header(props) {
    return (
        <header className="header">
          <div className="container">
            <div className="header__logo"> blog-example </div>
          </div>
        </header>
    );
}

export default Header;