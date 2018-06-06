import React, { Component } from 'react';
import axios from 'axios';
import routes from '../../helpers/urls';
import Header from '../Header';
import MainPage from '../MainPage';
import './style.css';
import PostPage from '../PostPage';


class App extends Component {
    state = { 
        showPost: false,
        openedPostData: {
            post: {},
            user: {},
        },
    };

    openPost = (post, user) => {
        this.setState({
            showPost: true,
            openedPostData: { post, user },
        });
    };
    closePost = () => this.setState({ showPost: false });

    render() {
        return (
            <div className="wraper">
                <Header />
                {this.state.showPost ? 
                    <PostPage
                        closePost={this.closePost}
                        post={this.state.openedPostData.post}
                        user={this.state.openedPostData.user} />
                    : 
                    <MainPage openPost={this.openPost}/>}
            </div>
        );
    }
}

export default App;
