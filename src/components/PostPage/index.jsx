import React from 'react';
import './post-page.css';
function PostPage(props){
    const { post, user } = props;
    const postImg = post.images[0];
    const postText = post.body.replace(/\n/g, '<br />');

    return (
        <main className="post-page">
            <div className="container">
                <span className="post-page__go-back go-back" onClick={props.closePost}>
                    <span className="go-back__arrow">&larr;</span> 
                    <span className="go-back__text">Вернуться назад</span>
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

export default PostPage;