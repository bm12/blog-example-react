import React, { Component } from 'react';
import axios from 'axios';
import routes from '../../helpers/urls';
import Header from '../Header';
import MainPage from '../MainPage';
import './style.css';
import PostPage from '../PostPage';


class App extends Component {
    state = { showPost: true }

    openPost = (post) => {
        this.setState({ showPost: true });
    };
    closePost = (post) => {
        this.setState({ showPost: false });
    };

    render() {
        return (
            <div className="wraper">
                <Header />
                {this.state.showPost ? 
                    <PostPage closePost={this.closePost} />
                    : 
                    <MainPage openPost={this.openPost}/>}
            </div>
        );
    }
}

export default App;
