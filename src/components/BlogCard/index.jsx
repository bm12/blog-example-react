import React from 'react';
import './blog-card.css'

function BlogCard(props) {
    const authorPost = (props.getUserById(props.userId) || { name: '' }).name;
    return (
        <div className="col-md-4 blogs-list__item">
            <div className="blog-card">
                <header className="blog-card__head">
                    <img className="img-fluid blog-card__img" src={props.image.url} width="640" height="480" alt="" />
                    <div className="blog-card__category" title="Image author">{props.image.author}</div>
                </header>
                <div className="blog-card__content">
                    <h5 className="blog-card__author" title="Author of the post">{authorPost}</h5>
                    <p className="blog-card__title" title="Post title">{props.title}</p>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;