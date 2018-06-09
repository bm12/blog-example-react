import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from '../Header';
import MainPage from '../MainPage';
import './style.css';
import PostPage from '../PostPage';


function App() {
    return (
        <div className="wraper">
            <Header />
            <Switch>
                <Route exact path='/' render={(props) => <Redirect to='/main-page/1' {...props} />} />
                <Route path='/main-page/:pageId' component={MainPage} />
                <Route path='/post-page/:postId' component={PostPage} />
            </Switch>
        </div>
    );
}

export default App;
