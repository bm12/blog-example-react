import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Header from '../Header';
import MainPageContainer from '../../containers/MainPage';
import PostPageContainer from '../../containers/PostPage';
import links from "../../helpers/links";
import './style.css';

class App extends PureComponent {
    componentDidMount() {
        this.props.listenNetworkState();
    }

    render() {
        const {
            networkState
        } = this.props;
        return (
            <Router>
                <div className="wrapper">
                    {networkState === 'offline' && (
                        <div className="offline-warning">
                            Sorry, but you offline now :-(
                        </div>
                    )}
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
}

export default App;
