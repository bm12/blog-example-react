import React, { Component } from 'react';
import axios from 'axios';
import routes from '../../helpers/urls'
import Header from '../Header'
import Banner from '../Banner';
import './style.css';


class App extends Component {
  state = {
    posts: [],
  }
  async componentDidMount() {
    console.log(process.env.REACT_APP_HOST_NAME);
    const res = await axios.get(`${routes.hostname}/posts?_page=1&_limit=12`);
    this.setState({ posts: res.data });
  }

  render() {
    const { posts } = this.state;
    console.log('render');
    return (
      <div className="wraper">
        <Header />
        <main className="main-page">
          <Banner />
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
