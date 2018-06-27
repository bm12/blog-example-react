import React, { Component } from 'react';
import Preloader from "../Preloader";
import PropTypes from 'prop-types';
import './post-page.css';

class PostPage extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                postId: PropTypes.string.isRequired,
            }),
        }),
    };

    componentDidMount() {
        if (!this.props.loaded) {
            console.log(11);
            this.props.fetchPostAndUserById(this.props.match.params.postId);
        }
    }

    render() {
        if (!this.props.loaded) return <Preloader />

        const { post } = this.props;
        const { user } = post;
        const postImg = post.images[0];
        const postText = post.body;
        
        return (
            <main className="post-page">
                <div className="container">
                    <span className="post-page__go-back go-back" onClick={this.props.history.goBack}>
                        <span className="go-back__arrow">&larr;</span> 
                        <span className="go-back__text">Go back</span>
                    </span>
                    <header className="post__header">
                        <h2 className="post__title">{post.title}</h2>
                        <div className="post__author">Author: <span className="post__author-name">{user.name}</span></div>
                    </header>
                    <div className="post__body">
                        <div className="post__image-wraper">
                            <img src={postImg.url} alt="" className="img-fluid post-image"/>
                            <div className="post-image__author">
                                Image author: 
                                <a href={postImg.authorUrl} target="_blank" className="post-image__author-link">
                                    {postImg.author}
                                </a>
                            </div>
                        </div>
                        <div className="post__text" dangerouslySetInnerHTML={{ __html: postText }}></div>
                    </div>
                </div>
            </main>
        );
    }
}

export default PostPage;