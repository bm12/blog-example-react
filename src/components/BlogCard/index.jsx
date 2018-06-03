import React from 'react';
import './blog-card.css'

function BlogCard(props) {
    return (
        <div className="col-md-4 blogs-list__item">
            <div className="blog-card">
                <header className="blog-card__head">
                    <img className="img-fluid blog-card__img" src={`https://placeimg.com/640/480/arch?${props.id}`} width="640" height="480" alt="" />
                    <div className="blog-card__category">Architect {props.id}</div>
                </header>
                <div className="blog-card__content">
                    <h5 className="blog-card__author">Leanne Graham:</h5>
                    <p className="blog-card__title">{props.title}</p>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;