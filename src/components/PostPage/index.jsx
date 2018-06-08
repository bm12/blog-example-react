import React, { Component } from 'react';
import axios from 'axios';
import routes from '../../helpers/urls';
import './post-page.css';

class PostPage extends Component {
    state = {
        loaded: false,
        post: {},
    };

    async componentDidMount() {
        const { postId } = this.props.match.params;
        const resp = await axios(routes.getPostWithImgAndUser(postId));
        this.setState({
            post: resp.data,
            loaded: true,
        });
    }

    render() {
        
        if (!this.state.loaded) return <h3>Please wait</h3>;

        const { post } = this.state;
        const { user } = post;
        const postImg = post.images[0];
        const postText = post.body.replace(/\n/g, '<br />');


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