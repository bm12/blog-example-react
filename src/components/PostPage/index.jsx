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
        loaded: PropTypes.bool.isRequired,
        post: PropTypes.shape({
            body: PropTypes.string.isRequired,
            id: PropTypes.number,
            images: PropTypes.arrayOf(PropTypes.shape({
                author: PropTypes.string.isRequired,
                authorUrl: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
            })).isRequired,
            title: PropTypes.string.isRequired
        }),
        user: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }),
    };

    componentDidMount() {
        if (!this.props.loaded) {
            const { postId } = this.props.match.params;

            this.props.fetchPostAndUserById(postId);
            this.props.fetchCommentsByPostId(postId);
        }
    }

    render() {
        if (!this.props.loaded) return <Preloader />;

        const { post, user, comments } = this.props;
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
                                <a href={postImg.authorUrl} target="_blank" className="post-image__author-link" rel='noreferrer noopener'>
                                    {postImg.author}
                                </a>
                            </div>
                        </div>
                        <div className="post__text" dangerouslySetInnerHTML={{ __html: postText }}></div>
                    </div>
                    <div className="comments">
                        <h3 className="comments__title">{comments.length} Comments:</h3>
                        <ul className="comments__list">
                            {comments.map(comment => (
                                <li key={comment.id} className="comments__item">
                                    <div className="comments__author-info">
                                        <span className="comments__author-email">{comment.email}</span>
                                    </div>
                                    <div className="comments__text" dangerouslySetInnerHTML={{ __html: comment.body }}></div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        );
    }
}

export default PostPage;