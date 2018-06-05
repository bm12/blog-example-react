import React from 'react';
import './blog-card.css'

function BlogCard({ post, getUserById, openPost }) {
    const authorPost = (getUserById(post.userId) || { name: '' }).name;
    return (
        <div className="col-md-4 blogs-list__item" onClick={openPost}>
            <div className="blog-card">
                <header className="blog-card__head">
                    <img className="img-fluid blog-card__img" src={post.images[0].url} width="640" height="480" alt="" />
                    <div className="blog-card__category" title="Image author">{post.images[0].author}</div>
                </header>
                <div className="blog-card__content">
                    <h5 className="blog-card__author" title="Author of the post">{authorPost}</h5>
                    <p className="blog-card__title" title="Post title">{post.title}</p>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;