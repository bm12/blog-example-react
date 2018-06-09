import React, { Component } from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';
import routes from '../../helpers/urls';
import Header from '../Header';
import MainPage from '../MainPage';
import './style.css';
import PostPage from '../PostPage';


function App() {
    return (
        <div className="wraper">
            <Header />
            <Route exact path='/' render={(props) => <Redirect to='/main-page/1' {...props} />} />
            <Route path='/main-page/:pageId' component={MainPage} />
            <Route path='/post-page/:postId' component={PostPage} />
        </div>
    );
}

export default App;
