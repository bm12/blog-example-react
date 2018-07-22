import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from '../Header';
import MainPageContainer from '../../containers/MainPage';
import PostPageContainer from '../../containers/PostPage';
import links from "../../helpers/links";
import './style.css';

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Header />
                <Switch>
                    <Redirect exact from='/' to={links.firstPageLink} />
                    <Route path={`${links.mainPageLink}/:pageId`} component={MainPageContainer} />
                    <Route path={`${links.postPageLink}/:postId`} component={PostPageContainer} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
