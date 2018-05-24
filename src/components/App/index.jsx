import React, { Component } from 'react';
import axios from 'axios';
import routes from '../../helpers/urls'
import './style.css';


class App extends Component {
  state = {
    posts: [],
  }
  componentDidMount() {
    console.log(process.env.REACT_APP_HOST_NAME);
    // axios.get('./posts?_page=1&_limit=12').then(res => {
    axios.get(`${routes.hostname}/posts?_page=1&_limit=12`).then(res => {
      this.setState({ posts: res.data });
      console.log(res);
    });
  }

  render() {
    const { posts } = this.state;
    console.log('render');
    return (
      <div className="wraper">
        <header className="header">
          <div className="container">
            <div className="header__logo"> blog-example </div>
          </div>
        </header>
        <main className="main-page">
          <div className="banner">
            <div className="container">
              <h1 className="banner__title"> blog-exapmle </h1>
              <p className="banner__sub-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          <div className="blogs-list">
            <div className="container">
              <div className="row no-gutters">
                {posts.map((post) => {
                  return (
                    <div key={post.id} className="col-md-4 blogs-list__item">
                      <div className="blog-card">
                        <header className="blog-card__head">
                          <img className="img-fluid blog-card__img" src={`https://placeimg.com/640/480/arch?${post.id}`} width="640" height="480" alt="" />
                          <div className="blog-card__category">Architect {post.id}</div>
                        </header>
                        <div className="blog-card__content">
                          <h5 className="blog-card__author">Leanne Graham:</h5>
                          <p className="blog-card__title">{post.title}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
