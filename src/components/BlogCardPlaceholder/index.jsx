import React from 'react';
import cn from "classnames";
import './blog-card-placeholder.css'

function BlogCardPlaceholder({ ready, children, offAnimation }){
    if (!ready){
        return (
            <div className={cn('col-md-4', 'blogs-list__item', { 'show-animation': !offAnimation})} title="loading">
                <div className="blog-card-placeholder">
                    <header className="blog-card-placeholder__head">
                        <div className="blog-card-placeholder__image-placeholder"></div>
                        <div className="blog-card-placeholder__category"></div>
                    </header>
                    <div className="blog-card-placeholder__content">
                        <div className="blog-card-placeholder__author"></div>
                        <div className="blog-card-placeholder__title"></div>
                    </div>
                </div>
            </div>
        )
    }

    return children;
}

export default BlogCardPlaceholder;