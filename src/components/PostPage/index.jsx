import React from 'react';
import './post-page.css';
function PostPage(props){
    const text = 'cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut';
    const postText = text.replace(/\n/g, '<br />');

    return (
        <main className="post-page">
            <div className="container">
                <span className="post-page__go-back go-back" onClick={props.closePost}>
                    <span className="go-back__arrow">&larr;</span> 
                    <span className="go-back__text">Вернуться назад</span>
                </span>
                <header className="post__header">
                    <h2 className="post__title">
                        laboriosam dolor voluptates
                    </h2>
                    <div className="post__author">Author: <span className="post__author-name">Leanne Graham</span></div>
                </header>
                <div className="post__body">
                    <div className="post__image-wraper">
                        <img src="https://picsum.photos/800/600?image=87" alt="" className="img-fluid post-image"/>
                        <div className="post-image__author">
                            Image author: <a href="https://unsplash.com/@barcelona" target="_blank" className="post-image__author-link">Barcelona</a>
                        </div>
                    </div>
                    <div className="post__text" dangerouslySetInnerHTML={{ __html: postText}}></div>
                </div>
            </div>
        </main>
    );
}

export default PostPage;